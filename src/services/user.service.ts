import { hash } from "bcrypt";
import { Request } from "express"
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { serializedCreateUserSchema } from "../schemas/user.schema";
import { sign } from "jsonwebtoken";

interface ISerializedUser  {
  id: string;
  email: string;
  name: string;
};

interface iUserLogin {
  status: number,
  message: object
}


class UserService {

  login = async ({validated}: Request): Promise<iUserLogin> => {

    const user: User = await AppDataSource.getRepository(User).findOneBy({
      email: validated.email
    })

    if(!user){
      return {
        status: 401,
        message: {message: "Invalid Credentials"}
      }
    }

    if(!(await user.comparePassword(validated.password))){
      return {
        status: 401,
        message: {message: "Invalid Credentials"}
      }
    }

    const token: string = sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,

      },
      process.env.SECRET_KEY,
      {
        expiresIn: process.env.EXPIRES_IN,
      }
    );


    return { status: 200, message: { user, token }}
  }


  register = async({ validated }: Request): Promise<ISerializedUser> => {
    validated.password = await hash(validated.password, 10);

    const user: User = await AppDataSource.getRepository(User).save(validated);
    
    return await serializedCreateUserSchema.validate(user, {
      stripUnknown: true,
    }) as ISerializedUser;
  }

}

export default new UserService()
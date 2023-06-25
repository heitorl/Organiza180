import { compare, hash } from "bcrypt";
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

    const foundUser: User = await AppDataSource.getRepository(User).findOneBy({
      email: (validated as User).email
    })
    
    if(!foundUser){
      return {
        status: 401,
        message: {message: "Invalid Credentials"}
      }
    }
    if (!(await compare((validated as User).password, foundUser.password))) {
      return {
        status: 401,
        message: {message: "Invalid Credentials"}
      }
    }
    const token: string = sign(
      {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,

      },
      process.env.SECRET_KEY,
      {
        expiresIn: process.env.EXPIRES_IN,
      }
    );
    const { password, ...user } = foundUser  

    return { status: 200, message: { user, token }}
  }


  register = async({ validated }: Request): Promise<ISerializedUser> => {
    (validated as User).password = await hash((validated as User).password, 10);

    const user: User = await AppDataSource.getRepository(User).save(validated);
    
    return await serializedCreateUserSchema.validate(user, {
      stripUnknown: true,
    }) as ISerializedUser;
  }

}

export default new UserService()
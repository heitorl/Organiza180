import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";

interface IUserRepo {
  save: (user: Partial<User>) => Promise<User>;
  all: () => Promise<User[]>;
  findOne: (payload: object) => Promise<User>;
  findById: (id: string) => Promise<User>;
  update: (id: string, payload: Partial<User>) => Promise<UpdateResult>;
  deleteById: (id: string) => Promise<DeleteResult>;
}

class UserRepository implements IUserRepo {
  private ormRepo: Repository<User>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(User);
  }
  findById = async (id: string) => {
    return await this.ormRepo.findOne({ where: { id: id } });
  };
  findOne = async (payload: object) => {
    return await this.ormRepo.findOne({ ...payload });
  };
  save = async (user: Partial<User>) => await this.ormRepo.save(user);

  all = async () => await this.ormRepo.find();

  update = async (id: string, payload: Partial<User>) =>
    await this.ormRepo.update(id, { ...payload });

  deleteById = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new UserRepository();

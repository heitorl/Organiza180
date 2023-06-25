import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Task } from "../entities";

interface ITaskRepo {
  save: (task: Partial<Task>) => Promise<Task>;
  all: () => Promise<Task[]>;
  findOne: (payload: object) => Promise<Task>;
  update: (
    id: string,
    payload: Partial<Task>
  ) => Promise<UpdateResult>;
  deleteById: (id: string) => Promise<DeleteResult>;
}

class TaskRepository implements ITaskRepo {
  private ormRepo: Repository<Task>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Task);
  }

  save = async (task: Partial<Task>) => await this.ormRepo.save(task);

  all = async () => await this.ormRepo.find();

  findOne = async (payload: object) => {
    return await this.ormRepo.findOne({ ...payload });
  };

  update = async (id: string, payload: Partial<Task>) => await this.ormRepo.update(id, { ...payload });
  

  deleteById = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new TaskRepository();
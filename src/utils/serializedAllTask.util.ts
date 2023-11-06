import { Task, User } from "../entities";

interface SerializedTaskData {
  user: {
    id: string;
    email: string;
    name: string;
  };
  tasks: {
    id: string;
    dificulty?: string;
    updatedAt: Date;
    createdAt: Date;
    status: string;
    description: string;
  }[];
}

// export const serializedTaskData = (user: User): SerializedTaskData => {
//   const serializedTaskData: SerializedTaskData = {
//     user: {
//       id: user.id,
//       email: user.email,
//       name: user.name,
//     },
//     tasks: user.tasks.map((task: Task) => ({
//       id: task.id,
//       updatedAt: task.updatedAt,
//       createdAt: task.createdAt,
//       dificulty: task.dificulty,
//       status: task.status,
//       description: task.description,
//     })),
//   };

//   return serializedTaskData;
// }

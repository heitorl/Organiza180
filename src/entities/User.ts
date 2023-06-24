import { compare } from "bcrypt"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Task } from "./Task"

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id?: string

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @OneToMany(() => Task, (task) => task.user, { eager: true })
    tasks: Task[]

    comparePassword = async ( pwd: string ): Promise<boolean> => {
        return await compare(this.password, pwd)
    }

}

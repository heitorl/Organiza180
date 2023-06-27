import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Task {

    @PrimaryGeneratedColumn("uuid")
    id?: string

    @Column()
    description: string

    @Column({ default: "Em progresso" })
    status?: string

    @Column()
    dificulty?: string

    @CreateDateColumn()
    createdAt?: Date 

    @UpdateDateColumn()
    updatedAt?: Date

    @ManyToOne(() => User, (user) => user.tasks)
    user: User;

}

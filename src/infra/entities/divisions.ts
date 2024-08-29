import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, OneToMany } from "typeorm"
import { Team } from "./team";

@Entity()
export class Divisions {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255, nullable: true })
    rules: string

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date

    @OneToMany(() => Team, team => team.division)
    teams: Team[];
}
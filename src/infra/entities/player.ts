import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Team } from './team';

@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'boolean', default: false })
    borrowing: boolean;

    @Column({ type: 'int', default: 0 })
    matches_played: number;

    @ManyToOne(() => Team, team => team.players)
    team: Team;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}

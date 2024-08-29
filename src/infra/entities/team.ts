import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Divisions } from './divisions';
import { Player } from './player';

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Divisions, division => division.teams)
    division: Divisions;

    @OneToMany(() => Player, player => player.team)
    players: Player[];

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { RoundsPlayed } from './roundsPlayed';

@Entity()
export class Rounds {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @OneToMany(() => RoundsPlayed, roundsPlayed => roundsPlayed.round)
    roundsPlayed: RoundsPlayed[];
}

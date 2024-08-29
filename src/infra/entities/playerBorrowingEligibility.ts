import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Player } from './player';

@Entity()
export class PlayerBorrowingEligibility {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Player, player => player.id)
    player: Player;

    @Column({ type: 'boolean', default: false })
    started: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}

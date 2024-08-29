import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Rounds } from './rounds';
import { Player } from './player';

@Entity()
export class RoundsPlayed {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Rounds, round => round.roundsPlayed)
    round: Rounds;

    @ManyToOne(() => Player, player => player.id)
    player: Player;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}

import { DataSource } from "typeorm";
import {
    Divisions,
    Player,
    PlayerBorrowingEligibility,
    Rounds,
    RoundsPlayed,
    Team
} from "./entities";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "user_service",
    synchronize: true,
    logging: true,
    entities: [
        Divisions,
        Player,
        PlayerBorrowingEligibility,
        Rounds,
        RoundsPlayed,
        Team
    ],
    subscribers: [],
})

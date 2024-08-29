"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("./entities");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "user_service",
    synchronize: true,
    logging: true,
    entities: [
        entities_1.Divisions,
        entities_1.Player,
        entities_1.PlayerBorrowingEligibility,
        entities_1.Rounds,
        entities_1.RoundsPlayed,
        entities_1.Team
    ],
    subscribers: [],
    migrations: ['./migration/*.ts'],
});
//# sourceMappingURL=ormconfig.js.map
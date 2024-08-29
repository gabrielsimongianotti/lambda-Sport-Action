"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundsPlayed = void 0;
const typeorm_1 = require("typeorm");
const Rounds_1 = require("./Rounds");
const Player_1 = require("./Player");
let RoundsPlayed = class RoundsPlayed {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RoundsPlayed.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Rounds_1.Rounds, round => round.roundsPlayed),
    __metadata("design:type", Rounds_1.Rounds)
], RoundsPlayed.prototype, "round", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Player_1.Player, player => player.id),
    __metadata("design:type", Player_1.Player)
], RoundsPlayed.prototype, "player", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], RoundsPlayed.prototype, "created_at", void 0);
RoundsPlayed = __decorate([
    (0, typeorm_1.Entity)()
], RoundsPlayed);
exports.RoundsPlayed = RoundsPlayed;
//# sourceMappingURL=RoundsPlayed.js.map
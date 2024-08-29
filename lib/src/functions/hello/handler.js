"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const api_gateway_1 = require("@libs/api-gateway");
const lambda_1 = require("@libs/lambda");
require("reflect-metadata");
const ormconfig_1 = require("src/infra/ormconfig");
const hello = (event) => __awaiter(void 0, void 0, void 0, function* () {
    yield ormconfig_1.AppDataSource.initialize()
        .then(() => {
        console.log(":)");
    })
        .catch((err) => {
        console.log(":(" + err);
    });
    return (0, api_gateway_1.formatJSONResponse)({
        message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
        event,
    });
});
exports.main = (0, lambda_1.middyfy)(hello);
//# sourceMappingURL=handler.js.map
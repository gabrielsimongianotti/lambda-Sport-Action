"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
const handler_resolver_1 = require("@libs/handler-resolver");
require("reflect-metadata");
exports.default = {
    handler: `${(0, handler_resolver_1.handlerPath)(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'post',
                path: 'hello',
                request: {
                    schemas: {
                        'application/json': schema_1.default,
                    },
                },
            },
        },
    ],
};
//# sourceMappingURL=index.js.map
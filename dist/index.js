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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockIdentity = exports.identity = void 0;
const _306_boltlogger_1 = __importDefault(require("306-boltlogger"));
function identity() {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            const req = yield fetch('http://169.254.169.254/latest/dynamic/instance-identity/document');
            const rawBody = yield req.text();
            const response = JSON.parse(rawBody);
            resolve(response);
        }
        catch (err) {
            _306_boltlogger_1.default.createLogger().extend('awsidentity').rawerror(err);
            resolve(undefined);
        }
    }));
}
exports.identity = identity;
function mockIdentity(data) {
    return new Promise((resolve) => {
        resolve(data);
    });
}
exports.mockIdentity = mockIdentity;

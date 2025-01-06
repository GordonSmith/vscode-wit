import { ErrorListener } from "antlr4";
import WitLexer from "./grammar/WitLexer";

export interface ErrorListenerError {
    source: string;
    line: number;
    column: number;
    length: number;
    severity?: string;
    code?: number;
    message: string;
}

export class WITErrorListener extends ErrorListener<any> {

    errors: ErrorListenerError[] = [];

    constructor(readonly logging = false) {
        super();
    }

    syntaxError(recognizer: any, offendingSymbol: any, line: number, column: number, msg: string, err: any) {
        this.errors.push({
            source: "ErrorListener",
            line,
            length: (offendingSymbol?.stop ?? 0) - (offendingSymbol?.start ?? 0),
            column,
            message: msg
        });
        if (this.logging) {
            const type = recognizer instanceof WitLexer ? "Lexer" : "Parser";
            console.error(type + ":  " + "line " + line + ":" + column + " " + msg);
        }
    }

    log() {
        this.errors.forEach(e => console.info(`${e.source}:  ${e.message}`));
    }
}

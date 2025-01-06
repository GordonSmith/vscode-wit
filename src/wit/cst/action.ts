import { WitScope } from "./scope";
import { WITNode, WITError, ExpresionT, removeQuotes } from "./node";
import { WITDeclaration } from "./declaration";
import { WITExpression } from "./expression";

export class WITAction extends WITNode {

    eval(): ExpresionT {
        return undefined;
    }
}

export class InlineAction extends WITAction {

    protected _declaration: WITDeclaration;

    constructor(ctx: any, readonly scope: WitScope, readonly id: string) {
        super(ctx);
        this._declaration = scope.resolve(id);
    }

    check(): WITError | undefined {
        return undefined;
    }

    eval() {
        return this._declaration.eval();
    }
}

export class Test extends WITAction {

    constructor(ctx: any, readonly scope: WitScope, readonly actual: WITExpression, readonly expected: WITExpression, readonly message?: string) {
        super(ctx);
        this.message = message !== ";" ? message : "";
    }

    test() {
        if (this.expected.eval() !== this.actual.eval()) {
            return `\
Test failed${this.message ? ` ${this.message}` : ""} ./${this.scope.path}:${this.line}
    Expected: ${this.expected.eval()}
    Actual: ${this.actual.eval()}
`;
        }
        return "";
    }
}
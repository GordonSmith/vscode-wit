import { WitScope } from "./scope";
import { ExpresionT, ExpresionType, WITError, WITNode } from "./node";
import { WITFunctionScope } from "./scopes/function";
import { ArrayType, WITType, RowType, TypeDeclaration } from "./types";
import { Declaration, WITDeclaration } from "./declaration";

export interface RHS {
    type?: ExpresionType;
    eval(): ExpresionT | undefined;
    errors(): WITError[];
}

export function isRHS(_: any): _ is RHS {
    return (_ as RHS)?.type !== undefined && (_ as RHS)?.eval !== undefined;
}

export class WITExpression extends WITNode implements RHS {

    get type(): ExpresionType | undefined {
        return undefined;
    }

    constructor(ctx: any, readonly scope: WitScope) {
        super(ctx);
    }

    eval(): ExpresionT | undefined {
        return undefined;
    }

    errors(): WITError[] {
        return [];
    }
}

export class NotExpression extends WITExpression {

    get type(): ExpresionType {
        return "boolean";
    }

    constructor(ctx: any, scope: WitScope, readonly expression: WITExpression) {
        super(ctx, scope);
    }

    eval(): boolean | number | string {
        return !this.expression.eval();
    }
}

export class UnaryMinusExpression extends WITExpression {

    get type(): ExpresionType {
        return "number";
    }

    constructor(ctx: any, scope: WitScope, readonly expression: WITExpression) {
        super(ctx, scope);
    }

    eval(): number {
        return -(this.expression.eval() ?? 0);
    }
}

type MultiplicativeT = "*" | "/" | "%";
export class MultiplicativeExpression extends WITExpression {

    get type(): ExpresionType | undefined {
        return this.lhs.type;
    }

    constructor(ctx: any, scope: WitScope, readonly lhs: WITExpression, readonly rhs: WITExpression, readonly multiplicative: MultiplicativeT) {
        super(ctx, scope);
    }

    eval(): boolean | number | string | undefined {
        const lhs = this.lhs.eval();
        const rhs = this.rhs.eval();
        if (typeof lhs === "number" && typeof rhs === "number") {
            switch (this.multiplicative) {
                case "*":
                    return lhs * rhs;
                case "/":
                    return lhs / rhs;
                case "%":
                    return lhs % rhs;
            }
        }
    }
}

type AdditiveT = "+" | "-";
export class AdditiveExpression extends WITExpression {

    get type(): ExpresionType | undefined {
        return this.lhs.type;
    }

    constructor(ctx: any, scope: WitScope, readonly lhs: WITExpression, readonly rhs: WITExpression, readonly action: AdditiveT) {
        super(ctx, scope);
    }

    eval(): boolean | number | string | undefined {
        const lhs = this.lhs.eval();
        const rhs = this.rhs.eval();
        if (typeof lhs === "number" && typeof rhs === "number") {
            return this.action === "-" ? lhs - rhs : lhs + rhs;
        } else if (typeof lhs === "string" && typeof rhs === "string" && this.action === "+") {
            return lhs + rhs;
        }
    }
}

type RelationalT = "<" | ">" | "<=" | ">=";
export class RelationalExpression extends WITExpression {

    get type(): ExpresionType {
        return "boolean";
    }

    constructor(ctx: any, scope: WitScope, readonly lhs: WITExpression, readonly rhs: WITExpression, readonly action: RelationalT) {
        super(ctx, scope);
    }

    eval(): boolean | number | string | undefined {
        const lhs = this.lhs.eval();
        const rhs = this.rhs.eval();
        if (typeof lhs === "boolean" && typeof rhs === "boolean" ||
            typeof lhs === "number" && typeof rhs === "number") {
            switch (this.action) {
                case "<":
                    return lhs < rhs;
                case ">":
                    return lhs > rhs;
                case "<=":
                    return lhs <= rhs;
                case ">=":
                    return lhs >= rhs;
            }
        } else if (typeof lhs === "string" && typeof rhs === "string") {
            switch (this.action) {
                case "<":
                    return lhs.localeCompare(rhs) < 0;
                case ">":
                    return lhs.localeCompare(rhs) > 0;
                case "<=":
                    return lhs.localeCompare(rhs) <= 0;
                case ">=":
                    return lhs.localeCompare(rhs) >= 0;
            }
        }
    }
}

type EqualityT = "==" | "!=";
export class EqualityExpression extends WITExpression {

    get type(): ExpresionType {
        return "boolean";
    }

    constructor(ctx: any, scope: WitScope, readonly lhs: WITExpression, readonly rhs: WITExpression, readonly action: EqualityT) {
        super(ctx, scope);
    }

    eval(): boolean | number | string {
        const lhs = this.lhs.eval();
        const rhs = this.rhs.eval();
        if (typeof lhs === "boolean" && typeof rhs === "boolean" ||
            typeof lhs === "number" && typeof rhs === "number" ||
            typeof lhs === "string" && typeof rhs === "string") {
            return this.action === "==" ? lhs === rhs : lhs !== rhs;
        } else {
            throw new Error("EqualityExpression: type mismatch");
        }
    }
}

type LogicalT = "&&" | "||";
export class LogicalExpression extends WITExpression {

    get type(): ExpresionType {
        return "boolean";
    }

    constructor(ctx: any, scope: WitScope, readonly lhs: WITExpression, readonly rhs: WITExpression, readonly action: LogicalT) {
        super(ctx, scope);
    }

    eval(): boolean | number | string | undefined {
        const lhs = this.lhs.eval();
        const rhs = this.rhs.eval();
        if (typeof lhs === "boolean" && typeof rhs === "boolean") {
            return this.action === "&&" ? lhs && rhs : lhs || rhs;
        }
    }
}

export class IdentifierExpression extends WITExpression {

    get type(): ExpresionType | undefined {
        return this.ref?.type;
    }

    constructor(ctx: any, scope: WitScope, readonly id: string, readonly ref: RHS) {
        super(ctx, scope);
    }

    eval() {
        return this.ref?.eval();
    }
}

//  LiteralExpressions
export class BooleanExpression extends WITExpression {

    get type(): ExpresionType {
        return "boolean";
    }

    constructor(ctx: any, scope: WitScope, readonly value: boolean) {
        super(ctx, scope);
    }

    eval(): boolean {
        return this.value;
    }
}

export class NumericExpression extends WITExpression {

    get type(): ExpresionType {
        return "number";
    }

    constructor(ctx: any, scope: WitScope, readonly value: number) {
        super(ctx, scope);
    }

    eval(): number {
        return this.value;
    }
}

export class StringExpression extends WITExpression {

    get type(): ExpresionType {
        return "string";
    }

    constructor(ctx: any, scope: WitScope, readonly value: string) {
        super(ctx, scope);
    }

    eval(): string {
        return this.value;
    }
}

export class DataExpression extends WITExpression {

    rowType: RowType | undefined;

    get type(): ExpresionType {
        return "data";
    }

    constructor(ctx: any, scope: WitScope, readonly fields: WITExpression[]) {
        super(ctx, scope);
    }

    typeInfo(_: RowType) {
        if (_ instanceof RowType) {
            this.rowType = _;
        } else {
        }
    }

    eval(): string {
        return "{ " + this.fields.map((exp, i) => {
            const id = this.rowType?.fields[i]?.id || i;
            const isString = exp.type === "string";
            return `${id}: ${isString ? `"${exp.eval()}"` : exp.eval()}`;
        }).join(", ") + " }";
    }

    resolve(id: string) {
        //  TODO nested scopes
        let retVal;
        this.rowType?.fields.some((rowType, idx) => {
            if (rowType.id === id) {
                retVal = { expression: this.fields[idx] };
                return true;
            }
        });
        return retVal;
    }
}

export class ArrayExpression extends WITExpression {

    rowType: ArrayType | undefined;

    get type(): ExpresionType {
        return (this.values?.length ? this.values[0].type + "[]" : "unknown[]") as ExpresionType;
    }

    constructor(ctx: any, scope: WitScope, readonly values: (BooleanExpression | NumericExpression | StringExpression | DataExpression)[]) {
        super(ctx, scope);
    }

    typeInfo(_: any) {
        if (_ instanceof ArrayType) {
            this.rowType = _;
        } else {
        }
    }

    eval() {
        if (this.type === "string[]") {
            return (this.values as any[]).map(v => `'${v.eval()}'`);
        } else if (this.type === "data[]") {
            return "[ " + (this.values as DataExpression[]).map(v => {
                v.typeInfo(this.rowType?.rowType as RowType);
                return v.eval();
            }).join(", ") + " ]";
        }

        return (this.values as any[]).map(v => v.eval());
    }
}

export class FunctionCallExpression extends WITExpression {

    get type(): ExpresionType | undefined {
        return this.func?.returnType;
    }

    constructor(ctx: any, scope: WitScope, readonly id: string, readonly func: WITFunctionScope, readonly args: WITExpression[]) {
        super(ctx, scope);
    }

    eval() {
        return this.func?.calc(this.args);
    }
}

class FutureExpression extends WITExpression {

    get type(): ExpresionType | undefined {
        return this.fieldType.eval();
    }

    constructor(ctx: any, scope: WitScope, readonly fieldType: TypeDeclaration) {
        super(ctx, scope);
    }
}

export class ArrowParamater extends WITNode implements RHS {

    private _defaultExpression?: RHS;

    get type(): ExpresionType {
        return this._type;
    }

    constructor(ctx: any, readonly outerScope: WitScope, readonly innerScope: WitScope, readonly _type: ExpresionType, readonly id: string, defaultExpression?: RHS) {
        super(ctx);
        this._defaultExpression = defaultExpression;
    }

    defaultExpression(): RHS | undefined;
    defaultExpression(_: RHS | undefined): this;
    defaultExpression(_?: RHS | undefined): this | RHS | undefined {
        if (!arguments.length) return this._defaultExpression;
        this._defaultExpression = _;
        return this;
    }

    eval(): ExpresionT | undefined {
        return this.defaultExpression()?.eval();
    }

    errors(): WITError[] {
        return [];
    }

    resolve(id: string) {
        //  TODO nested scopes
        let retVal;
        const type = this.outerScope.types[this._type];
        (type?.rhs as RowType)?.fields.some((rowType, idx) => {
            if (rowType.id === id) {
                retVal = { expression: new FutureExpression(this.ctx, this.outerScope, rowType) };
                return true;
            }
        });
        return retVal;
    }
}

export class ArrowBody extends WITNode {

    readonly items: WITDeclaration[];

    get type(): ExpresionType | undefined {
        return this.returnExpression.type;
    }

    constructor(ctx: any, readonly scope: WitScope, items: WITDeclaration[], readonly returnExpression: RHS, readonly returnType?: TypeDeclaration) {
        super(ctx);
        this.items = items || [];
        if (returnExpression instanceof DataExpression) {
            returnExpression.rowType = returnType as any;
        }
    }

    contains(line: number, column: number) {
        if (line < this.ctx.start.line) return false;
        if (line > this.ctx.stop.line) return false;
        if (line === this.ctx.start.line && column < this.ctx.start.column) return false;
        if (line === this.ctx.stop.line && column > this.ctx.stop.column) return false;
        return true;
    }
}

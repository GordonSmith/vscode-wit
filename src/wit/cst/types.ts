import { ExpresionType, WITNode } from "./node";
import { WitScope } from "./scope";

export class WITType extends WITNode {

    get type(): WITType | undefined {
        return this;
    }

    constructor(ctx: any, readonly scope: WitScope) {
        super(ctx);
    }

    eval(): ExpresionType | undefined {
        return undefined;
    }
}

export class BooleanType extends WITType {

    constructor(ctx: any, scope: WitScope) {
        super(ctx, scope);
    }

    eval(): ExpresionType {
        return "boolean";
    }
}

export class NumberType extends WITType {

    constructor(ctx: any, scope: WitScope) {
        super(ctx, scope);
    }

    eval(): ExpresionType {
        return "number";
    }
}

export class StringType extends WITType {

    constructor(ctx: any, scope: WitScope) {
        super(ctx, scope);
    }

    eval(): ExpresionType {
        return "string";
    }
}

export class RowType extends WITType {

    constructor(ctx: any, scope: WitScope, readonly fields: TypeDeclaration[]) {
        super(ctx, scope);
    }

    eval(): ExpresionType {
        return "data";
    }
}

export class ArrayType extends WITType {

    constructor(ctx: any, scope: WitScope, readonly rowType: WITType) {
        super(ctx, scope);
    }

    eval(): ExpresionType {
        return this.rowType.eval() + "[]" as ExpresionType;
    }

}

export class TypeDeclaration extends WITType {

    get type(): WITType | undefined {
        return this.rhs?.type;
    }

    constructor(ctx: any, scope: WitScope, readonly id: string, readonly rhs?: WITType) {
        super(ctx, scope);
        if (!(rhs instanceof WITType)) {

        }
    }

    eval(): ExpresionType | undefined {
        return this.type?.eval();
    }
}

export class TypeAlias extends TypeDeclaration {

    get type(): WITType | undefined {
        return this.typeDeclaration.type;
    }

    constructor(ctx: any, scope: WitScope, readonly id: string, readonly typeDeclaration: TypeDeclaration) {
        super(ctx, scope, id);
    }

    eval(): ExpresionType | undefined {
        return this.type?.eval();
    }
}

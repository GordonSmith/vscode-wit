import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import { ErrorListenerError, WITErrorListener } from "./errorListener";
import WitLexer from "./grammar/WitLexer";
import WitParser, { PackageDeclContext, UsePathContext, WitFileContext } from "./grammar/WitParser";
import WitListener from "./grammar/WitListener";

class MyTreeWalker extends WitListener {

    enterWitFile = (ctx: WitFileContext): void => {
        console.log("enterWitFile");
    };

    exitWitFile = (ctx: WitFileContext) => {
        console.log("exitWitFile");
    };

    enterPackageDecl = (ctx: PackageDeclContext): void => {
        const ns = ctx._label?._namespace?.getText();
        const path = ctx._label?._packagePart?.map(p => p.getText()).join("->");
        const label = ctx._label?.getText();
        const version = ctx.atSemver()?._version?.getText();
        console.log("enterPackageDecl", ns, path, label, version);
    };

    exitPackageDecl = (ctx: PackageDeclContext): void => {
        const label = ctx._label?.getText();
        const version = ctx.atSemver()?._version?.getText();
        console.log("exitPackageDecl", label, version);
    };

    enterUsePath = (ctx: UsePathContext): void => {
        debugger;
        // const ns = ctx._namespace?.getText();
        // const path = ctx._packagePart?.map(p => p.getText()).join("->");
        // // const label = ctx._label?.getText();
        // const version = ctx.atSemver()?._version?.getText();
        // console.log("enterUsePath", ns, path, version);
    };
}

export const isBoolean = (str: string) => str === "boolean";
export const isString = (str: string) => str === "string";
export const isNumber = (str: string) => str === "number";

export interface ParseResponse {
    filePath?: string;
    full: boolean;
    tree?: any;
    lexErrors: ErrorListenerError[];
    parseErrors: ErrorListenerError[];
    exception?: any;
}

export function parse(text: string): ParseResponse {

    const charStream = new CharStream(text);
    const lexer = new WitLexer(charStream);
    lexer.removeErrorListeners();
    const lexerErrorListener = new WITErrorListener();
    lexer.addErrorListener(lexerErrorListener);

    const tokens = new CommonTokenStream(lexer);
    const parser = new WitParser(tokens);
    parser.removeErrorListeners();
    const parserErrorListener = new WITErrorListener();
    parser.addErrorListener(parserErrorListener);

    parser.buildParseTrees = true;

    try {
        const tree = parser.witFile();
        const walker = new MyTreeWalker();
        ParseTreeWalker.DEFAULT.walk(walker, tree);

        return {
            full: true,
            tree,
            lexErrors: lexerErrorListener.errors,
            parseErrors: parserErrorListener.errors,
        };
    } catch (e: any) {
        console.error(e);
        return {
            full: false,
            lexErrors: [],
            parseErrors: [],
            exception: e
        };
    }
}

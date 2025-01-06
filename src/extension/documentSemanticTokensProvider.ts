import * as vscode from "vscode";
import { scopedLogger } from "@hpcc-js/util";
import { WITScope } from "../wit/cst/scope";
import { WITDiagnosticCollection } from "./diagnostic";

const logger = scopedLogger("documentSymbolProvider.ts");

const tokenTypes = new Map<string, number>();
const tokenModifiers = new Map<string, number>();

const legend = (function () {
    const tokenTypesLegend = [
        "comment", "string", "keyword", "number", "regexp", "operator", "namespace",
        "type", "struct", "class", "interface", "enum", "typeParameter", "function",
        "method", "macro", "variable", "parameter", "property", "label"
    ];
    tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index));

    const tokenModifiersLegend = [
        "declaration", "documentation", "readonly", "static", "abstract", "deprecated",
        "modification", "async"
    ];
    tokenModifiersLegend.forEach((tokenModifier, index) => tokenModifiers.set(tokenModifier, index));

    return new vscode.SemanticTokensLegend(tokenTypesLegend, tokenModifiersLegend);
})();

interface IParsedToken {
    line: number;
    startCharacter: number;
    length: number;
    tokenType: string;
    tokenModifiers: string[];
}

export let documentSemanticTokensProvider: WITDocumentSemanticTokensProvider;
export class WITDocumentSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
    protected _ctx: vscode.ExtensionContext;

    protected _diagnostic: WITDiagnosticCollection;

    private constructor(ctx: vscode.ExtensionContext) {
        this._ctx = ctx;
        ctx.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider({ language: "wit" }, this, legend));
        this._diagnostic = WITDiagnosticCollection.attach(ctx);
    }

    static attach(ctx: vscode.ExtensionContext): WITDocumentSemanticTokensProvider {
        if (!documentSemanticTokensProvider) {
            documentSemanticTokensProvider = new WITDocumentSemanticTokensProvider(ctx);
        }
        return documentSemanticTokensProvider;
    }

    onDidChangeSemanticTokens?: vscode.Event<void>;

    provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SemanticTokens> {
        const allTokens = this._parseText(document.getText());
        const builder = new vscode.SemanticTokensBuilder();
        allTokens.forEach((token) => {
            builder.push(token.line, token.startCharacter, token.length, this._encodeTokenType(token.tokenType), this._encodeTokenModifiers(token.tokenModifiers));
        });
        return builder.build();
    }

    provideDocumentSemanticTokensEdits?(document: vscode.TextDocument, previousResultId: string, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SemanticTokens | vscode.SemanticTokensEdits> {
        throw new Error("Method not implemented.");
    }

    private _encodeTokenModifiers(strTokenModifiers: string[]): number {
        return 0;
    }

    private _parseText(text: string): IParsedToken[] {
        return [];
    }

    private _encodeTokenType(tokenType: string): number {
        return 0;
    }
}

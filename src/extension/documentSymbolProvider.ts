import * as vscode from "vscode";
import { scopedLogger } from "@hpcc-js/util";
import { WITFileScope } from "../wit/cst/scopes/file";
import { WITDiagnosticCollection } from "./diagnostic";

const logger = scopedLogger("documentSymbolProvider.ts");

export let documentSymbolProvider: WITDocumentSymbolProvider;
export class WITDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
    protected _ctx: vscode.ExtensionContext;

    protected _diagnostic: WITDiagnosticCollection;

    private constructor(ctx: vscode.ExtensionContext) {
        this._ctx = ctx;
        ctx.subscriptions.push(vscode.languages.registerDocumentSymbolProvider("wit", this));
        this._diagnostic = WITDiagnosticCollection.attach(ctx);
    }

    static attach(ctx: vscode.ExtensionContext): WITDocumentSymbolProvider {
        if (!documentSymbolProvider) {
            documentSymbolProvider = new WITDocumentSymbolProvider(ctx);
        }
        return documentSymbolProvider;
    }

    provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SymbolInformation[] | vscode.DocumentSymbol[]> {
        return new Promise((resolve, reject) => {
            const witFile = new WITFileScope("", document.fileName, document.getText());
            this._diagnostic.set(document.fileName, witFile.allErrors());

            const retVal: vscode.DocumentSymbol[] = [];

            function addSymbol(name: string | undefined, detail: string, kind: vscode.SymbolKind, range?: vscode.Range, selectionRange?: vscode.Range | undefined) {
                if (name) {
                    retVal.push(new vscode.DocumentSymbol(name, detail, kind, range, selectionRange ?? range));
                }
            }

            witFile.importedFiles.forEach(i => addSymbol(i.file.label, i.file.path, vscode.SymbolKind.File, new vscode.Range(i.line - 1, i.column, i.line - 1, i.column + i.length)));
            for (const declKey in witFile.declarations) {
                const decl = witFile.declarations[declKey];
                addSymbol(declKey, decl.scope.path, vscode.SymbolKind.Variable, new vscode.Range(decl.line - 1, decl.column, decl.line - 1, decl.column + decl.length));
            }

            resolve(retVal);
        });
    }
}

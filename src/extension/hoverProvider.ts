import * as vscode from "vscode";
import * as path from "path";
import { scopedLogger } from "@hpcc-js/util";
import { WITFileScope } from "../wit/cst/scopes/file";
import { WITDiagnosticCollection } from "./diagnostic";

const logger = scopedLogger("hoverProvider.ts");

export let hoverProvider: WITHoverProvider;
export class WITHoverProvider implements vscode.HoverProvider {
    protected _ctx: vscode.ExtensionContext;

    protected _diagnostic: WITDiagnosticCollection;

    private constructor(ctx: vscode.ExtensionContext) {
        this._ctx = ctx;
        ctx.subscriptions.push(vscode.languages.registerHoverProvider("wit", this));
        this._diagnostic = WITDiagnosticCollection.attach(ctx);
    }

    static attach(ctx: vscode.ExtensionContext): WITHoverProvider {
        if (!hoverProvider) {
            hoverProvider = new WITHoverProvider(ctx);
        }
        return hoverProvider;
    }

    provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
        return new Promise((resolve, reject) => {
            const id = document.getText(document.getWordRangeAtPosition(position));

            const witFile = new WITFileScope("", document.fileName, document.getText());
            this._diagnostic.set(document.fileName, witFile.allErrors());

            const scope = witFile.resolveScope(position.line + 1, position.character);

            const decl = scope.resolve(id);

            const marked = new vscode.MarkdownString(decl ? `\
__${decl.expression.type}__:  _${(decl.expression as any)?.returnType || decl.eval()}_

${path.relative(path.dirname(document.fileName), decl.scope.path)} (${decl.line}, ${decl.column}, ${decl.length})
            ` : "");

            resolve(new vscode.Hover(marked));
        });
    }
}

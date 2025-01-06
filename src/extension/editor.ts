import * as vscode from "vscode";
import { commands } from "./commands";

let witEditor: WITEditor;
export class WITEditor {
    _ctx: vscode.ExtensionContext;

    private constructor(ctx: vscode.ExtensionContext) {
        this._ctx = ctx;

        this.onOpenWatcher();
        this.onSaveWatcher();
    }

    static attach(ctx: vscode.ExtensionContext): WITEditor {
        if (!witEditor) {
            witEditor = new WITEditor(ctx);
        }
        return witEditor;
    }

    onOpenWatcher() {
        vscode.workspace.onDidOpenTextDocument((document) => {
            if (document.languageId !== "wit" || this._ignoreNextSave.has(document)) {
                return;
            }
            const witConfig = vscode.workspace.getConfiguration("wit", document.uri);
            const formatPromise: PromiseLike<void> = Promise.resolve();
            if (witConfig["syntaxCheckOnLoad"]) {
                formatPromise.then(() => {
                    commands?.checkTextDocument(document, witConfig);
                });
            }
        }, null, this._ctx.subscriptions);
    }

    private _ignoreNextSave = new WeakSet<vscode.TextDocument>();
    onSaveWatcher() {
        vscode.workspace.onDidSaveTextDocument((document) => {
            if (document.languageId !== "wit" || this._ignoreNextSave.has(document)) {
                return;
            }
            if (vscode.window.activeTextEditor) {
                const witConfig = vscode.workspace.getConfiguration("wit", document.uri);
                const formatPromise: PromiseLike<void> = Promise.resolve();
                if (witConfig["formatOnSave"] && vscode.window.activeTextEditor.document === document) {
                    //  TODO Auto Format  ---
                }
                if (witConfig["syntaxCheckOnSave"]) {
                    formatPromise.then(() => {
                        commands?.checkTextDocument(document, witConfig);
                    });
                }
            }
        }, null, this._ctx.subscriptions);
    }
}

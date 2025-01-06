import * as vscode from "vscode";
import { WITFileScope } from "../wit/cst/scopes/file";
import { WITDiagnosticCollection } from "./diagnostic";
import { activeWitDocument } from "./util";

export let commands: undefined | WITCommands;
export class WITCommands {

    _ctx: vscode.ExtensionContext;
    protected _diagnostic: WITDiagnosticCollection;

    private constructor(ctx: vscode.ExtensionContext) {
        this._ctx = ctx;
        this._diagnostic = WITDiagnosticCollection.attach(ctx);
        ctx.subscriptions.push(vscode.commands.registerCommand("wit.checkSyntax", () => this.checkSyntax()));
    }

    static attach(ctx: vscode.ExtensionContext): WITCommands {
        if (!commands) {
            commands = new WITCommands(ctx);
        }
        return commands;
    }

    checkTextDocument(document: vscode.TextDocument, config?: vscode.WorkspaceConfiguration) {
        if (document) {
            const witFile = new WITFileScope(document.getText(), document.fileName, document.getText());
            commands._diagnostic.set(document.fileName, witFile.allErrors());
        }
    }

    checkSyntax() {
        this.checkTextDocument(activeWitDocument());
    }
}

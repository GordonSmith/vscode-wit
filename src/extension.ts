import * as vscode from "vscode";
import { witActivate, witDeactivate } from "./extension/index";

export function activate(context: vscode.ExtensionContext) {
    witActivate(context);
}

export function deactivate() {
    witDeactivate();
}

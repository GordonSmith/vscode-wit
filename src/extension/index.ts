import * as vscode from "vscode";
import { WITCommands } from "./commands";
import { WITEditor } from "./editor";
// import { WITDiagnosticCollection } from "./diagnostic";
// import { WITHoverProvider } from "./hoverProvider";
// import { WITDocumentSymbolProvider } from "./documentSymbolProvider";

export function witActivate(ctx: vscode.ExtensionContext): void {
    WITCommands.attach(ctx);
    WITEditor.attach(ctx);
    // WITDiagnosticCollection.attach(ctx);
    // WITHoverProvider.attach(ctx);
    // WITDocumentSymbolProvider.attach(ctx);
}

export function witDeactivate(): void {
}

import * as vscode from "vscode";

export const hasActiveDocument = (): boolean => !!vscode.window.activeTextEditor?.document;
export const isActiveDocumentWit = (): boolean => hasActiveDocument() && !!vscode.window.activeTextEditor?.document && vscode.languages.match({ language: "wit", scheme: "file" }, vscode.window.activeTextEditor?.document) > 0;
export const activeWitDocument = () => isActiveDocumentWit() ? vscode.window.activeTextEditor?.document : undefined;

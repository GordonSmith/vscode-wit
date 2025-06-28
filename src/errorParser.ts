/**
 * Utility functions for parsing WIT validation errors
 */

const witErrorWithLocationRegex =
    /Error:\s*([^\n]+)(?:\n\nCaused by:\s*\n\s*([^\n]+(?:\n[^\n-]+)*?))?[\s\S]*?-->\s*([^:]+):(\d+):(\d+)/;

const witErrorWithoutLocationRegex = /(?:Error|RuntimeError):\s*([^\n]+)/;

export interface ErrorInfo {
    mainError?: string;
    detailedError?: string;
    filePath?: string;
    row?: number;
    column?: number;
}

/**
 * Extracts error information from a WIT validation error stack trace
 * @param errorStack - The error stack trace string
 * @returns Object containing extracted error information or null if no match
 */
export function extractErrorInfo(errorStack: string): ErrorInfo | null {
    // First try to match errors with file location
    let match = errorStack.match(witErrorWithLocationRegex);

    if (match) {
        const [, mainError, detailedError, filePath, rowStr, columnStr] = match;
        return {
            mainError: mainError.trim(),
            detailedError: detailedError?.trim(),
            filePath: filePath.trim(),
            row: parseInt(rowStr, 10),
            column: parseInt(columnStr, 10),
        };
    }

    // If no location match, try simple error format
    match = errorStack.match(witErrorWithoutLocationRegex);

    if (match) {
        const [, mainError] = match;
        return {
            mainError: mainError.trim(),
            detailedError: undefined,
            filePath: undefined,
            row: undefined,
            column: undefined,
        };
    }

    return null;
}

/**
 * Parse wit-parser error messages to extract location information
 * @param errorMessage - The error message from wit-parser
 * @param filePath - The file path for the error
 * @returns Parsed error information or undefined if parsing fails
 */
export function parseWitParserError(errorMessage: string, filePath: string): ErrorInfo | undefined {
    // Handle undefined type errors specifically
    const undefinedTypeMatch = errorMessage.match(/undefined type `([^`]+)`/);
    if (undefinedTypeMatch) {
        const typeName = undefinedTypeMatch[1];
        const locationMatch = errorMessage.match(/-->\s*(.+?):\s*(\d+):\s*(\d+)/);
        const row = locationMatch ? parseInt(locationMatch[2], 10) : 1;
        const column = locationMatch ? parseInt(locationMatch[3], 10) : 1;

        return {
            mainError: "Undefined type error",
            detailedError: `Undefined type '${typeName}' - check if the type is defined or imported correctly`,
            filePath,
            row,
            column,
        };
    }

    const locationMatch = errorMessage.match(/-->\s*(.+?):\s*(\d+):\s*(\d+)/);
    if (locationMatch) {
        const row = parseInt(locationMatch[2], 10);
        const column = parseInt(locationMatch[3], 10);

        const mainError = errorMessage.split("\n")[0]?.trim() || "Unknown error";

        return {
            mainError: "WIT parser error",
            detailedError: mainError,
            filePath,
            row,
            column,
        };
    }

    const fallbackInfo = extractErrorInfo(errorMessage);
    if (fallbackInfo) {
        return { filePath, mainError: errorMessage, ...fallbackInfo };
    }

    return undefined;
}

/**
 * Parse wit-bindgen error messages to extract location information
 * @param errorMessage - The error message from wit-bindgen
 * @param filePath - The file path for the error
 * @returns Parsed error information or null if parsing fails
 */
export function parseWitBindgenError(errorMessage: string, filePath: string): ErrorInfo | null {
    // Remove comment markers from the error message
    const cleanMessage = errorMessage
        .replace(/^\/\/\s*/, "")
        .replace(/\n\/\/\s*/g, "\n")
        .trim();

    // Try to extract location information similar to wit-parser errors
    const locationMatch = cleanMessage.match(/-->\s*(.*?):(\d+):(\d+)/);
    if (locationMatch) {
        const row = parseInt(locationMatch[2], 10);
        const column = parseInt(locationMatch[3], 10);

        const lines = cleanMessage.split("\n");
        const mainError = lines[0] || cleanMessage;

        return {
            mainError: "WIT binding generation error",
            detailedError: mainError.trim(),
            filePath,
            row,
            column,
        };
    }

    // Check for specific wit-bindgen error patterns
    if (cleanMessage.includes("undefined type")) {
        const typeMatch = cleanMessage.match(/undefined type `([^`]+)`/);
        const typeName = typeMatch ? typeMatch[1] : "unknown";

        return {
            mainError: "Undefined type in bindings",
            detailedError: `Undefined type '${typeName}' - ensure type is properly defined in WIT file`,
            filePath,
            row: 1,
            column: 1,
        };
    }

    if (cleanMessage.includes("failed to resolve")) {
        return {
            mainError: "Binding resolution error",
            detailedError: cleanMessage,
            filePath,
            row: 1,
            column: 1,
        };
    }

    if (cleanMessage.includes("expected") && cleanMessage.includes("found")) {
        return {
            mainError: "Binding syntax error",
            detailedError: cleanMessage,
            filePath,
            row: 1,
            column: 1,
        };
    }

    if (cleanMessage.includes("unsupported")) {
        return {
            mainError: "Unsupported feature",
            detailedError: cleanMessage,
            filePath,
            row: 1,
            column: 1,
        };
    }

    // Return parsed info for any other error
    return {
        mainError: "Binding generation failed",
        detailedError: cleanMessage,
        filePath,
        row: 1,
        column: 1,
    };
}

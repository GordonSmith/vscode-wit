import { describe, it, expect } from "vitest";
import { parse } from "../src/wit/parser";
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

function getWitFiles(dir: string): string[] {
    const files = readdirSync(dir, { withFileTypes: true });
    let witFiles: string[] = [];

    files.forEach(file => {
        const fullPath = join(dir, file.name);
        if (file.isDirectory()) {
            witFiles = witFiles.concat(getWitFiles(fullPath));
        } else if (file.isFile() && file.name.endsWith('.wit')) {
            witFiles.push(fullPath);
        }
    });

    return witFiles;
}

describe('Grammar', () => {
    it('Simple', () => {
        const input = `
package local:root-wit;

world root {
  export wasi:http/incoming-handler@0.2.0;
}
`;
        const result = parse(input);
        expect(result.exception).to.be.undefined;
        expect(result.lexErrors).to.be.empty;
        expect(result.parseErrors).to.be.empty;
    });

    describe("All Samples", () => {
        const samplesDir = join(__dirname, '../samples');
        const files = getWitFiles(samplesDir);

        files.forEach(file => {
            it(`should parse ${file}`, () => {
                const input = readFileSync(file, 'utf-8');
                const result = parse(input);
                expect(result.exception).to.be.undefined;
                expect(result.lexErrors).to.be.empty;
                expect(result.parseErrors).to.be.empty;
            });
        });
    });
});



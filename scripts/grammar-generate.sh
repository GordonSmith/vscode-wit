#!/bin/bash

# Latest Antlr 4.x:  https://www.antlr.org/download.html
#                    https://www.antlr.org/download/antlr-4.13.2-complete.jar
# Latest wit Grammar:  https://github.com/WebAssembly/component-model/blob/main/design/mvp/WIT.md

cd ./grammar
java -jar ../antlr-4.13.2-complete.jar -Dlanguage=TypeScript -o ../src/wit/grammar -visitor -Xexact-output-dir ./*.g4
cd ..

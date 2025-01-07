# <img src="resources/wit-icon.png" alt="logo" width="56"/> Language extension for VS Code

This package complements [bytecodealliance.wit-idl](https://marketplace.visualstudio.com/items?itemName=BytecodeAlliance.wit-idl) by adding an Antlr4 grammar, which (in time) will drive various language specific features.

The description of the WIT format can be found at: https://github.com/WebAssembly/component-model/blob/main/design/mvp/WIT.md

## Features

- [x] Add dependy on [bytecodealliance.wit-idl](https://marketplace.visualstudio.com/items?itemName=BytecodeAlliance.wit-idl)
- [x] Add Antlr4 grammar ([Wit.g4](grammar/Wit.g4))
- [x] "Quick" syntax checking (F7)
- [x] "Quick" syntax checking on open/save (optional behind config flag)
- [ ] Web host support
- [ ] Linting
- [ ] Outline view
- [ ] Hover help
- [ ] Go to definition
- [ ] Find all references
- [ ] Code completion
- [ ] Code folding
- [ ] Pretty print
- [ ] wit-bindgen integration
- [ ] wasm-tools integration

## Requirements

This extension has a dependency on [bytecodealliance.wit-idl](https://marketplace.visualstudio.com/items?itemName=BytecodeAlliance.wit-idl), which provides the syntax colouring.

## Extension Settings

This extension contributes the following settings:

* `wit.syntaxCheckOnLoad`: Enable/disable syntax check on load (defaults on).
* `wit.syntaxCheckOnSave`: Enable/disable syntax check on save (defaults on).

## Release Notes

See [CHANGELOG.md](CHANGELOG.md) for release notes.

---


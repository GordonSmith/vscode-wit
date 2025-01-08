// https://github.com/WebAssembly/component-model/blob/main/design/mvp/WIT.md

grammar Wit;

witFile: (package = packageDecl ';')? witFileItems* EOF
  ;

witFileItems: packageItems | nestedPackageDefinition
  ;

nestedPackageDefinition
  : package = packageDecl '{' packageItems* '}'
  ;

packageDecl: 'package' label = packageLabel atSemver?
  ;

packageLabel
  : (namespace = id ':')+ packagePart += id (
    '/' packagePart += id
  )*
  ;

packageItems
  : uses = toplevelUseItem
  | interfaces = interfaceItem
  | worlds = worldItem
  ;

//  Item: toplevel-use ---
toplevelUseItem: 'use' label = usePath ('as' id)? ';'
  ;

usePath
  : packagePart += id
  | namespace = id ':' packagePart += id '/' packagePart += id atSemver?
  | (namespace = id ':')+ packagePart += id (
    '/' packagePart += id
  )+ atSemver?
  ;

//  Item: World ---
worldItem: gate 'world' id '{' worldItems* '}'
  ;

worldItems: gate worldDefinition
  ;

worldDefinition
  : exportItem
  | importItem
  | useItem
  | typedefItem
  | includeItem
  ;

exportItem
  : 'export' id ':' externType
  | 'export' usePath ';'
  ;

importItem
  : 'import' id ':' externType
  | 'import' usePath ';'
  ;

externType
  : funcType ';'
  | 'interface' '{' interfaceItems* '}'
  ;

// Item: include ---
includeItem
  : 'include' usePath ';'
  | 'include' usePath 'with' '{' includeNamesList '}'
  ;

includeNamesList
  : includeNamesItem
  | includeNamesList ',' includeNamesItem
  ;

includeNamesItem: id 'as' id
  ;

// Item: interface ---
interfaceItem
  : gate 'interface' id '{' interfaceItems* '}'
  ;

interfaceItems: gate interfaceDefinition
  ;

interfaceDefinition: typedefItem | useItem | funcItem
  ;

typedefItem
  : resourceItem
  | variantItems
  | recordItem
  | flagsItems
  | enumItems
  | typeItem
  ;

funcItem: id ':' funcType ';'
  ;

funcType: 'func' paramList resultList
  ;

paramList: '(' namedTypeList ')'
  ;

resultList: /* epsilon */ | '->' ty
  ;

namedTypeList
  : /* epsilon */
  | namedType ( ',' namedType)* ','?
  ;

namedType: id ':' ty
  ;

// Item: use
useItem: 'use' usePath '.' '{' useNamesList '}' ';'
  ;

useNamesList: useNamesItem (',' useNamesItem)*
  ;

useNamesItem: id | id 'as' id
  ;

// Item: type (alias)

typeItem: 'type' id '=' ty ';'
  ;
// Item: record (bag of named fields)
recordItem: 'record' id '{' recordFields '}'
  ;

recordFields: recordField | recordField ',' recordFields?
  ;

recordField: id ':' ty
  ;
// Item: flags (bag-of-bools)

flagsItems: 'flags' id '{' flagsFields '}'
  ;

flagsFields: id | id ',' flagsFields?
  ;

// Item: variant (one of a set of types)

variantItems: 'variant' id '{' variantCases '}'
  ;

variantCases: variantCase | variantCase ',' variantCases?
  ;

variantCase: id | id '(' ty ')'
  ;
// Item: enum (variant but with no payload)

enumItems: 'enum' id '{' enumCases '}'
  ;

enumCases: id | id ',' enumCases?
  ;

// Item: resource ---
resourceItem
  : 'resource' id ';'
  | 'resource' id '{' resourceMethod* '}'
  ;

resourceMethod
  : funcItem
  | id ':' 'static' funcType ';'
  | 'constructor' paramList ';'
  ;

//  Types ---
ty
  : 'u8'
  | 'u16'
  | 'u32'
  | 'u64'
  | 's8'
  | 's16'
  | 's32'
  | 's64'
  | 'f32'
  | 'f64'
  | 'char'
  | 'bool'
  | 'string'
  | tuple
  | list
  | option
  | result
  | handle
  | id
  ;

tuple: 'tuple' '<' tupleList '>'
  ;

tupleList: ty (',' tupleList)?
  ;

list: 'list' '<' ty '>' | 'list' '<' ty ',' NUM_ID '>'
  ;

option: 'option' '<' ty '>'
  ;

result
  : 'result' '<' ty ',' ty '>'
  | 'result' '<' '_' ',' ty '>'
  | 'result' '<' ty '>'
  | 'result'
  ;

// Handles ---

handle: id | 'borrow' '<' id '>'
  ;

// Item: Gate ---
gate: gateItem*
  ;

gateItem: unstableGate | sinceGate | deprecatedGate
  ;

unstableGate: '@unstable' '(' featureField ')'
  ;

sinceGate: '@since' '(' versionField ')'
  ;

deprecatedGate: '@deprecated' '(' versionField ')'
  ;

featureField: 'feature' '=' id
  ;

versionField: 'version' '=' version = validSemver
  ;

atSemver: '@' version = validSemver
  ;

validSemver: VALID_SEMVER
  ;

token: operator | keyword | NUM_ID | Identifier
  ;

operator
  : '='
  | ','
  | ':'
  | ';'
  | '('
  | ')'
  | '{'
  | '}'
  | '<'
  | '>'
  | '*'
  | '->'
  | '/'
  | '.'
  | '@'
  ;

id: '%' keyword | '%' Identifier | Identifier
  ;

keyword
  : 'as'
  | 'bool'
  | 'borrow'
  | 'char'
  | 'constructor'
  | 'enum'
  | 'export'
  | 'f32'
  | 'f64'
  | 'flags'
  | 'from'
  | 'func'
  | 'future'
  | 'import'
  | 'include'
  | 'interface'
  | 'list'
  | 'option'
  | 'own'
  | 'package'
  | 'record'
  | 'resource'
  | 'result'
  | 's16'
  | 's32'
  | 's64'
  | 's8'
  | 'static'
  | 'stream'
  | 'string'
  | 'tuple'
  | 'type'
  | 'u16'
  | 'u32'
  | 'u64'
  | 'u8'
  | 'use'
  | 'variant'
  | 'with'
  | 'world'
  ;

//  ----
Identifier: LETTER (LETTER | DIGIT | '-')*
  ;

// Semver:  https://semver.org/
VALID_SEMVER
  : VERSION_CORE
  | VERSION_CORE DASH PRERELEASE
  | VERSION_CORE PLUS BUILD
  | VERSION_CORE DASH PRERELEASE PLUS BUILD
  ;

VERSION_CORE: MAJOR DOT MINOR DOT PATCH
  ;

MAJOR: NUM_ID
  ;

MINOR: NUM_ID
  ;

PATCH: NUM_ID
  ;

PRERELEASE: DOTSEPERATED_PRERELEASE_ID
  ;

DOTSEPERATED_PRERELEASE_ID
  : PRERELEASE_ID
  | PRERELEASE_ID DOT DOTSEPERATED_PRERELEASE_ID
  ;

BUILD: DOTSEPERATED_BUILD_ID
  ;

DOTSEPERATED_BUILD_ID
  : BUILD_ID
  | BUILD_ID DOT DOTSEPERATED_BUILD_ID
  ;

PRERELEASE_ID: ALPHANUM_ID | DIGITS
  ;

BUILD_ID: ALPHANUM_ID | DIGITS
  ;

ALPHANUM_ID
  : NON_DIGIT
  | NON_DIGIT ID_CHARS
  | ID_CHARS NON_DIGIT
  | ID_CHARS NON_DIGIT ID_CHARS
  ;

NUM_ID: '0' | POSITIVE_DIGIT | POSITIVE_DIGIT DIGITS
  ;

ID_CHARS: ID_CHAR | ID_CHAR ID_CHARS
  ;

ID_CHAR: DIGIT | NON_DIGIT
  ;

NON_DIGIT: LETTER | DASH
  ;

DIGITS: DIGIT | DIGIT DIGITS
  ;

fragment DIGIT: [0-9]
  ;

fragment POSITIVE_DIGIT: [1-9]
  ;

fragment LETTER: [a-zA-Z]
  ;

fragment HexadecimalDigit: [0-9a-fA-F]
  ;

DASH: '-'
  ;

PLUS: '+'
  ;

DOT: '.'
  ;

// Other  ---
COMMENT: '/*' .*? '*/' -> skip
  ;

LINE_COMMENT: '//' ~[\r\n]* -> skip
  ;

WS: [ \t\r\n]+ -> skip
  ;
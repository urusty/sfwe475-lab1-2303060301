"typescript": "^7.0.2"

^ - means npm can update this version to another, but new version must not be a major version
5 - number of major version
6 - number of minor version
0 - number of patch


# TypeScript Errors

## 1. `tasks` has an implicit `any[]` type

TypeScript cannot determine what type of values the `tasks` array is supposed to contain.
Because strict mode is enabled, it does not allow TypeScript to silently use `any`, so the array needs an explicit type.

## 2. `title` has an implicit `any` type

The `title` parameter does not have a type annotation.
TypeScript cannot determine its type, so it needs to be explicitly declared as a specific type.

## 3. `done` is a string instead of a boolean

The `Task` type says that `done` must be a boolean, but the code uses `"false"`, which is a string.
It should use the boolean value `false` without quotation marks.

## 4. `findTask` may return `undefined`

The `find()` method can fail to find a matching task, in which case it returns `undefined`.
The function currently promises to return a `Task`, so its return type needs to allow `undefined`.

## 5. `dueDate` may be undefined

`dueDate` is an optional property, so its value can be a string or `undefined`.
`new Date()` cannot accept `undefined`, so the code needs to check that `dueDate` exists before using it.
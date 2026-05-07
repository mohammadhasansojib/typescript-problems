# Blog Post 2

How do `Pick` and `Omit` utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

## Table of content
- [Introduction](#introduction)
- [Main Content](#main-content)
- [Conclusion](#conclusion)

## Introduction
`Pick` and `Omit` are two utility classes in typescript. `Pick` takes defined properties from a type and `Omit` removes defined properties from a type.


## Main Content
`Pick` and `Omit` Keep the code DRY(Don't Repeat Yourself) by making new types using the small slice from the main type/interface. Here the main type/interface is defined once and new types will be created from that automatically. If we later changes the main type/interface then the types created from the main type/interface using the `Pick` or `Omit` utility types will be auto updated. This way it prevents duplication.

Below is an example code to visualize the concept in code:

```ts
interface User {
    id: number,
    name: string,
    password: string,
    email: string,
}

type PublicUser = Pick<User, "id" | "name">;
type LoginDetails = Omit<User, "id" | "name">;
```

## Conclusion
`Pick` and `Omit` types create new types from the targeted types automatically. We don't have to create those new types manually.
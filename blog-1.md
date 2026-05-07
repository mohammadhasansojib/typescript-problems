# Blog Post 1

### Why is `any` labeled a "type safety hole" and why is unknown the safer choice for handling unpredictable data? Below explaining the concept of type narrowing.

## Table of content

[Introduction](#introduction)

[Type `any`](#type-any)

[Type `unknown`](#type-unknown)

[Type narrowing](#type-narrowing)

[Colclusion](#conclusion)



## Introduction

In typescript, `any` and `unknown` types seems to be similar like they both is not defined and there could be any type of data. But even thorugh they looks similar from top view there are some important difference between these two types.

## Type `any`

Type `any` is something like you can use any type of data and use it anywhere you want. It will not prevent you from any use cases in compile time. But it can get into error in runtime. Because it does not check if the data type matches how we are using it or not.

Below is an example code, that shows it is not preventing from the usage of 'address' before checking that is 'address' property exist in 'user' object or not. And it will get into and error at runtime:

```typescript
const user: any = {
    name: "Sajib Hasan",
    age: 25,
}

console.log(user.address);
```

## Type `unknown`

On the other hand when we use `unknown` to any variable, function return or anywhere, it says that ok you can assign whatever type of data you want but you can not use it anywere without type checking. Then we have create a type gaurd and narrow the types before the usage of `unknown` data type. It prevents us from runtime error which is better that type `any`. 

Below code shows that if only the user type is 'object', not null and has 'address' property, then only you can use the 'address' property, otherwise it will get an error in compile time:

```typescript
const user: unknown = {
    name: "Sajib Hasan",
    age: 25,
}

if(typeof user === "object") {
    if(user !== null) {
        if("address" in user) {
            console.log(user.address);
        }
    }
}
```

## Type narrowing

Type narrowing is mainly the concept of narrowing the type before usage. Below is an example code of type narrowing:

```typescript
if(typeof user === "object") {
    if(user !== null) {
        if("address" in user) {
            console.log(user.address);
        }
    }
}
```


## Conclusion
Type `unknown` is more safer than type `any`. Always try to use `unknown` instead of `any` type unless in some exceptional cases where the type is totally unpredictable.
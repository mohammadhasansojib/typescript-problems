# Blog Post 3

How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Table of content

- [Introduction](#introduction)
- [Main Content](#main-content)
- [Conclusion](#conclusion)

## Introduction
Generics is kind of feature that allows to create some reusable components or function that can be used for various types of data type.

## Main Content
Generics mainly allows us to pass data types also when using a component or function. It is kind of to pass parameter in a function. In function we can pass parameter and with generics we can pass data types that makes code reusable.

Below is a code example that shows how data types can be passed with generics in function:

```ts
function myFun<T>(input: T): T {
    return input;
}
```

## Conclusion
We should use generics properly to make our code more DRY(Don't Repeat Youself) as well as reusable.
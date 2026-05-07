# Blog Post 4

How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

## Table of content
- [Introduction](#introduction)
- [Main Content](#main-content)
    - [Inheritance](#inheritance)
    - [Abstraction](#abstraction)
    - [Polymorphism](#polymorphism)
    - [Encapsulation](#encapsulation)
- [Conclusion](#conclusion)

## Introduction
OOP(Object Oriented Programming) is mainly standing on four concepts:

- inheritance
- abstraction
- polymorphism
- encapsulation

These are the mechanism that reduces complexity in large-scale TypeScript project and helps to maintain the project properly.


## Main Content

### Inheritance
Inheritance is the concept of inherit features(properties and methods) from other classes by extending. This reduces duplication in code and keeps consistency in code.

Below example shows how it can inherit features from other class:
```ts
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);

        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}.`;
    }
}
```

### Abstraction
Abstraction keeps the implementation details hide and shows only the definition. This way don't have to worry about the implementation we just know the definition and use them.

Below code shows how abstract class hides the implementation and shows only the definition:

```ts
abstract class Person {
    abstract name: string;
    abstract getName(): string;
}

class Employee extends Person {
    name: string = "Name Here";

    getName() {
        return ``;
    }
}
```

### Polymorphism
Polymorphism means many form. In OOP(object oriented programming), there could be properties or methods with same name of base class and derived class but the implementation can be different.

Below code shows how there could be same name method with diffenrent implementation:

```ts
class Employee {
    printDetails() {
        console.log("This is an Employee");
    }
}
class Manager extends Employee {
    printDetails() {
        console.log("This is a Manager");
    }
}
```

### Encapsulation
Encapsulation keeps the secret details hide from outer world. Suppose in a Bank, we want to keep the `balance` property access secret from outer world, then we can keep that `balance` property access modify into private.

Below code show how the `private` access modified keeps `balance` access property private from outer world:

```ts
class Bank {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }
}
```

## Conclusion
We should use OOP(Object Oriented Programming) in large TypeScript project. Because it keeps our codebase clean and maintainable as well as well documented.
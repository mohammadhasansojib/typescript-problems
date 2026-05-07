//* Problem 1
function filterEvenNumbers(arr: number[]): number[] {
    const evenNumbers: number[] = [];

    for(const num of arr) {
        if((num % 2) === 0) evenNumbers.push(num);
    }

    return evenNumbers;
}


//* Problem 2
function reverseString(str: string): string {
    let strArray: string[] = str.split("");
    let left = 0, right = strArray.length - 1;

    while(left <= right) {
        let temp = strArray[left];
        strArray[left] = strArray[right];
        strArray[right] = temp;

        left++;
        right--;
    }

    const reverseString = strArray.join("");

    return reverseString;
}


//* Problem 3
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): "String" | "Number" {
    if(typeof input === "string") return "String";
    else return "Number";
}


//* Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}


//* Problem 5
interface Book {
    title: string,
    author: string,
    publishedYear: number,
}
type NewBook = Book & {isRead: boolean};

function toggleReadStatus(book: Book): NewBook {

    const newBook: NewBook  = {
        ...book,
        isRead: true,
    }

    return newBook;
}


//* Problem 6
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

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}.`;
    }
}


//* Problem 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
    const result = new Set<number>();
    const set = new Set<number>(arr1);

    for(const num of arr2) {
        if(set.has(num)) result.add(num);
    }

    return Array.from(result);
}
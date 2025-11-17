function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    const inputUpperCase = value.toUpperCase();
    return inputUpperCase;
  }

  if (typeof value === "number") {
    const multipliedValue = value * 10;
    return multipliedValue;
  }

  if (typeof value === "boolean") {
    const changeValue = !value;
    return changeValue;
  }

  return undefined as never;
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    const details = `Name: ${this.name}, Age: ${this.age}`;
    return `'${details}'`;
  }
}

type Items = {
  title: string;
  rating: number;
};
function filterByRating(values: Items[]): Items[] {
  const filterValues = values.filter(
    (value) => value.rating >= 4 && value.rating <= 5
  );

  return filterValues;
}

type UserObject = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
function filterActiveUsers(users: UserObject[]): UserObject[] {
  return users.filter((user) => user.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book): void {
  const available = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`
  );
}

function getUniqueValues<T extends number | string>(array1: T[], array2: T[]): T[] {
  const result: T[] = [...array1]; 


  for (let i = 0; i < array2.length; i++) {
    const item = array2[i];
    let alreadyHave = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === item) {
        alreadyHave = true;
        break;
      }
    }

    if (!alreadyHave && item !== undefined) {
      result[result.length] = item; 
    }
  }

  return result;
}


type productObject = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
function calculateTotalPrice(products : productObject[]): number{
  const totalPrice = products.reduce((previousPrice, currentPrice) => {
    const singlePrice = currentPrice.price * currentPrice.quantity;
    const discountAmount = singlePrice * (currentPrice.discount || 0) / 100;
    const minusAmount = singlePrice - discountAmount
    const finalAmount = previousPrice + minusAmount
    return finalAmount
    
  }, 0);

  return totalPrice
}


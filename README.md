# 1.What are some differences between interfaces and types in TypeScript?

type এর সাহায্যে একটি ডাটা কোন প্রকৃতির আমরা তা প্রথমেই নির্ণয় করি, যাতে যেই ডাটা যেই প্রকৃ্রিতির সেই ডাটা অন্য কোন প্রকৃ্রিতিতে সেট করা হলে রানটাইমেই আমরা ভুল ধরতে পারি। অর্থাৎ একটি ডাটা যদি String ডিফাইন করা হয় তাহলে তার অউটপুট ও String ই হবে নাম্বার হবে না। type দ্বারা যখন ডাটা নির্ণয় করা হয় তখন এটাকে Type aliases বলে। প্রিমিটিভ টাইপগুলো :type NullOrUndefined = null | undefined সাধারণত type এর সাহায্যে ডিফাইন করা হয়। একাধিক type এর হতে পারে এগুলোর জন্য type use করা হয়: type Transport = 'Bus' | 'Car' | 'Bike' | 'Walk';

ইন্টারফেস (interface) হলো একটি কন্ট্রাক্ট যা শুধু অবজেক্টের ভিতরে ডিফাইন করা যায়। প্রিমিটিভ টাইপ ইন্টারফেস দিয়ে ডিফাইন করা যায় না। Declaration merging ইন্টারফেসের জন্য একদম এক্সক্লুসিভ। অর্থাৎ, আমরা একই নামের ইন্টারফেস একাধিকবার ডিফাইন করে ভিন্ন ভিন্ন প্রপার্টি দিতে পারি। উদাহরণ: interface Client{name: string}; interface Client {age: number} TypeScript এতে কোনো এরর দেবে না বরং: const harry: Client ={name: 'Harry',age: 41} এভাবে দুটি ইন্টারফেস আমরা একত্রে মার্জ করতে পারি। আর extends কীওয়ার্ড ব্যবহার করে আমরা ইন্টারফেসের মধ্যে ইনহেরিটেন্স করতে পারি। কিন্তু type দিয়ে আমরা ইন্টারফেসের মতো মার্জিং করতে পারি না।

---

# 2.What is the use of the keyof keyword in TypeScript? Provide an example.

keyof হলো TypeScript-এর একটি খুব শক্তিশালী type operator। এটি কোনো অবজেক্ট টাইপের সব প্রপার্টি নাম keys নিয়ে একটা union type তৈরি করে দেয়। অর্থাৎ, যে কোনো টাইপের কী গুলো কী হবে সেটা জানতে বা সেই কী গুলোর উপর নিরাপদে কাজ করতে keyof ব্যবহার করা হয়।
``` ts
interface Human {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Human;
// PersonKeys হবে: "name" | "age" | "email"

const key1: PersonKeys = "name"; // ঠিক
const key2: PersonKeys = "age";  // ঠিক
const key3: PersonKeys = "address"; //  ভুল, কারণ "address" Person-এ নেই
```

"use strict";
// // interface Human { // interface는 js에서 작동안함
// //   name: string,
// //   age: number,
// //   gender: string;
// // }
Object.defineProperty(exports, "__esModule", { value: true });
// class Human {
//     public name: string; // public 을 private으로 바꾸면 Human클래스 내부에서만 접근 가능함 
//     public age: number;  // 밖에서 접근할 수 없음 
//     public gender: string;
//     constructor(name: string, age: number, gender?: string){
//       this.name = name;
//       this.age = age;
//       this.gender = gender;
//     }
// }
// // const person = {
// //     name: "Jveloper",
// //     age: 25,
// //     gender: "male" 
// // };
// const young = new Human("Young", 27, "female");
// const sayHi = (person: Human): string => {  // gender? 를 하면 인자의 유무가 선택적인 사항이됨
//     return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;    // : ~~ => 적혀질 or 리턴될 type을 적는것
// };
// console.log(sayHi(young));
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "2020202020202", "", "Hello", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map
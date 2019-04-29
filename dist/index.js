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
//-----------------------------------이론 기초설명 끝
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (// 이 부분이 static이기 때문에 블락설정을 따로 안해줘도 바로사용가능함
index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
const genesisBlock = new Block(0, "2020202020202", "", "Hello", 123456);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
};
const getHashforBlock = (aBlock) => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
const isBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    }
    else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
};
createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");
console.log(blockchain);
//# sourceMappingURL=index.js.map
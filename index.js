// Iterators and Generators
// Prototypes
// Classes
// Check types prototopes
// Overide properties
// Наследование
// Инкапсуляция
// static and super
// Calculator  TDD





// const mapChanged = [1,2,3,4].map((value, index)=>{
//      return `${index}: ${value}`
// })
// console.log(mapChanged);
// console.log('--------');
// const arr = [1,2,3,4];

// console.log(arr); 
// for (let o in arr){
//     console.log(o, arr[o])
// }
// for (let o in arr){
//     console.log(o, arr[o])
// }

// console.log('--------');
// const arr2 = [1,2,3,4];
// for (let o in arr){
//     console.log(o, arr[o])
// }
// let i = 0;
//  const mapChanged2  = [1,2,34,5].map(element => {
//     i++;
//      return element;
//  });

 
// вопрос ? да : нет
// function makeIterator(array){
//     let nextIndex = 0;
//     console.log("init");
//     return {
//        next: function(){
//            return nextIndex < array.length ?
//                {value: array[nextIndex++], done: false} :
//                {done: true};
//        }
//     }
// }

// let it = makeIterator(['yo', 'ya', 'test']);

//  function* test() {
//     console.log('init');
//     while(true) {
//         console.log('init2');
//         yield Math.random();
//         console.log('init3');
//         yield Math.random();
//     } 
//  };

//  const a = test();

///isEven(v) => !v%2 
//isOdd(v) => !!isEven(v)

//one -> two -> 50 -> 600000
























// npm i --save-dev mocha esm assert;
// ./node_modules/.bin/mocha --require esm
/*


import assert from 'assert';
import tasks from '../tasks/tasks'

describe('Tasks', function () {
    describe('#task_1', function () {
        it('returns reverted array', function () {
            assert.deepStrictEqual(tasks.task_1([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
        });
});*/

// const callback =  function(){
//     return `${this.name}`
// };
 

// const aaa = [{
//     "name": "tesr",
//     "callback": function(){
//         return `${this.name}`
//     }
// },  

// ]
 
// console.log(aaa); 
 
// const Car = function (name, price) {
//     this.name = name;
//     this.price = price;
// }
// Car.prototype.info =  function  () {return `It's ${this.name} and his price is ${this.price} USD`};
// Car.prototype.discount =  function () {
//     this.price = this.price - 10000;

//     return this.price
// };

// const list = [
//     new Car('Ford', 100000), 
//     new Car('BMW', 200000), 
//     new Car('AUDI', 200000)
// ];  

// list.map(( value )=>{
//     console.log(value.info());  
// })

// Array.prototype.map = () => 'test';

// const aaaa = list.map(( value )=>{
//     console.log(value.info());  
// })


// console.log(aaaa);  


// class Car {
//     name = 'non set';
//     price = 0;
//     discount = 10;
//     text;

//     static getStatic = 1000;
//     static getStaticMethod (){
//         return 'asdasdasd';
//     };

//     constructor (name, price, discount) {
//         this.name = name ;
//         this.price = price;
//         if( discount) {
//             this.discount = discount;
//         }  else {
//             this.discount++;
//         }
//     }

//     set content(value){
//         if (!value){
//              alert("Error");
//         }
//         this.text = value;
//     }

//     get content() { 
//         return Car.getStatic;
//     }; 

//     info() { return `It's ${this.name} and his price is ${this.price} USD`}
// }

// class BMWCars extends Car {
//     constructor (name, price) {
//         super(name, price, 100);
//     }
// }

// const myCar = new Car('BMW', 100000);
// const bmwCar = new BMWCars('X5', 1000000, 100, true);
// console.log(myCar, bmwCar);


// fucntion sum 1 +1 = 2
// fucntion sum 2 + 2 = 4
// fucntion minus 2 - 2 = 0
// fucntion minus 4 - 2 = 2
// fucntion multipl 4 * 2 = 8
// fucntion multipl 4 * 1 = 4
// fucntion multipl 4 * 0 = 0
// fucntion del 4 / 1 = 4
// fucntion del 4 / 4 = 1
// fucntion del 4 / 2 = 2

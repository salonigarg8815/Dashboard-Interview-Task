// // Armstrong number
// // let number = 153;
// // let temp = number;
// // let sum = 0;

// // while (temp > 0) {
// //     let digit = temp % 10; // 153 % 10 = 3
// //     sum += digit ** 3; // 27
// //     temp = parseInt(temp / 10);
// // }

// // if (number == sum) {
// //     console.log("It is a armstrong number")
// // } else {
// //     console.log("It is  not a armstrong number")
// // }

// // closure
// // function outestFunc() {
// //     let x = 7
// //     function outerFunc() {

// //         function innerFunc() {
// //             console.log(x)
// //         }
// //         innerFunc()
// //         let x = 15;
// //     }
// //     outerFunc()
// // }
// // outestFunc()

// // Array.prototype.myMap = function (callback) {
// //     if (!callback) {
// //         console.error("this method is not defined");
// //     }
// //     const newArray = [];
// //     const arr = this;
// //     for (i = 0; i < arr.length; i++) {
// //         const result = callback(arr[i], i, arr)
// //         console.log(result)
// //         newArray.push(result)
// //     }

// //     return newArray;
// // }

// // const newArray = array.myMap((num) => {
// //     return num * 2
// // })

// // console.log(newArray)

// // const array = [2, 4, 6, 3, 8, 4, 5, 7];

// // Array.prototype.myFilter = function (callback) {
// //     if (!callback) {
// //         console.error("Error")
// //     }
// //     const newArray = [];
// //     const arr = this;
// //     for (i = 0; i < arr.length; i++) {
// //         const result = callback(arr[i], i);
// //         // console.log(result)
// //         if (result) {
// //             newArray.push(arr[i]);
// //             // arr.push(newArray);
// //         }
// //     }


// //     return newArray;
// // }

// // const newArray = array.myFilter((num, index) => {
// //     return num % 2 === 0
// // })
// // console.log(newArray)



// // const array = [3, 2, 5, 4, 7, 9]

// // Array.prototype.myReduce = function (callback, initialValue) {
// //     if (!callback) {
// //         console.error('Error')
// //     }

// //     const arr = this;
// //     for (let i = 0; i < arr.length; i++) {
// //         const result = callback(initialValue, arr[i])
// //         initialValue = result;
// //     }

// //     return initialValue;
// // }

// // const newArray = array.myReduce((accu, curr) => {
// //     return accu + curr;
// // }, 0)

// // console.log(newArray);


// // Promise
// // const promise = new Promise((resolve, reject) => {
// //     resolve("resolved promise")
// //     // reject("reject promise")
// // })

// // promise.then((res) => {
// //     console.log(res)
// // })

// // promise.catch((rej) => {
// //     console.log(rej);
// // })

// // callback hell
// // function myfunc1(x){
// //     return "one"
// // }

// // myfunc1( (x)=>{
// //     console.log("TWO")
// // })

// // const obj = {
// //    return x + Y
// // }

// // function myfunc(x) {
// //     return "world"
// // }
// // const bind = obj.bind(myfunc)
// // console.log(bind);


// // const array = [2, 3, 4, 6, 5, 7]

// // Array.prototype.myFilter = function (callback) {
// //     if (!callback) {
// //         console.error("Error")
// //         return;
// //     }
// //     const newArr = [];
// //     const arr = this;
// //     for (let i = 0; i < arr.length; i++) {
// //         const result = callback(arr[i], i, arr)
// //         if (result) {
// //             newArr.push(arr[i])
// //         }
// //     }

// //     return newArr
// // }

// // const newArray = array.myFilter((num, i, arr) => {
// //     console.log(i)
// //     // return num % 2 === 0;
// //     return "abcd"

// // })

// // console.log(newArray)

// // const p1 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve("P1 Success")
// //     }, 2000)
// // })

// // const p2 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         reject("P2 failed")
// //     }, 3000)
// // })

// // const p3 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve("P3 Success")
// //     }, 4000)
// // })

// // ********(Promise.all pollyfill)*********

// // Promise.myAll = function (promises) {
// //     return new Promise((resolve, reject) => {
// //         if (!Array.isArray(promises)) {
// //             console.error(" undefined is not iterable")
// //             return;
// //         }

// //         const n = promises.length;
// //         const result = [];
// //         if (promises.length === 0) {
// //             resolve(result);
// //             return;
// //         }

// //         promises.forEach(async (promise, index) => {
// //             try {
// //                 const res = await promise;
// //                 result[index] = res;
// //                 if (index === n - 1) {
// //                     resolve(result)
// //                 }
// //                 return;
// //             }
// //             catch (err) {
// //                 reject(err)
// //                 return;
// //             }
// //         })
// //     })
// // }

// // Promise.myAll([p1, p3, p2])
// //     .then((res) => {
// //         console.log(res)
// //     })
// //     .catch((rej) => {
// //         console.log(rej)
// //     })


// // ********(Promise.sattled)*********

// // Promise.myAllSettled = function (promises) {

// //     return new Promise((resolve, reject) => {
// //         if (!Array.isArray(promises)) {
// //             console.error("undefined is not itrable")
// //             return;
// //         }

// //         const n = promises.length;
// //         if (n === 0) {
// //             resolve({
// //                 status: 'fulfilled',
// //                 value: ''
// //             })
// //             return;
// //         }

// //         const result = [];
// //         count = 0;
// //         promises.forEach(async (promise, index) => {
// //             try {
// //                 const res = await promise;
// //                 const obj = { status: "fullfiled", value: res }
// //                 result[index] = obj
// //                 // console.log(result)
// //                 count++
// //                 // console.log(count)

// //                 if (count === n) {
// //                     resolve(result)
// //                     return;
// //                 }
// //             }
// //             catch (err) {
// //                 const obj = { status: "fullfiled", value: err }
// //                 result[index] = obj
// //                 count++
// //                 if (count === n) {
// //                     resolve(result)
// //                     return;
// //                 }
// //             }
// //         })

// //     })
// // }
// // Promise.myAllSettled([p1, p2, p2])
// //     .then((res) => {
// //         console.log(res)
// //     })
// //     .catch((rej) => {
// //         console.log(rej)
// //     })

// // / Promise.myRace = function (promises) {
// //     return new Promise((resolve, reject) => {

// //         if (!Array.isArray(promises)) {
// //             console.error("undefined is not iterable")
// //             return;
// //         }

// //         const n = promises.length;
// //         if (n === 0) {
// //             resolve();
// //         }

// //         promises.forEach((promises, index) => {
// //             return Promise.resolve(promises)
// //                 .then(resolve)
// //                 .catch(reject)

// //         })
// //     })
// // }

// // Promise.myRace([p1, p2, p3])
// //     .then((res) => {
// //         console.log(res)
// //     })
// //     .catch((rej) => {
// //         console.log(rej)
// //     })

// // ********(Promise.any)*********

// // Promise.myAny = function (promises) {
// //     return new Promise((resolve, reject) => {

// //         if (!Array.isArray(promises)) {
// //             console.error(" undefined is not iterable")
// //             return;
// //         }

// //         const n = promises.length;
// //         const errors = [];
// //         if (n === 0) {
// //             resolve({
// //                 message: "empty array passed"
// //             })
// //         }

// //         promises.forEach(async (promises, index) => {
// //             try {
// //                 const res = await promises
// //                 resolve(res)
// //             }
// //             catch (err) {
// //                 errors[index] = err
// //                 if (index === n - 1) {
// //                     reject({
// //                         message: new Error("all promises were rejected"), errors
// //                     })
// //                 }

// //             }
// //         })


// //     })
// // }

// // Promise.myAny([p2, p2, p2])
// //     .then((res) => {
// //         console.log(res)
// //     })
// //     .catch((rej) => {
// //         console.log(rej)
// //     })

// // ********(Promise.any)*********
// // promise
// // const p1 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve("P1 Success")
// //     }, 2000)
// // })

// // const p2 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         reject("P2 failed")
// //     }, 3000)
// // })

// // const p3 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve("P3 Success")
// //     }, 4000)
// // })


// // Promise.myRace = function (promises) {
// //     return new Promise((resolve, reject) => {
// //         if (!Array.isArray(promises)) {
// //             console.log("error")
// //             return;
// //         }
// //         promises.forEach((promise) => {
// //             return Promise.resolve(promise)
// //                 .then(resolve)
// //                 .catch(reject)

// //         });
// //     })
// // }


// // Promise.myRace([p1, p2, p3])
// //     .then((res) => {
// //         console.log(res)
// //     })
// //     .catch((rej) => {
// //         console.log(rej)
// //     })

// // Polyfill for flat()

// // Array.prototype.myFlat = function () {
// //     const arr = this;
// //     const result = [];

// //     function flat(arr) {
// //         for (let i = 0; i < arr.length; i++) {
// //             if (Array.isArray(arr[i])) {
// //                 flat(arr[i])
// //             } else {
// //                 result.push(arr[i])
// //             }
// //         }
// //     }
// //     flat(arr)
// //     return result;
// // }
// // const arr = [4, 3, 2, 6, [4, 8]]
// // console.log(arr.myFlat())
// // console.log(arr.flat())

// // should first repeat number
// // exm [1,2,1,2,4,5]
// // ans = 1


// // function firstRN(arr) {
// //     return arr.find((num) =>
// //         console.log(arr.indexOf(num))
// //         // arr.indexOf(num) !== arr.lastIndexOf(num)
// //     )


// // }
// // const arr = [1, 2, 1, 2, 4, 5]
// // console.log(firstRN(arr))

// // const arr = [1, 2, 1, 2, 4, 5]
// // console.log(arr.indexOf())

// // Polyfil of call method
// // function myFunc(lName) {
// //     console.log(`my Fname is ${this.name} and lName ${lName} `)
// // }

// // var obj = {
// //     name: 'Saloni'
// // }

// // Function.prototype.myCall = function (contaxtObj, ...arg) {
// //     console.log(contaxtObj)
// //     contaxtObj.refFunc = this;
// //     console.log(contaxtObj)
// //     contaxtObj.refFunc(...arg)

// // }



// // myFunc.myCall(obj, 'garg')
// // myFunc.call(obj, 'garg')

// // Polyfil of Apply method
// // function myFunc(lName) {
// //     console.log(`my Fname is ${this.name} and lName ${lName} `)
// // }

// // var obj = {
// //     name: 'Saloni'
// // }

// // Function.prototype.myApply = function (contextObj, args) {
// //     if (typeof this !== 'function') {
// //         throw Error('Error')
// //     }

// //     contextObj.refFunc = this;
// //     contextObj.refFunc(...args)

// // }



// // myFunc.myApply(obj, ['garg'])
// // myFunc.apply(obj, ['garg'])



// // function myFunc(age, city, phone) {
// //     console.log(`your name is ${this.name} and age is ${age} and lives in ${city} and your number is ${phone} `)
// // }

// // var obj = {
// //     name: 'Jhon'
// // }

// // Function.prototype.myBind = function (contextObj, ...args) {
// //     if (typeof this !== 'function') {
// //         throw Error("this is not a function")
// //     }

// //     contextObj.refFunc = this;
// //     return function (...otherArgs) {
// //         contextObj.refFunc(...args, ...otherArgs)
// //     }
// // }

// // const newFunc = myFunc.myBind(obj, 25, 'Mumbai')
// // // const newFunc = myFunc.bind(obj, 25, 'Mumbai')
// // newFunc(1234)










// // const array = [3, 45, 6, 2, 4, 7, 9]

// // array.sort((a, b) => b - a)
// // console.log(array)




// // polyfill of call

// // function myFunc(name, phone) {
// //     console.log(`Your name is ${name} number is ${this.phone}`)
// // }


// // const obj = {
// //     name: 'Jhon',
// //     phone: 20,

// // }
// // Function.prototype.myCall = function (contextObj, ...arg) {
// //     // this(...arg)
// //     contextObj.refFunc = this;
// //     contextObj.refFunc(...arg)
// //     delete contextObj.refFunc;
// // }


// // myFunc.myCall(obj, 10)
// // // myFunc.call(obj, 12)
// // console.log(obj)


// // function myFunc(name, phone) {
// //     console.log(`Your name is ${name} number is ${this.phone}`)
// // }


// // const obj = {
// //     name: 'Jhon',
// //     phone: 20,

// // }

// // Function.prototype.myApply = function (contextObj, args) {

// //     contextObj.refFunc = this;
// //     contextObj.refFunc(args)
// //     delete contextObj.refFunc;
// // }




// // myFunc.myApply(obj, [12])
// // myFunc.apply(obj, [12])




// // function myFunc(name, phone) {
// //     console.log(`Your name is ${name} number is ${this.phone} age is ${phone}`)
// // }


// // const obj = {
// //     name: 'Jhon',
// //     phone: 20,

// // }

// // Function.prototype.myBind = function (contaxtObj, ...args) {
// //     contaxtObj.refFunc = this;

// //     return function Func(...otherarg) {
// //         contaxtObj.refFunc(...args, ...otherarg)
// //     }


// // }



// // const newFunc = myFunc.myBind(obj, 10)
// // newFunc(20)
// // const newFunc = myFunc.bind(obj, 10)
// // newFunc()



// // const arr = [
// //     { name: 'Peter', age: 13 },
// //     { name: 'Paul', age: 25 },
// //     { name: 'Mary', age: 17 },
// //     { name: 'Akash', age: 20 },
// //     { name: 'Bharti', age: 22 },
// // ];

// // arr.sort((a, b) => a.name.localeCompare(b.name))
// // console.log(arr)


// // const arr = [4, 3, 6, 7, 2, 8]
// // arr.sort((a, b) => b - a)
// // console.log(arr)


// // ***Thapa Technical Opratorrs***

// // Combitation of operator and operate known as Experasation

// // const array = ["Apple", "zanana", "tango", "Papaya"]

// const str = "Hello Javascript welcome to world best javascript course"

// // const index = str.indexOf("javascript")
// // const index = str.lastIndexOf("javascript", 40)


// // let result = str.search(/Javascript/i)
// console.log(result)

console.log(x)
var x = 7

myFunc()
function myFunc() {
    console.log("Hello World")
}

const arr1 = [4, 3, 5, 6, 7]
const arr2 = [3, 5, 6, 6]

const arr3 = [...arr1, ...arr2]
console.log(arr3)

// 'use strict';

// var Account = () => {
//     var Balance = 0;
//     var AcctNo = 0;
//     var Owner = "";

//     var Deposit = (amount) => {
//         setBalance(getBalance() + amount);
//     }

//     var getBalance = () => {
//         return Balance;
//     }
//     var setBalance = (newBalance) => {
//         console.log("newV", newBalance)
//         return Balance = newBalance;
//     }
//     var Open = (balance, acctno, owner) => {
//         setBalance(balance);
//         AcctNo = acctno;
//         Owner = owner;
//     }


//     var returnObject = {
//         acctno: AcctNo,
//         owner: Owner,
//         open: Open,
//         deposit: Deposit,
//         balance: getBalance,

//     }

//     return returnObject;
// }

// var acc = Account();
// acc.deposit(500)
// //acc.open(balance, acctno, owner)

// console.log("acc object", acc.balance());

// var Employee = function () {
//     theEmp = {
//         name: "",
//         salary: 0
//     }

//     getSalary = () => {
//         return 100
//     }
//     setSalary = (salary) => {
//         theEmp.salary = salary
//     }
//     giveRaise = (amount) => {
//         setSalary(getSalary() + amount)
//     }

//     //theEmp.giveRaise = giveRaise

//     return theEmp;
// }
// aEmp = Employee();
// aEmp.name = "Employee"
// aEmp.salary = 15000;
// aEmp.giveRaise(1000)
// console.log(aEmp);


// function Data() {
//     var x = [];
//     return {
//         put: (item) => {
//             x.push(item);
//         },
//         take: () => {
//             return x.pop();
//         },
//         size: () => {
//             return x.length;
//         }

//     }
// }

// let y = Data();
// y.put(10);
// y.put(-15);
// console.log(y.size());
// console.log(y.take());
// console.log(y.size());

var a = 10;

function f() {
    var b = 20;
    function g() {
        var c = a + b;
        return c;
    }
    b = 30; return g;
}

// myFunc = f();
// x = myFunc();
// console.log(x);
// a = 100;
// y = myFunc();
// console.log(y);

// let y = null //
// console.log(x == y)

var sentence = 'Maharishi university of management'
var a = sentence.split(" ")
a.sort()
console.log(a.join(" "))

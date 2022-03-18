"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
//isTrue
var xyy = true
function isTrue(yxx) {
    if (yxx === true) {
        return true;
    } else {
        return false;
    }
}
console.log(isTrue(xyy));

//isFalse
var isVal = false;
function isFalse(val) {
    if (val === false) {
        return true
        } else {
            return false
        }
}
console.log(isFalse(isVal));

//not
var xx1;
function not(xx){
        return !xx;
}
console.log(not(xx1));

//addOne
function addOne(input3){
        return Number(input3) + 1;
    }
console.log(addOne(-5));

//isEven
function isEven(input){
    if (input % 2 === 0) {
        return true;
    } else{
        return false;
    }
}
console.log(isEven(2));

//isIdentical
function isIdentical(x, y){
    if(x === y) {
        return true;
    } else{
        return false;
    }
}

console.log(isIdentical(5, 5));

//isEqual
function isEqual(yyy, zzz){
    if(yyy == zzz) {
        return true;
    } else {
        return false;
    }
}

console.log(isEqual(5, 5));

//or
function or(aaa, bbb){
    return (aaa || bbb)
}
console.log(or());

//and
function and(ppp, ooo){
    return (ppp && ooo)
}
console.log(and());


//concat
function concat(mmm, nnn){
    return String(mmm) + String(nnn);
}
console.log(concat());
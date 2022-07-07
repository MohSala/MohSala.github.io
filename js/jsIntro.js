
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}


//returns the largest of two numbers. 
function max(num1, num2) {
    var max = 0;
    if (num1 > num2) {
        max = num1;
    }
    else {
        max = num2;
    }
    return max;
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)) + "\n");
console.assert(20 === max(20, 10), "TEST FAILED.  Expected " + 20 + " found " + max(20, 10));

console.assert(10 === max(20, 10) ? "TEST SUCCEEDED" : "TEST FAILED.  Expected " + 20 + " found " + max(20, 10));


/**
 * returns the largest of three numbers.
 */
function maxOfThree(num1, num2, num3) {
    return max(max(num1, num2), num3);
}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)) + "\n");
console.assert(44 === maxOfThree(5, 4, 44), "TEST FAILED.  Expected " + 44 + " found " + maxOfThree(5, 4, 44));

/**
 * returns true if character is a vowel, false otherwise.
 */
function isVowel(vowel) {

    if (vowel.length > 2) {
        return false
    }

    var v = vowel.toUpperCase();
    if (v == "A" || v == "E" || v == "I" || v == "O" || v == "U") {
        return true;
    } else {
        return false;
    }
}

console.log("Expected output of isVowel(\"b\") is false  " + myFunctionTest(false, isVowel("b")) + "\n");
console.assert(false === isVowel("b"), "TEST FAILED.  Expected " + false + " found " + isVowel("b"));

/**
 * sums all the numbers in an array of numbers. 
 */

function sum([...args]) {
    return args.reduce((a, b) => a + b, 0)
}

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])) + "\n");
console.assert(10 === sum([1, 2, 3, 4]), "TEST FAILED.  Expected " + 10 + " found " + sum([1, 2, 3, 4]));


/**
 * multiplies all the numbers in an array of numbers. 
 */
function multiply([...args]) {
    return args.reduce((a, b) => a * b, 1)
}

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])) + "\n");
console.assert(24 === multiply([1, 2, 3, 4]), "TEST FAILED.  Expected " + 24 + " found " + multiply([1, 2, 3, 4]));


/**
 * computes the reversal of a string. 
 */

function reverse(word) {
    if (word.length < 2) return word;

    return reverse(word.substr(1)) + word.charAt(0);
}

console.log("Expected output of reverse(\"jag testar\") is \"ratset gaj\"  " +
    myFunctionTest("ratset gaj", reverse("jag testar")) + "\n");
console.assert("ratset gaj" === reverse("jag testar"), "TEST FAILED.  Expected " + "ratset gaj" + " found " + reverse("jag testar"));


/**
 * returns the length of the longest one.
 */

function findLongestWord([...args]) {
    var maxWord = args[0];

    if (args.length == 0) return
    if (args.length < 2) return args[0];

    args.forEach((item) => {
        if (item.length > maxWord.length) {
            maxWord = item;
        }
    });
    return maxWord;
}

console.log("Expected output of findLongestWord([\"abc\", \"abcd\", \"a\"]) is \"abcd\"  " +
    myFunctionTest("abcd", findLongestWord(["abc", "abcd", "a"])) + "\n");
console.assert("abcd" === findLongestWord(["abc", "abcd", "a"]), "TEST FAILED.  Expected " + "abcd"
    + " found " + findLongestWord(["abc", "abcd", "a"]));


/**
 * returns the array of words that are longer than i.
 */

function filterLongWords([...args], i) {
    const result = args.filter(word => word.length > i);
    return JSON.stringify(result);
}

console.log("Expected output of filterLongWords([\"abc\", \"abcd\", \"a\"], 2) is [\"abc\", \"abcd\"]  " +
    myFunctionTest(JSON.stringify(["abc", "abcd"]), filterLongWords(["abc", "abcd", "a"], 2)) + "\n");
console.assert(JSON.stringify(["abc", "abcd"]) === filterLongWords(["abc", "abcd", "a"], 2), "TEST FAILED.  Expected " + JSON.stringify(["abc", "abcd"])
    + " found " + filterLongWords(["abc", "abcd", "a"], 2));

/**
 * a) multiply each element by a number; 
 */

function multiplyArrayItemsbyNum([...args], num) {
    const b = args.map(function (elem, i, array) {
        return elem * num;
    });

    return b.toString();
}

console.log("Expected output of multiplyArrayItemsbyNum([1,3,5,3,3], 10) is [10,30,50,30,30]  " +
    myFunctionTest([10, 30, 50, 30, 30].toString(), multiplyArrayItemsbyNum([1, 3, 5, 3, 3], 10)) + "\n");
console.assert([10, 30, 50, 30, 30].toString() === multiplyArrayItemsbyNum([1, 3, 5, 3, 3], 10), "TEST FAILED.  Expected " + [10, 30, 50, 30, 30].toString()
    + " found " + multiplyArrayItemsbyNum([1, 3, 5, 3, 3], 10));

/**
 * b) return array with all elements equal to number;
 */

function arrayItemsEqualToNum([...args], num) {
    const c = args.filter(function (elem, i, array) {
        return elem == num;
    });

    return c.toString();
}
console.log("Expected output of arrayItemsEqualToNum([1,3,5,3,3], 3) is [3,3,3]  " +
    myFunctionTest([3, 3, 3].toString(), arrayItemsEqualToNum([1, 3, 5, 3, 3], 3)) + "\n");
console.assert([3, 3, 3].toString() === arrayItemsEqualToNum([1, 3, 5, 3, 3], 3), "TEST FAILED.  Expected " + [3, 3, 3].toString()
    + " found " + arrayItemsEqualToNum([1, 3, 5, 3, 3], 3));

/**
 *  c) return the product of all elements;
 */

function multiplyArrayItems([...args]) {
    const d = args.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    });
    return d;
}
console.log("Expected output of multiplyArrayItems([1,3,5,3,3]) is 135  " +
    myFunctionTest(135, multiplyArrayItems([1, 3, 5, 3, 3])) + "\n");
console.assert(135 === multiplyArrayItems([1, 3, 5, 3, 3]), "TEST FAILED.  Expected " + 135
    + " found " + multiplyArrayItems([1, 3, 5, 3, 3]));

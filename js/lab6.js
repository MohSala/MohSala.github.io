/**
 * Exercise 1:
Define a filter function on the String object. The function accepts an array of strings that
specifies a list of banned words. The function returns the string after removing all the
banned words.
Example:
console.log("This house is not nice!".filter('not'));
Output: "This house is nice!"
 */

if (String.prototype.filter === undefined) {
    String.prototype.filter = function ([...args]) {
        return this.split(' ').filter(s => args.indexOf(s) == -1)
            .join(' ');
    }
}

describe("filter", function () {

    it("returns a string after removing all the banned words from a string array",
        function () {
            assert.equal("This house is nice!", "This house is not nice!".filter(['not']));
        });

});


/**
 * Exercise 2:
Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
that works by repeatedly stepping through the list to be sorted,
Example:[6,4,0, 3,-2,1].bubbleSort();
Output : [-2, 0, 1, 3, 4, 6]
 */

if (Array.prototype.bubbleSort === undefined) {
    Array.prototype.bubbleSort = function () {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < (this.length - i - 1); j++) {

                if (this[j] > this[j + 1]) {
                    var temp = this[j]
                    this[j] = this[j + 1]
                    this[j + 1] = temp
                }
            }
        }
        // console.log(this);
        return this;
    };
}

describe("bubbleSort", function () {

    it("returns a sorted list from an array",
        function () {
            assert.equal([-2, 0, 1, 3, 4, 6].toString(), [6, 4, 0, 3, -2, 1].bubbleSort());
        });

});


var Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
}
var Student = function () { };
Student.prototype = new Person();

Student.prototype.learn = function (subject) {
    console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

/**
 * Exercise 3
 * Create an object called Teacher derived from the Person class, and implement a method called teach
which receives a string called subject, and returns:
[teacher's name] is now teaching [subject]
 */

let Teacher = function () { };
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
    return this.name + " is now teaching " + subject;
}

function testTeacher(tname, age, subject) {
    let you = new Teacher();
    you.initialize(tname, age);
    return you.teach(subject);
}


describe("teach", function () {

    it("returns the subject a Teacher is teaching",
        function () {
            assert.equal("Michael is now teaching Web Programming", testTeacher("Michael", 42, "Web Programming"));
        }
    );

});

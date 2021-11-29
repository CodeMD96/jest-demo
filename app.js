const add = (num1, num2) => {
    return num1 + num2;
};

const trueOrFalse = (value) => {
    if (value) {
        return true;
    } else {
        return false;
    };
};

const aboutMe = (name, age) => {
    let me = {
        name: name,
        age: age,
    };
    return me;
}

const sixOrMore = (arr) => {
    newArr = [];
    for (let i= 0; i < arr.length; i++) {
        if (arr[i].length >= 6) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const numToString = (num) => {
    return num.toString();
}

const planet = (num) => {
    let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    return planets[num-1];
}

const students = (arr) => {
    let num = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === true) {
            num++;
        };
    };
    return num;
};

const squareDigi = (num) => {
    let arr = (""+num).split("");
    let newNum="";

    for (let i=0; i<arr.length; i++) {
        square = parseInt(arr[i])**2;;
        newNum += `${square}`;
    }
    return parseInt(newNum);
}

const century = (year) => {
    let yearStr = year.toString();
    console.log(yearStr);
    let date1 = parseInt(yearStr.slice(0, -2));
    let date2 = parseInt(yearStr.slice(-2));
    
    let century = date1 +1;

    if (date2 == 0) {
        century --;
    }
    return century;
}

const toBinary = (arr) => {
    const binaryString = arr.join("");

    // parseInt takes a string and a base and converts to an int of specifies radix (base). 2 is the base for binary.
    return parseInt(binaryString, 2);
 };

module.exports = {
    add,
    trueOrFalse,
    aboutMe,
    sixOrMore,
    numToString,
    planet,
    students,
    squareDigi,
    century,
    toBinary,
};
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

module.exports = {
    add,
    trueOrFalse,
    aboutMe,
    sixOrMore,
    numToString,
    planet,
};
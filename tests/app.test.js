const { TestWatcher } = require("@jest/core");
const app = require("../app.js");


it("Should equal 'hello world' when passed 'hello ' and 'world'.", () => {
    expect(app.add("hello ", "world")).toEqual("hello world");
});

it("Should not be null when passed 2 and 3.", () => {
    expect(app.add(2, 3)).not.toBeNull;
});

it("Should be truthy when passed 5.", () => {
    expect(app.trueOrFalse(5)).toBeTruthy;
});

it("Should not be falsy when passed 'hello'.", () => {
    expect(app.trueOrFalse("hello")).not.toBeFalsy;
});

it("Should return object with name: 'Mike' and age: 25", () => {
    expect(app.aboutMe("Mike", 25)).toEqual(
        expect.objectContaining({
            name: "Mike",
            age: 25
        })
    )
})

it("Should return an array of items with 6 or more characters.", () => {
    let arr = app.sixOrMore(["Two", 2, "MoreThanSix", "AlsoMoreThanSix"])
    for (let i = 0; i < arr.length; i++) {
        expect(arr[i].length).toBeGreaterThan(5);
    }
});

it("Should return a string", () => {
    expect(app.numToString(234)).toBeString;
});

it("Should return Uranus when given 7", () => {
    expect(app.planet(7)).toEqual("Uranus");
});

it("should return 2 when give [true, true, false, false].", () => {
    expect(app.students([true, true, false, false])).toEqual(2);
});

it("Should return 916 when given 34", () => {
    expect(app.squareDigi(34)).toEqual(916);
});

it("Should return 18 when given 1789", () => {
    expect(app.century(1789)).toEqual(18);
});

it("Should return 1 when given [0, 0, 0, 1]", () => {
    expect(app.toBinary([0, 0, 0, 1])).toEqual(1);
});

it("Should return 4 when given [0, 1, 0, 0]", () => {
    expect(app.toBinary([0, 1, 0, 0])).toEqual(4);
});
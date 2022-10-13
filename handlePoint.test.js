const {expect, test} = require("@jest/globals");
const handle = require("./handlePoint");

test("ava", () => {
    expect(handle(11, 50)).toBe("Normal");
});

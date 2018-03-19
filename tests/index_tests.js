function floor(num) {
	return Math.floor(num);
};
function round(num) {
	return Math.round(num);
};
function replace(word) {
	return word.replace(/[a]/gi, "o");
};
function index(word) {
	return word.indexOf("w");
};

describe("Test group for front-app", () => {

	it("should return a second pow", () => {
		expect(Math.pow(2,2)).toBe(4);
	}),

	it("shouldn't be a squad", () =>{
		expect(Math.pow(2,3)).not.toBe(4);
		expect(+prompt("")).toBeGreaterThan(6);
	}),

	it("should return Math.floor", () => {
		expect(floor(10.6)).toBe(Math.floor(10.6));
	}),

	it("should return Math.round", () => {
		expect(round(602.83)).toBe(Math.round(602.83));
	})

});
describe("Work with string", () => {

	it("should all \"a\" make \"o\" ", () => {
		expect(replace('TarantulA')).toBe("TarantulA".replace(/[a]/gi, "o"));
	}),

	it("should find \"w\" ", () => {
		expect("ITEA".indexOf("w")).not.toBe("T");
	})
});
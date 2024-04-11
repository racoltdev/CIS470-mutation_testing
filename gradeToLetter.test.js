const gradeToLetter =require("./gradeToLetter")

describe("calculateGrade", () => {
	describe("Midrange Tests", () => {
		test("should return 'A' for a score of 95", () => {
			expect(gradeToLetter(95)).toBe("A");
		});

		test("should return 'B' for a score of 85", () => {
			expect(gradeToLetter(85)).toBe("B");
		});

		test("should return 'C' for a score of 75", () => {
			expect(gradeToLetter(75)).toBe("C");
		});

		test("should return 'D' for a score of 65", () => {
			expect(gradeToLetter(65)).toBe("D");
		});

		test("should return 'F' for a score of 25", () => {
			expect(gradeToLetter(25)).toBe("F");
		});
	});

	describe("Invalid Input", () => {
		test("should return 'Invalid input'", () => {
			expect(gradeToLetter('h')).toBe('Invalid input. Please provide a number.');
		});
	});

// Boundary Tests
	describe("Boundary Tests", () => {
		test("min A", () => {
			expect(gradeToLetter(90)).toBe("A");
		});

		test("max B", () => {
			expect(gradeToLetter(89)).toBe("B");
		});

		test("min B", () => {
			expect(gradeToLetter(80)).toBe("B");
		});

		test("max C", () => {
			expect(gradeToLetter(79)).toBe("C");
		});

		test("min C", () => {
			expect(gradeToLetter(70)).toBe("C");
		});

		test("max D", () => {
			expect(gradeToLetter(69)).toBe("D");
		});

		test("min D", () => {
			expect(gradeToLetter(60)).toBe("D");
		});

		test("max F", () => {
			expect(gradeToLetter(59)).toBe("F");
		});

		test("min F", () => {
			expect(gradeToLetter(0)).toBe("F");
		});
	});
});

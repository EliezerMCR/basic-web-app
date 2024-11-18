import QueryProcessor from '../../utils/QueryProcessor';
import '@testing-library/jest-dom';

describe('QueryProcessor', () => {
	test('should return a string', () => {
		const query = 'test';
		const response: string = QueryProcessor(query);
		expect(typeof response).toBe('string');
	});

	test('should return shakespeare description', () => {
		const query = 'shakespeare';
		const response: string = QueryProcessor(query);
		expect(response).toBe(
			'William Shakespeare (26 April 1564 - 23 April 1616) was an ' +
				'English poet, playwright, and actor, widely regarded as the greatest ' +
				"writer in the English language and the world's pre-eminent dramatist."
		);
	});

	// TODO: Deberías actualizar la prueba a continuación después de añadir tu USB ID
	test('should return my USB ID', () => {
		const query = "what's your USB ID?";
		const response: string = QueryProcessor(query);
		expect(response).toBe('18-10605');
	});

	test('should return my USB ID', () => {
		const query = 'What is your name?';
		const response: string = QueryProcessor(query);
		expect(response).toBe('Elizer');
	});

	test.each([
		['Which of the following numbers is the largest: 87, 55, 92?', '92'],
		['Which of the following numbers is the largest: 28, 44, 48?', '48'],
		['Which of the following numbers is the largest: 68, 19, 59?', '68'],
		['Which of the following numbers is the largest: 8, 61, 20?', '61'],
		['Which of the following numbers is the largest: 42, 79, 41?', '79'],
		['Which of the following numbers is the largest: 2, 7, 78?', '78'],
		['Which of the following numbers is the largest: 65, 75, 25?', '75'],
		['Which of the following numbers is the largest: 35, 97, 54?', '97'],
		['Which of the following numbers is the largest: 66, 51, 70?', '70'],
		['Which of the following numbers is the largest: 55, 44, 27?', '55'],
		['Which of the following numbers is the largest: 23, 66, 10?', '66'],
	])("should return the largest number for query '%s'", (query, expected) => {
		const response: string = QueryProcessor(query);
		expect(response).toBe(expected);
	});

	test.each([
		['What is 85 plus 93?', '178'],
		['What is 91 plus 5?', '96'],
		['What is 17 plus 42?', '59'],
		['What is 91 plus 32?', '123'],
		['What is 99 plus 69?', '168'],
		['What is 46 plus 10?', '56'],
		['What is 79 plus 2?', '81'],
	])("should return the sum for query '%s'", (query, expected) => {
		const response: string = QueryProcessor(query);
		expect(response).toBe(expected);
	});

	test.each([
		['What is 48 multiplied by 20?', '960'],
		['What is 5 multiplied by 5?', '25'],
		['What is 0 multiplied by 100?', '0'],
		['What is -10 multiplied by 3?', '-30'],
		['What is 999 multiplied by 2?', '1998'],
	])("should return the product for query '%s'", (query, expected) => {
		const response: string = QueryProcessor(query);
		expect(response).toBe(expected);
	});

	test.each([
		[
			'Which of the following numbers is both a square and a cube: 531, 625, 3748, 216, 4612, 1, 535?',
			'1',
		],
		[
			'Which of the following numbers is both a square and a cube: 1, 1024, 926, 729, 3700, 1311, 1702?',
			'1',
		],
		[
			'Which of the following numbers is both a square and a cube: 3199, 64, 784, 1339, 4913, 1861, 2331?',
			'64',
		],
		[
			'Which of the following numbers is both a square and a cube: 1906, 64, 784, 973, 4096, 4675, 3560?',
			'64',
		],
		[
			'Which of the following numbers is both a square and a cube: 125, 2541, 4417, 1892, 4, 2694, 4096?',
			'4096',
		],
		[
			'Which of the following numbers is both a square and a cube: 125, 2541, 4417, 1892, 4, 2694, 4096?',
			'1',
		],
		[
			'Which of the following numbers is both a square and a cube: 3396, 246, 1600, 64, 87, 3566, 3375?',
			'1',
		],
	])(
		"should return the number that is both a square and a cube for query '%s'",
		(query, expected) => {
			const response: string = QueryProcessor(query);
			expect(response).toBe(expected);
		}
	);

	test.each([
		['Which of the following numbers are primes: 3, 48, 69, 85, 26?', '3'],
		[
			'Which of the following numbers are primes: 11, 22, 33, 44, 55?',
			'11',
		],
		[
			'Which of the following numbers are primes: 34, 43, 47, 74, 13?',
			'43, 47, 13',
		],
		['Which of the following numbers are primes: 4, 6, 8, 10, 12?', 'None'],
		[
			'Which of the following numbers are primes: 2, 3, 5, 7, 11?',
			'2, 3, 5, 7, 11',
		],
	])(
		"should return the number(s) that are primes for query '%s'",
		(query, expected) => {
			const response: string = QueryProcessor(query);
			expect(response).toBe(expected);
		}
	);
});

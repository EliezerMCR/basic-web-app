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
	])("should return the largest number for query '%s'", (query, expected) => {
		const response: string = QueryProcessor(query);
		expect(response).toBe(expected);
	});

	test.each([
		['What is 85 plus 93?', '178'],
		['What is 91 plus 5?', '96'],
		['What is 17 plus 42?', '59'],
		['What is 91 plus 32?', '123'],
		['What is 85 plus 93?', '178'],
	])("should return the sum for query '%s'", (query, expected) => {
		const response: string = QueryProcessor(query);
		expect(response).toBe(expected);
	});
});

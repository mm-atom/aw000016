import { expect } from 'chai';
import t from '../dist/index';

describe('storage clear', () => {
	it('clear storage', () => {
		t();
		expect(localStorage.length).eq(0);
	});
});

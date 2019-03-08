import * as assert from 'assert'

import {kebabCase, reverseKebab} from '../index'

describe('kebabCase()', () => {
	it('string with uppercased letters', () => {
		assert.strictEqual(kebabCase('helloWorld'), 'hello-world')
		assert.strictEqual(kebabCase('hello World!'), 'hello -world!')
	})

	it('string without uppercased letters', () => {
		assert.strictEqual(kebabCase('hello world'), 'hello world')
		assert.strictEqual(kebabCase('-- hello world --'), '-- hello world --')
	})

	it('string with leading uppercased letters', () => {
		assert.strictEqual(kebabCase('WebkitTransform'), '-webkit-transform')
		assert.strictEqual(kebabCase('Mr. Kebab'), '-mr. -kebab')
	})

	it('string with international uppercased letters', () => {
		assert.strictEqual(kebabCase('ølÜberÅh'), 'øl-über-åh')
		assert.strictEqual(kebabCase('Érnest'), '-érnest')
	})
})

describe('reverseKebab()', () => {
	it('the reverse', () => {
		const str = "Hallå, Mr. Kebab Überstein! How you doin'?-"
		assert.strictEqual(reverseKebab(kebabCase(str)), str)
	})
})

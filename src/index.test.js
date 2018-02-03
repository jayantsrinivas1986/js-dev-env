import { expect } from 'chai';

var fs= require('fs');
const jsdom = require("jsdom/lib/old-api.js");



describe('our first test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
		expect(false).to.equal(false);

	});
});

describe('test index.html to contain hello world', function () {
	it('should contain Hello World!', function (done) {
		const index = fs.readFileSync('./src/index.html', "utf-8");
		jsdom.env(index, function (err, window) {
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal('Hello world??');
			done();
			window.close();
		});
	});
});

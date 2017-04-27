var assert = require('chai').assert;
var sudoku = require('../index.js')

describe('Array', function(){
	describe('#findReplace()', function(){
		it('should replace the first instance of CHAR with REPLACEMENT', function(){
			replaced = [1,2,1,2]
			replaced.findReplace(2, '2');
			assert.deepEqual([1,'2',1,2], replaced);
		})

		it('should return 1 if an item is replaced', function(){
			assert.equal(1, [1,2,3].findReplace(2, '2'));
		})

		it('should return 0 if CHAR is not found', function(){
			assert.equal(0, [1,2,3].findReplace('not here', 'jk'))
		})
	})


	describe('#findReplaceAll()', function(){
		it('should replace all instances of CHAR with REPLACEMENT', function(){
			replaced = [1,2,2,2,1];
			replaced.findReplaceAll(2, '2');
			assert.deepEqual([1,'2','2','2',1], replaced);
		})

		it('should return the number of items replaced', function(){
			assert.equal(3, [1,2,2,2,1].findReplaceAll(2, '2'))
		})

		it('should return 0 if no items are replaced', function(){
			assert.equal(0, [1,2,2,2,1].findReplaceAll('not here', 'jk'))
		})
	})
})


describe('Sudoku', function(){
	var puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
	              [ 2,7,1,9,6,3,4,8,5 ],
	              [ 4,6,3,5,8,1,7,9,2 ],
	              [ 9,3,4,6,1,7,2,5,8 ],
	              [ 5,1,7,2,3,8,9,6,4 ],
	              [ 6,8,2,4,5,9,3,7,1 ],
	              [ 1,5,9,8,7,4,6,2,3 ],
	              [ 7,4,6,3,2,5,8,1,9 ],
	              [ 3,2,8,1,9,6,5,4,7 ]];

	describe('#getRow()', function(){

	})

	describe('#getCol()', function(){

	})

	describe('#getSect()', function(){

	})

	describe('#setVal()', function(){

	})

	describe('#toString()', function(){
		
	})
})








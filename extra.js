*
8 9 5 | 7 4 2 | 1 3 6
2 7 _ | 9 6 3 | 4 8 5
_ _ 3 | 5 8 1 | 7 9 2
---------------------
9 3 4 | 6 1 7 | 2 5 8
5 1 7 | 2 3 8 | 9 6 4
6 8 2 | 4 5 9 | 3 7 1
---------------------
1 5 9 | 8 7 4 | 6 2 3
7 4 6 | 3 2 5 | 8 1 9
3 2 8 | 1 9 6 | 5 4 7
*/


var puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

puz = new Sudoku(puzzle);
console.log(puz.toString())

/*
This chunk of code checks if the Sudoku is solved
*/

/*

// Checks if an array includes the numbers 1 to 9
function includes1to9(arr){
    for(var i=1; i<=9; i++){
        if( !(arr.indexOf(i) + 1) ){
            return false;
        }
    }
    return true;
}

// Checks if each puzzle chunk selected by f is valid (e.g. all the rows contain 1 to 9, or all the sections contain 1 to 9)
function allChunksValid(grid, f){
    return !grid.map( (_, i) => includes1to9( f(grid, i) ) )
                .filter( val => !val )
                .length;
}

// Checks if the full puzzle is valid
function sudokuIsValid(grid){
    return allChunksValid(grid, getRow) && 
           allChunksValid(grid, getCol) && 
           allChunksValid(grid, getSect);
}

var puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

console.log(sudokuIsValid(puzzle));
// => true

var p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

console.log(sudokuIsValid(p8zzle));
// => false

/* 
This section of code attempts to solve an unsolved Sudoku 
*/

/*
// Returns an array of the numbers 1 to 9 that are missing from the input array
function missingVals1to9(arr){
    var results = [];
    for(var i=1; i<=9; i++){
        if( !(arr.indexOf(i) + 1) ){
            missingVals.push(i);
        }
    }
    return results;
}

// Returns an array of values that the two arrays have in common
function commonVals2(arr1, arr2){
    return arr1.filter( val => arr2.includes(val) );
}

// Returns an array of values that the three arrays have in common
function commonVals3(arr1, arr2, arr3){
    return commonVals2(commonVals2(arr1, arr2), arr3)
}

console.log(commonVals2([2,4,6,8], [1,3,5,9])) // []
console.log(commonVals2([2,4,6,8], [1,3,5,8])) // [8]
console.log(commonVals3([2,4,6,8], [1,3,5,8], [1,3,6,7])) // []
console.log(commonVals3([2,4,6,8], [1,4,5,8], [1,3,6,4,8])) // [4,8]


*/








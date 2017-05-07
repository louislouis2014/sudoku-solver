var puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

// index.js defines all my objects and basic utility functions
class Sudoku {
    constructor( grid ){
        this.grid = grid;
    }

    // 0 indexed
    getRow( row ){
        return this.grid[ row ];
    }

    getCol( col ){
        return this.grid.map( row => row[ col ] );
    }

    getSect( x, y ){
        if( !y ){
            y = Math.floor(x / 3) + 1;
            x = x % 3;
        }
        return this.grid
                .slice( 3*(y-1), 3*y )
                .map( row => row.slice( 3*(x-1), 3*x ))
                .reduce( (sect, row) => sect.concat(row), [])
    }

    getPos( row, col ){
        return this.grid[ row ][ col ];
    }

    setPos( row, col, val ){
        this.grid[ row ][ col ] = val;
        return this.getPos( row, col );
    }

    find( val ){
        let x, y;
        let i=0;
        console.log(i)
        while( !x ){
            console.log(i)
            if( this.grid[ i ].includes( val ) ){
                y = i;
                x = this.grid[ i ].indexOf( val );
            }
            i++;
        }
        return [x, y];
    }

    findAll( val ){
        // code here
    }
}

var puz = new Sudoku(puzzle);


Sudoku.prototype.toString = function(){
    var strGrid = this.grid
    
    // replace nulls with _
    strGrid = strGrid.map( row => 
                row.map( val => 
                    {if(!val){return '_'} return val;}))
    
// Grid Object
class Grid {
    constructor(x, y, val = null){
        this.rows = y;
        this.cols = x;
        this.grid = Array.from( Array(y), row => Array.from( Array(x), pos => val ) );
    }
}

    // 0 indexed
    getRow( row ){
        // code here
    }

    // 0 indexed
    getCol( col ){
        // code here
    }

    // 0 indexed
    getSect( topLeft, botRight ){
        // code here
    }

    getPos( x, y ){
        // code here
    }

    setPos( x, y ){
        // code here
    }

    toString(){
        // code here
    }
}


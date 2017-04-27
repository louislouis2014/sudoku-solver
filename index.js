// index.js defines all my objects and basic utility functions

// Utility functions
function repeat(char, num){
    if(num === 1){
        return char;
    }
    return char + repeat(char, num-1)
}

// Exensions to Array Object
Array.prototype.findReplace = function(char, replacement){
    if(this.indexOf(char) !== -1){
        this[ this.indexOf(char) ] = replacement;
        return 1;
    }
    return 0;
}

Array.prototype.findReplaceAll = function(char, replacement, cntr=0){
    if(this.indexOf(char) !== -1){
        this[this.indexOf(char)] = replacement;
        return this.findReplaceAll(char, replacement, cntr+1);
    }
    return cntr;
}

// Sudoku Object
function Sudoku(grid){
    this.grid = grid;
}

Sudoku.prototype.getRow = function(row){
    return this.grid[row-1];
}

Sudoku.prototype.getCol = function(col){
    return this.grid.map( row => row[col] );
}

Sudoku.prototype.getSect = function(x, y){
    if( !y ){
        y = Math.floor(x / 3);
        x = x % 3;
    }
    return grid.slice( 3*y, 3*(y+1) )
              .map( row => row.slice( 3*x, 3*(x+1) ))
              .reduce( (sect, row) => sect.concat(row), [])    
}

Sudoku.prototype.getPos = function(row, col){
    return this.grid[row-1][col-1];
}

Sudoku.prototype.setVal = function(row, col, val){
    this.grid[row-1][col-1] = val;
}

Sudoku.prototype.toString = function(){
    var strGrid = this.grid
    
    // replace nulls with _
    strGrid = strGrid.map( row => 
                row.map( val => 
                    {if(!val){return '_'} return val;}))
    
    
    // strGrid.forEach( row => row.splice(3, 0, '|') );
    // strGrid.forEach( row => row.splice(7, 0, '|') );
    // strGrid = strGrid.map( row => row.join(' ') );

    //strGrid.splice(3, 0, repeat('-'.));
    //strGrid.splice(7, 0, lnRow);
    
    return strGrid;
}

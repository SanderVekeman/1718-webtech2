let boardSize = 8;

let board = ' ';

/**loop **/


// y-as
for(let y = 0; y < boardSize; y++) {


    // x-as
    for(let x = 0; x <boardSize; x++) {
        

        let rest = ( ( x + y ) % 2 )


        // som van x en y is deelbaar door 2
        // --> zwart
        if(rest == 0) {
            board += '#';
        }
        // anders wit
        
        else {
            board += ' ';
        }





    }

    board += "\n";

}


console.log(board);
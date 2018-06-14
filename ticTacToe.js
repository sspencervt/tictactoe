let turnCount = 1
let currentPlayer = 'X'

let game = {

    board: {
        wireFrame : [1 , 2 , 3, 4 , 5, 6, 7, 8, 9]  
    },
    
    
}

function promptPlayer() {
    
    console.log('Player ' + currentPlayer + ' choose a position')
    
    process.stdin.once('data', (userInput) => {
    
        let userValue = userInput.toString().trim();

        
        
        // if (userValue === board.wireFrame[0]) {
        //     let userValue = board.wireFrame[0];
        //     return userValue.board.wireFrame(currentPlayer)
        // }

        printBoard(game.board)
       promptPlayer()
    
    });
}


function printBoard(board) {

    console.log(` ${board.wireFrame[0]} | ${board.wireFrame[1]} | ${board.wireFrame[2]} `)
    console.log(`------------`)
    console.log(` ${board.wireFrame[3]} | ${board.wireFrame[4]} | ${board.wireFrame[5]} `)
    console.log(`------------`)
    console.log(` ${board.wireFrame[6]} | ${board.wireFrame[7]} | ${board.wireFrame[8]} `)
}


printBoard(game.board)
promptPlayer();






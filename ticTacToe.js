

let game = {

    board: [1 , 2 , 3, 4 , 5, 6, 7, 8, 9],  
    turnCount: 0,
    currentPlayer: 'X'
}

function promptPlayer() {
    
    console.log('Player ' + game.currentPlayer + ' choose a position')
    
    process.stdin.once('data', (userInput) => {
    
        let userValue = userInput.toString().trim();

        let userIndex = userValue - 1

        game.board[userIndex] = game.currentPlayer
        game.turnCount++

        if (game.currentPlayer === 'X') {
            game.currentPlayer = 'O'
        }
        else {
            game.currentPlayer = "X"
        }

        // console.log('userValue: ' + userValue)
        // console.log('currentPlayer: ' + game.currentPlayer)
        
        // if (userValue === board[0]) {
        //     let userValue = board[0];
        //     return userValue.board(currentPlayer)
        // }

        printBoard(game.board)
       promptPlayer()
    
    });
}


function printBoard(board) {

    console.log(` ${board[0]} | ${board[1]} | ${board[2]} `)
    console.log(`------------`)
    console.log(` ${board[3]} | ${board[4]} | ${board[5]} `)
    console.log(`------------`)
    console.log(` ${board[6]} | ${board[7]} | ${board[8]} `)
}


printBoard(game.board)
promptPlayer();






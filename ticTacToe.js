

let game = {

    board: [1 , 2 , 3, 4 , 5, 6, 7, 8, 9],  
    turnCount: 0,
    currentPlayer: 'X'
}

function promptPlayer() {
    
    console.log('Player ' + game.currentPlayer + ' choose a position')
    
    process.stdin.once('data', (userInput) => {
    
        let userValue = parseInt(userInput.toString().trim());

        let userIndex = userValue - 1
        console.log(userValue)

        //validation against user not putting in 1-9

        if (game.board.indexOf(userValue) === -1) {
            console.log('Please pick a number between 1-9')
            return promptPlayer()
        }

        //validation against a user trying to use a space thats already been occupied

        if (game.board[userIndex] === 'X' || game.board[userIndex] === 'O') {
            console.log('Someone has already played this space, please choose another.')
            return promptPlayer()
        }

        //

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






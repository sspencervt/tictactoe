

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

        //console.log(userValue)

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

        //Update game board with latest move
        game.board[userIndex] = game.currentPlayer
        
        let gameHasBeenWon = detectWinState(game.board, game.currentPlayer)
    
      
            // game.board[userIndex] = game.currentPlayer

            if(gameHasBeenWon){

                console.log(game.currentPlayer + ' wins!')
                process.exit()
            }
            else {

                if (game.currentPlayer === 'X') {
                    game.currentPlayer = 'O'
                }
                else {
                    game.currentPlayer = "X"
                }
            
        
                game.turnCount++
    
      
                //determining if there is a draw
    
                if (game.turnCount === 9) {
                    console.log('It is a Draw!!')
                    process.exit()
                }
        
                printBoard(game.board)
                promptPlayer()

        }


    
    });
}

 //determining if there is a win
 //this function should interact with game.board and game.currentPlayer

function detectWinState(board, currentPlayer){

    // console.log(board[0] + ' ' + board[1] + ' ' + board[2] + ' -- ' + currentPlayer)
    
    if (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer){
        return true
    }

    return false

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








let game = {

    board: [1 , 2 , 3, 4 , 5, 6, 7, 8, 9],  
    turnCount: 0,
    currentPlayer: 'X',
    playerOne: '',
    playerTwo: '',
}

function gatherNames() {
    console.log('Enter player X name')
    process.stdin.once('data', (firstUserInput) => {
        game.playerOne = firstUserInput.toString().trim()
            console.log('Enter player O name')
            process.stdin.once('data', (secondUserInput) => {
                game.playerTwo = secondUserInput.toString().trim()
                printBoard(game.board)    
                promptPlayer()
            })
        
    });
}


function promptPlayer() {
    
    let playername = ''
    if (game.currentPlayer === 'X') {
        playername = game.playerOne
    } else {
        playername = game.playerTwo
    }

    console.log('Player ' + playername + ' choose a position')
    
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

                console.log(playername + ' wins!')
                process.exit()
            }
            else {

                if (game.currentPlayer === 'X') {
                    game.currentPlayer = 'O'
                }
                else {
                    game.currentPlayer = 'X'
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

    if (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer){
        return true
    }

    if (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer){
        return true
    }

    if (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer){
        return true
    }

    if (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer){
        return true
    }

    if (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer){
        return true
    }

    if (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer){
        return true
    }

    if (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer){
        return true
    }

    //board[3], board[4], board[5]

    //board[6], board[7], board[8]

    //board[0], board[3], board[6]

    //board[1], board[4], board[7]

    //board[2], board[5], board[8]

    //board[0], board[4], board[8]

    //board[2], board[4], board[6]

    return false

}

function printBoard(board) {

    console.log(` ${board[0]} | ${board[1]} | ${board[2]} `)
    console.log(`------------`)
    console.log(` ${board[3]} | ${board[4]} | ${board[5]} `)
    console.log(`------------`)
    console.log(` ${board[6]} | ${board[7]} | ${board[8]} `)
}

gatherNames()
// // printBoard(game.board)
// promptPlayer();






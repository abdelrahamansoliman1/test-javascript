function getComputerMove() {
        const randomNumber = Math.random();
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          return 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          return 'paper';
        } else {
          return 'scissors';
        }
      }

      function playGame(playerMove) {
        const computerMove = getComputerMove();
        let result = '';

        if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else {
            result = 'You win.';
          }
        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else {
            result = 'You lose.';
          }
        } else if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else {
            result = 'Tie.';
          }
        }

        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
      }
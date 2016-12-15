var gameOver = false

var grid = [0, 0, 0,
            0, 0, 0,
            0, 0, 0]

var player = 1

function playTurn(index) {
  console.log(player);
  if(isGameOver () === true) {
    // alert("Game is over")
    return false
  } else if (grid[index] !== 0) {
    // alert("Cannot make move")
    return false
  } else if (grid[index] === 0 ) {
    grid[index] = player
    if (player === 1) {
      player = 2
      // alert("player 2 has the turn now");
    } else {
      player = 1
      // alert("player 1 has the turn now");
    }
    return true
  }
}


// function isGameOver () {
//   if ( whoWon() !== 0 || whoWon() === 2 || whoWon() === 1) {
//     return true
//   } else if (whoWon() === 3) {
//     return true
//   } else {
//     return false
//   }
// }

function isGameOver () {
  if (whoWon()===1) {
    alert("Congrats. Player 1 has won");
    return true;
  } else if (whoWon()===2) {
    alert("Congrats. Player 2 has won");
    return true;
  } else if (whoWon()===3) {
    alert("Game Over. It is a draw");
    return true;
  } else {
    return false;
  }
}

function whoWon() {
  console.log(grid);
  if ((grid[3] === grid[4]) && (grid[4] === grid[5])) {
    return grid[3]
  } else if ((grid[0] === grid[1]) && (grid[1] === grid[2])) {
    return grid[0]
  } else if ((grid[6] === grid[7]) && (grid[7] === grid[8])){
    return grid[6]
  } else if ((grid[0] === grid[4]) && (grid[4] === grid[8])){
    return grid[0]
  } else if ((grid[2] === grid[4]) && (grid[4] === grid[6])){
    return grid[2]
  } else if ((grid[0] === grid[3]) && (grid[3] === grid[6])){
    return grid[0]
  } else if ((grid[1] === grid[4]) && (grid[4] === grid[7])){
    return grid[1]
  } else if ((grid[2] === grid[5]) && (grid[5] === grid[8])){
    return grid[2]
  }

  for (var i=0; i<grid.length-1; i++) {
    if (grid[i] === 0) {
      return 0
    }
  }
  return 3
  }

function restart () {
  // grid = [0,0,0,0,0,0,0,0,0]
  grid.fill(0)
  player = 1
  console.log("test");
  $(".box").removeClass("red")
  $(".box").removeClass("blue")
  $(".box").html(" ")
}

$(".button").click(function() {
  restart();
})

$("#boxOne").click(function() {
  if (player === 1) {
  $(this).addClass("red");
  $(this).html("X");
  $("#message").html("It is O's turn");
} else {
  $(this).addClass("blue");
  $(this).html("O");
  $("#message").html("It is X's turn");
  }
  // isGameOver();
  playTurn(0);
})

$("#boxTwo").click(function() {
  if (player === 1) {
  $(this).addClass("red");
  $(this).html("X");
  $("#message").html("It is O's turn");
} else {
  $(this).addClass("blue");
  $(this).html("O");
  $("#message").html("It is X's turn");
  }
  // isGameOver();
  playTurn(1);
})

$("#boxThree").click(function() {
  if (player === 1) {
  $(this).addClass("red");
  $(this).html("X");
  $("#message").html("It is O's turn");
} else {
  $(this).addClass("blue");
  $(this).html("O");
  $("#message").html("It is X's turn");
  }
  // isGameOver();
  playTurn(2);
})

$("#boxFour").click(function() {
  if (player === 1) {
  $(this).addClass("red");
  $(this).html("X");
  $("#message").html("It is O's turn");
} else {
  $(this).addClass("blue");
  $(this).html("O");
  $("#message").html("It is X's turn");
  }
  // isGameOver();
  playTurn(3);
})

$("#boxFive").click(function() {
  if (player === 1) {
  $(this).addClass("red");
  $(this).html("X");
  $("#message").html("It is O's turn");
} else {
  $(this).addClass("blue");
  $(this).html("O");
  $("#message").html("It is X's turn");
  }
  // isGameOver();
  playTurn(4);
})

$("#boxSix").click(function() {
  if (player === 1) {
  $(this).addClass("red");
  $(this).html("X");
  $("#message").html("It is O's turn");
} else {
  $(this).addClass("blue");
  $(this).html("O");
  $("#message").html("It is X's turn");
  }
  // isGameOver();
  playTurn(5);
})

$("#boxSeven").click(function() {
  if (player === 1) {
  $(this).addClass("red");
  $(this).html("X");
  $("#message").html("It is O's turn");
} else {
  $(this).addClass("blue");
  $(this).html("O");
  $("#message").html("It is X's turn");
  }
  // isGameOver();
  playTurn(6);
})

$("#boxEight").click(function() {
  if (player === 1) {
  $(this).addClass("red");
  $(this).html("X");
  $("#message").html("It is O's turn");
} else {
  $(this).addClass("blue");
  $(this).html("O");
  $("#message").html("It is X's turn");
  }
  // isGameOver();
  playTurn(7);
})

$("#boxNine").click(function() {
  if (player === 1) {
  $(this).addClass("red");
  $(this).html("X");
  $("#message").html("It is O's turn");
} else {
  $(this).addClass("blue");
  $(this).html("O");
  $("#message").html("It is X's turn");
  }
  // isGameOver();
  playTurn(8);
})

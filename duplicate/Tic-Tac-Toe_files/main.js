var gameOver = false
// var grid = [0,0,0,
//             0,0,0,
//             0,0,0]
var grid = [0, 0, 0,
            0, 0, 0,
            0, 0, 0]
var player = 1
// simulateGame('P1 Top Row Victory', [0, 3, 1, 4, 2], playerOne)
// index refers to the position in the grid u want to go to
// assuming player 1 starts first always
function playTurn(index) {
  console.log("playTurn");
  if(isGameOver () === true) {
    return false
  } else if (grid[index] !== 0) {
    return false
  } else if (grid[index] === 0 ) {
    grid[index] = player
    if (player === 1) {
      player = 2
    } else if (player ===2) {
      player = 1
    }
    return true
  }
}


function isGameOver () {
  if ( whoWon() !== 0 || whoWon() === 2 || whoWon() === 3 || whoWon() === 1) {
    return true
    // alert("Game is over. Player" + player + " has won.")
  } else {
    return false
  }
}

// var winner = $(".box").click(function() {
//   alert("Game is over. Player " + player + " has won." )
// })
// simulateGame('P1 Top Row Victory', [0, 3, 1, 4, 2], playerOne)
// function allTaken(elem) {
//   return elem !== 0
//   }

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

  for (var i=0; i<grid.length; i++) {
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
  $("#boxOne").addClass("white")
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
  playTurn(8);
})

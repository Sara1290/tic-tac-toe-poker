const game = [];

function play(clickedId){
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId)

    if (playerSpan.innerText === 'X') {
            playerSpan.innerText === 'O';
            clickedElement.innerText = 'X';
            game[clickedId] = 'X';
    } else {
            playerSpan.innerText = 'X';
            clickedElement.innerText = 'O';
            game[clickedId] = 'O';
        }
        console.log(game);

        const tL = game[0];
        const tM = game[1];
        const tR = game[2];
        const mL = game[3];
        const mi = game[4];
        const mR = game[5];
        const bL = game[6];
        const bM = game[7];
        const bR = game[8];

        if (tL !== undefined && tL === tM && tL === tR) {  //TOP HORIZONTAL WIN FOR WHOEVER OCCUPIED tL//
            alert(`${tL} is the winner`);
            return;
          }

        if (mL !== undefined && mL === mi && mL === mR) { //MIDDLE HORIZONTAL WIN FOR WHOEVER OCCUPIED mL//
            alert(`${mL} is the winner`);
            return;
          }

        if (bL !== undefined && bL === bM && bL === bR) { //BOTTOM HORIZONTAL WIN FOR WHOEVER OCCUPIED bL//
            alert(`${bL} is the winner`);
            return;
          }

        if (tl !== undefined && tL === mL && tL === bL) { //vertical win left 
            alert(`${tL} is the winner`);
            return;
              }

        if (tM !== undefined && tM === mi && tM === bM) { //vertical win center
            alert(`${tM} is the winner`);
            return;
              }

        if (tR !== undefined && tR === mR && tR === bR) { //vertical win for right
            alert(`${tR} is the winner`);
            return;
              }

        if (tL !== undefined && tL === mi && tL === bR) { //diagonal win 0, 4, 8
            alert(`${tL} is the winner`);
            return;
              }

        if (bL !== undefined && bL === mi && bL === tR) { //diagonal win 6, 4, 2
            alert(`${bL} is the winner`);
            return;
              }


              let gameFull = true;
              for (let i = 0; i <= 8; i++) {
                if (game[i] === undefined) {
                  gameFull = false;
                }
              }
              if (gameFull === true) {
                alert("Cat's game, there is no winner");
              }
            
    }




  
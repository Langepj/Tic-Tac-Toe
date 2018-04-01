var field = ["", "", "", "", "", "", "", "", ""];
var corners = [0, 2, 6, 8];
var edges = [1, 3, 5, 7];
        
function  checkX(char){
    var count = 0;
    for(var i = 0;  i <= 6; i+= 3){
        for(var j = 0; j < 3; j++){
            if(field[i + j] == char){
                count++;
            }
            else count = 0;

            if ( count == 3){
                    window.alert(char + " WINS!");
                    location.reload();
            }
        }
        count = 0;
    }
}

function checkY(char){
    var count = 0;
    for( j = 0; j < 3; j++){
        for( i = 0;  i <= 6; i+= 3){
            if(field[i + j] == char){
                count++;
            }

            if ( count == 3){
                    window.alert(char + " WINS!");
                    location.reload();
            }
        }
        count = 0;
    }
}

function checkDiagonal(char){
    var count = 0;
    for( i = 2;  i <= 6; i += 2){
        if(field[i] == char){
            count++;
        }
        if ( count == 3){
                window.alert(char + " WINS!");
                location.reload();
        }
    }
    count = 0;
    for( i = 0;  i <= 8; i+= 4){
        if(field[i] == char){
            count++;
        }
    if ( count == 3){
            window.alert(char + " WINS!");
            location.reload();
        }
    }
}
        
function  checkfield(char){
    checkX(char);
    checkY(char);
    checkDiagonal(char);
    var count = 0;
    for(i = 0; i <9; i++){
        if(field[i] == "X" || field[i] == "O" )
            count++;
        if(count == 9){
        window.alert("A strange game. The only winning move is not to play.!");
        location.reload();
        }
    }

}

        
function computerTurn(){
    //TODO: Make it smarter.
    if( field[4] == ""){
        field[4] = "O";
        return;
    }
    
    for(i =0; i<4; i++){
        if(field[corners[i]] == ""){
            field[corners[i]]= "O";
            return;
        }
    }

    for(i = 0; i<4; i++){
        if(field[edges[i]] == ""){
            field[edges[i]] = "O";
            return;
        }
    }
    return;
}
        
function updateCells(){
    for(i = 0; i < 9;i++){
        document.getElementById(i).innerHTML = field[i];
    }
}

function startTurn(cell){
    if(field[cell.id] == ""){
        field[cell.id] = "X";
        updateCells();
        checkfield("X");                
    } 
    else{ return;}
    computerTurn();
    setTimeout(updateCells(), 500);

    checkfield("O")
}
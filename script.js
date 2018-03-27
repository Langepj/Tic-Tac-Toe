        var field = ["", "", "", "", "", "", "", "", ""];
        var corners = [0, 2, 6, 8];
        var edges = [1, 3, 5, 7];
        
        function  checkfield(char){
            // TODO: Set Game state (stop play continuing after win)
            //       Add Diagonal checking, break into smaller functions.         
            var countX = 0;
            var countY = 0;
            
            for(var i = 0;  i <= 6; i+= 3){
                for(var j = 0; j < 3; j++){
                    if(field[i + j] == char){
                        countX++;
                    }
                    else countX = 0;

                    if ( countX == 3){
                         window.alert(char + " WINS!");
                         return true;
                    }
                }
                countX = 0;
            }

            for(var j = 0; j < 3; j++){
                for(var i = 0;  i <= 6; i+= 3){
                    if(field[i + j] == char){
                        countY++;
                    }
                    else countY = 0;

                    if ( countY == 3){
                         window.alert("WIN!");
                         return true;
                    }
                }
                countY = 0;
            }
            return false;
        }

        
        function computerTurn(){
           //TODO: Make it smarter.
            if( field[4] == ""){
                field[4] = "O";
                updateCells();
                return;
            }
            else{
                for(i =0; i<4; i++){
                    if(field[corners[i]] == ""){
                        field[corners[i]]= "O";
                        updateCells();
                        return;
                    } 
                }
            }

            for(i =0; i<4; i++){
                    if(field[edges[i]] == ""){
                        field[edges[i]] = "O";
                        updateCells();
                        return;
                    } 
                }
        }
        
        function updateCells(){
            for(i = 0; i < 9;i++){
                document.getElementById(i).innerHTML = field[i];
            }
        }

        function startTurn(cell){
            if(cell.innerHTML == ""){
                field[cell.id] = "X";                
            }
            else return;
            updateCells();
            if(checkfield("X") == false){
                computerTurn();
                checkfield("O");
            }
        }
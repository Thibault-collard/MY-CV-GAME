//Try to implement automatic completion of square when walking around but crash bug when walking at the bottom of the square
for (var i = 0; i < cols; i++) {
          for (var j = 0; j < rows; j++) {
            if(tab[i+1] != undefined || tab[i+2] != undefined ||tab[i+3]!= undefined || tab[i+4] != undefined ||
              tab[i+5]!= undefined || tab[i+6] != undefined ||tab[i+7]!= undefined || tab[i+8] != undefined || tab[i+9] != undefined){
                      
            if(tab[i][j+1]!= undefined || tab[i][j+2] != undefined ||tab[i][j+3]!= undefined || tab[i][j+4] != undefined ||
              tab[i][j+5]!= undefined || tab[i][j+6] != undefined ||tab[i][j+7]!= undefined || tab[i][j+8] != undefined || tab[i][j+9] != undefined){

              if(tab[i][j] == 3 && tab[i][j+1] == 3 && tab[i][j+2] == 3 && 
                tab[i][j] == 3 && tab[i+1][j] == 3 && tab[i+2][j] == 3 && tab[i+2][j] == 3
                 && tab[i+2][j+1] == 3 && tab[i+2][j+2] == 3){
                tab[i+1][j+1] = 3;
              }  
                else if(tab[i][j] == 3 && tab[i][j+1] == 3 && tab[i][j+2] == 3 &&
                   tab[i][j] == 3 && tab[i+1][j] == 3 && tab[i+2][j] == 3 && 
                   tab[i][j+3] == 3 && tab[i+1][j+3] == 3 && tab[i+2][j+3] == 3 && tab[i+3][j+3] == 3){
                  tab[i+1][j+1] = 3;
                  tab[i+1][j+2] = 3; 
                  tab[i+2][j+2] = 3; 
                  tab[i+2][j+1] = 3;
                }
                  else if(tab[i][j] == 3 && tab[i][j+1] == 3 && tab[i][j+2] == 3 && tab[i][j] == 3 &&
                    tab[i+1][j] == 3 && tab[i+2][j] == 3 && tab[i][j+3] == 3 && tab[i][j+4] == 3
                    && tab[i+1][j+4] == 3 && tab[i+2][j+4] == 3 && tab[i+3][j+4] == 3 &&
                     tab[i+4][j+3] == 3 && tab[i+4][j+2] == 3 && tab[i+4][j+1] == 3 && tab[i+4][j] == 3){
                    tab[i+1][j+1] = 3;
                    tab[i+1][j+2] = 3;
                    tab[i+1][j+3] = 3;
                    tab[i+2][j+3] = 3; 
                    tab[i+2][j+2] = 3; 
                    tab[i+2][j+1] = 3;
                    tab[i+3][j+1] = 3; 
                    tab[i+3][j+2] = 3; 
                    tab[i+3][j+3] = 3;
                  }   
                    else if(tab[i][j] == 3 && tab[i][j+1] == 3 && tab[i][j+2] == 3 && tab[i][j] == 3 
                      && tab[i+1][j] == 3 && tab[i+2][j] == 3 && tab[i][j+4] == 3 && tab[i][j+5] == 3 &&
                      tab[i+1][j+5] == 3 && tab[i+2][j+5] == 3 && tab[i+3][j+5] == 3 && tab[i+4][j+5] == 3 &&
                      tab[i+5][j+5] == 3 && tab[i+5][j+4] == 3 && tab[i+5][j+3] == 3 &&
                      tab[i+5][j+2] == 3 && tab[i+5][j+1] == 3 && tab[i+5][j] == 3
                    ){
                      tab[i+1][j+1] = 3;
                      tab[i+1][j+2] = 3;
                      tab[i+1][j+3] = 3;
                      tab[i+1][j+4] = 3;
                      tab[i+2][j+4] = 3;
                      tab[i+3][j+4] = 3;
                      tab[i+4][j+4] = 3;
                      tab[i+4][j+3] = 3;
                      tab[i+4][j+2] = 3;
                      tab[i+4][j+1] = 3;
                      tab[i+2][j+3] = 3; 
                      tab[i+2][j+2] = 3; 
                      tab[i+2][j+1] = 3;
                      tab[i+3][j+1] = 3; 
                      tab[i+3][j+2] = 3; 
                      tab[i+3][j+3] = 3;
                    } 
                      else if(tab[i][j] == 3 && tab[i][j+1] == 3 && tab[i][j+2] == 3 && tab[i][j] == 3 
                        && tab[i+1][j] == 3 && tab[i+2][j] ==3 && tab[i][j+5] == 3 && tab[i][j+6] == 3
                        && tab[i+1][j+6] == 3 && tab[i+2][j+6] == 3 && tab[i+3][j+6] == 3 && tab[i+4][j+6] == 3 &&
                        tab[i+5][j+6] == 3 && tab[i+6][j+6] == 3 && tab[i+6][j+5] == 3 &&
                        tab[i+6][j+4] == 3 && tab[i+6][j+3] == 3 && tab[i+6][j+2] == 3 && 
                        tab[i+6][j+1] == 3 && tab[i+6][j] == 3
                        ){
                        tab[i+1][j+1] = 3;
                        tab[i+1][j+2] = 3;
                        tab[i+1][j+3] = 3;
                        tab[i+1][j+4] = 3;
                        tab[i+1][j+5] = 3;
                        tab[i+2][j+5] = 3;
                        tab[i+3][j+5] = 3;
                        tab[i+4][j+5] = 3;
                        tab[i+5][j+5] = 3;
                        tab[i+5][j+4] = 3;
                        tab[i+5][j+3] = 3;
                        tab[i+5][j+2] = 3;
                        tab[i+5][j+1] = 3;
                        tab[i+2][j+4] = 3;
                        tab[i+3][j+4] = 3;
                        tab[i+4][j+4] = 3;
                        tab[i+4][j+3] = 3;
                        tab[i+4][j+2] = 3;
                        tab[i+4][j+1] = 3;
                        tab[i+2][j+3] = 3; 
                        tab[i+2][j+2] = 3; 
                        tab[i+2][j+1] = 3;
                        tab[i+3][j+1] = 3; 
                        tab[i+3][j+2] = 3; 
                        tab[i+3][j+3] = 3; 
                        }
                else if(tab[i][j] == 3 && tab[i][j+1] == 3 && tab[i][j+2] == 3 && tab[i][j] == 3 
                  && tab[i+1][j] == 3 && tab[i+2][j] == 3 && tab[i][j+5] == 3 && tab[i][j+6] == 3
                  && tab[i+1][j+6] == 3 && tab[i+2][j+6] == 3 && tab[i+3][j+6] == 3 &&
                  tab[i+4][j+6] == 3 && tab[i+5][j+6] == 3 && tab[i+6][j+6] == 3 && tab[i+6][j+5] == 3 &&
                  tab[i+6][j+4] == 3 && tab[i+6][j+3] == 3 && tab[i+6][j+2] == 3 && 
                  tab[i+6][j+1] == 3 && tab[i+6][j] == 3
                  ){
                  tab[i+1][j+1] = 3;
                  tab[i+1][j+2] = 3;
                  tab[i+1][j+3] = 3;
                  tab[i+1][j+4] = 3;
                  tab[i+1][j+5] = 3;
                  tab[i+2][j+5] = 3;
                  tab[i+3][j+5] = 3;
                  tab[i+4][j+5] = 3;
                  tab[i+5][j+5] = 3;
                  tab[i+5][j+4] = 3;
                  tab[i+5][j+3] = 3;
                  tab[i+5][j+2] = 3;
                  tab[i+5][j+1] = 3;
                  tab[i+2][j+4] = 3;
                  tab[i+3][j+4] = 3;
                  tab[i+4][j+4] = 3;
                  tab[i+4][j+3] = 3;
                  tab[i+4][j+2] = 3;
                  tab[i+4][j+1] = 3;
                  tab[i+2][j+3] = 3; 
                  tab[i+2][j+2] = 3; 
                  tab[i+2][j+1] = 3;
                  tab[i+3][j+1] = 3; 
                  tab[i+3][j+2] = 3; 
                  tab[i+3][j+3] = 3;
                  } 
                else if(tab[i][j] == 3 && tab[i][j+1] == 3 && tab[i][j+2] == 3 && tab[i][j] == 3
                  && tab[i+1][j] == 3 && tab[i+2][j] == 3 && tab[i][j+6] == 3 && tab[i][j+7] == 3 
                  && tab[i+1][j+7] == 3 && tab[i+2][j+7] == 3 && tab[i+3][j+7] == 3 && tab[i+4][j+7] == 3
                  && tab[i+5][j+7] == 3 && tab[i+6][j+7] == 3 && tab[i+7][j+7] && 
                  tab[i+7][j+6] == 3 && tab[i+7][j+5] == 3 && tab[i+7][j+4] == 3 && 
                  tab[i+7][j+3] == 3 && tab[i+7][j+2] == 3 && tab[i+7][j+1] == 3 &&
                  tab[i+7][j] == 3){
                  tab[i+1][j+1] = 3;
                  tab[i+1][j+2] = 3;
                  tab[i+1][j+3] = 3;
                  tab[i+1][j+4] = 3;
                  tab[i+1][j+5] = 3;
                  tab[i+1][j+6] = 3;
                  tab[i+2][j+6] = 3;
                  tab[i+3][j+6] = 3;
                  tab[i+4][j+6] = 3;
                  tab[i+5][j+6] = 3;
                  tab[i+6][j+6] = 3;
                  tab[i+6][j+5] = 3;
                  tab[i+6][j+4] = 3;
                  tab[i+6][j+3] = 3;
                  tab[i+6][j+2] = 3;
                  tab[i+6][j+1] = 3;
                  tab[i+2][j+5] = 3;
                  tab[i+3][j+5] = 3;
                  tab[i+4][j+5] = 3;
                  tab[i+5][j+5] = 3;
                  tab[i+5][j+4] = 3;
                  tab[i+5][j+3] = 3;
                  tab[i+5][j+2] = 3;
                  tab[i+5][j+1] = 3;
                  tab[i+2][j+4] = 3;
                  tab[i+3][j+4] = 3;
                  tab[i+4][j+4] = 3;
                  tab[i+4][j+3] = 3;
                  tab[i+4][j+2] = 3;
                  tab[i+4][j+1] = 3;
                  tab[i+2][j+3] = 3; 
                  tab[i+2][j+2] = 3; 
                  tab[i+2][j+1] = 3;
                  tab[i+3][j+1] = 3; 
                  tab[i+3][j+2] = 3; 
                  tab[i+3][j+3] = 3;
                  } 
                  else if(tab[i][j] == 3 && tab[i][j+1] == 3 && tab[i][j+2] == 3 && tab[i][j] == 3 &&
                    tab[i+1][j] == 3 && tab[i+2][j] == 3 && tab[i][j+7] == 3 && tab[i][j+8] == 3 &&
                    tab[i+1][j+8] == 3 && tab[i+2][j+8] == 3 && tab[i+3][j+8] == 3 && tab[i+4][j+8] == 3 &&
                    tab[i+5][j+8] == 3 && tab[i+6][j+8] == 3 && tab[i+7][j+8] && 
                    tab[i+8][j+8] && tab[i+8][j+7] == 3 && tab[i+8][j+6] == 3 && 
                    tab[i+8][j+5] == 3 && tab[i+8][j+4] == 3 && 
                    tab[i+8][j+3] == 3 && tab[i+8][j+2] == 3 && tab[i+8][j+1] == 3 &&
                    tab[i+8][j] == 3){
                      tab[i+1][j+1] = 3;
                      tab[i+1][j+2] = 3;
                      tab[i+1][j+3] = 3;
                      tab[i+1][j+4] = 3;
                      tab[i+1][j+5] = 3;
                      tab[i+1][j+6] = 3;
                      tab[i+1][j+7] = 3;
                      tab[i+2][j+7] = 3;
                      tab[i+3][j+7] = 3;
                      tab[i+4][j+7] = 3;
                      tab[i+5][j+7] = 3;
                      tab[i+6][j+7] = 3;
                      tab[i+7][j+7] = 3;
                      tab[i+7][j+6] = 3;
                      tab[i+7][j+5] = 3;
                      tab[i+7][j+4] = 3;
                      tab[i+7][j+3] = 3;
                      tab[i+7][j+2] = 3;
                      tab[i+7][j+1] = 3;
                      tab[i+2][j+6] = 3;
                      tab[i+3][j+6] = 3;
                      tab[i+4][j+6] = 3;
                      tab[i+5][j+6] = 3;
                      tab[i+6][j+6] = 3;
                      tab[i+6][j+5] = 3;
                      tab[i+2][j+5] = 3;
                      tab[i+3][j+5] = 3;
                      tab[i+4][j+5] = 3;
                      tab[i+5][j+5] = 3;
                      tab[i+5][j+4] = 3;
                      tab[i+5][j+3] = 3;
                      tab[i+5][j+2] = 3;
                      tab[i+5][j+1] = 3;
                      tab[i+2][j+4] = 3;
                      tab[i+3][j+4] = 3;
                      tab[i+4][j+4] = 3;
                      tab[i+4][j+3] = 3;
                      tab[i+4][j+2] = 3;
                      tab[i+4][j+1] = 3;
                      tab[i+2][j+3] = 3; 
                      tab[i+2][j+2] = 3; 
                      tab[i+2][j+1] = 3;
                      tab[i+3][j+1] = 3; 
                      tab[i+3][j+2] = 3; 
                      tab[i+3][j+3] = 3;
                      } 
                      else if(tab[i][j] == 3 && tab[i][j+1] == 3 && tab[i][j+2] == 3 && tab[i][j] == 3 &&
                         tab[i+1][j] == 3 && tab[i+2][j] == 3 && tab[i][j] == 3 && tab[i][j+1] == 3
                        && tab[i][j+2] == 3 && tab[i][j] == 3 && tab[i+1][j] == 3 && tab[i+2][j] == 3
                         && tab[i][j+8] == 3 && tab[i][j+9] == 3 && tab[i+1][j+9] == 3 && 
                        tab[i+2][j+9] == 3 && tab[i+3][j+9] == 3 && tab[i+4][j+9] == 3 &&
                        tab[i+5][j+9] == 3 && tab[i+6][j+9] == 3 && tab[i+7][j+9] && 
                        tab[i+8][j+9] == 3 && tab[i+9][j+9] == 3 && tab[i+9][j+8] == 3 &&
                        tab[i+9][j+7] == 3 && tab[i+9][j+6] == 3 && tab[i+9][j+5] == 3 && 
                        tab[i+9][j+4] == 3 && tab[i+9][j+3] == 3 && tab[i+9][j+2] == 3 && 
                        tab[i+9][j+1] == 3 && tab[i+9][j] == 3){
                                                    
                          tab[i+1][j+1] = 3;
                          tab[i+1][j+2] = 3;
                          tab[i+1][j+3] = 3;
                          tab[i+1][j+4] = 3;
                          tab[i+1][j+5] = 3;
                          tab[i+1][j+6] = 3;
                          tab[i+1][j+7] = 3;
                          tab[i+1][j+8] = 3;
                          tab[i+2][j+8] = 3;
                          tab[i+3][j+8] = 3;
                          tab[i+4][j+8] = 3;
                          tab[i+5][j+8] = 3;
                          tab[i+6][j+8] = 3;
                          tab[i+7][j+8] = 3;
                          tab[i+8][j+8] = 3;
                          tab[i+8][j+7] = 3;
                          tab[i+8][j+6] = 3;
                          tab[i+8][j+5] = 3;
                          tab[i+8][j+4] = 3;
                          tab[i+8][j+3] = 3;
                          tab[i+8][j+2] = 3;
                          tab[i+8][j+1] = 3;
                          tab[i+2][j+7] = 3;
                          tab[i+3][j+7] = 3;
                          tab[i+4][j+7] = 3;
                          tab[i+5][j+7] = 3;
                          tab[i+6][j+7] = 3;
                          tab[i+7][j+7] = 3;
                          tab[i+7][j+6] = 3;
                          tab[i+7][j+5] = 3;
                          tab[i+7][j+4] = 3;
                          tab[i+7][j+3] = 3;
                          tab[i+7][j+2] = 3;
                          tab[i+7][j+1] = 3;
                          tab[i+2][j+6] = 3;
                          tab[i+3][j+6] = 3;
                          tab[i+4][j+6] = 3;
                          tab[i+5][j+6] = 3;
                          tab[i+6][j+6] = 3;
                          tab[i+6][j+5] = 3;
                          tab[i+6][j+4] = 3;
                          tab[i+6][j+3] = 3;
                          tab[i+6][j+2] = 3;
                          tab[i+6][j+1] = 3;
                          tab[i+2][j+5] = 3;
                          tab[i+3][j+5] = 3;
                          tab[i+4][j+5] = 3;
                          tab[i+5][j+5] = 3;
                          tab[i+5][j+4] = 3;
                          tab[i+5][j+3] = 3;
                          tab[i+5][j+2] = 3;
                          tab[i+5][j+1] = 3;
                          tab[i+2][j+4] = 3;
                          tab[i+3][j+4] = 3;
                          tab[i+4][j+4] = 3;
                          tab[i+4][j+3] = 3;
                          tab[i+4][j+2] = 3;
                          tab[i+4][j+1] = 3;
                          tab[i+2][j+3] = 3; 
                          tab[i+2][j+2] = 3; 
                          tab[i+2][j+1] = 3;
                          tab[i+3][j+1] = 3; 
                          tab[i+3][j+2] = 3; 
                          tab[i+3][j+3] = 3;
                        }
                      
                          
                      }
                      }
                    }
                  }
// Try to implement automatic update of displaylife with heart icon but not refresh automatically
for(let k=0;k<=life;k++){
          
          var imgLife = document.createElement('img');
          imgLife.src = "like.svg";
          imgLife.id = "imgLife" + k;
          document.body.appendChild(imgLife);
          $('#imgLife' + k).css({"position":"fixed","width":"1.3%","margin-top":"-515px","margin-left":(1015+k*20) + "px"});
          
        
          setInterval(function(){
            if(life == k){
              $('#imgLife' + k).css("display","none")
            }
            
          },100);
        }
      }
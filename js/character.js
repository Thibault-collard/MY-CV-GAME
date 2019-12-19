window.onload = function(){
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext("2d");
  
  var cols = 10;
  var rows = 10;
  var size = 100;
  var tab = make2Darray(cols, rows);

  var numberofTree = 9;
  var numberofStar = 2;
  var numberofHeart = 1;
  var stepAnimateHeart = 0;
  var stepAnimateStar = 0;

  
  var life = 3;
  var step = 0;
  
  var masque = window.document.getElementById('container');
  var sprite = window.document.getElementById('contenu');

  var baisser = {
    baisse:[
      {
        largeurMasque: '54px',
        hauteurMasque: '62px',
        leftMasque: '777px',
        topDeImage: '-130px',
        leftDeImage: '289px'
      },{
        largeurMasque: '54px',
        hauteurMasque: '62px',
        leftMasque: '777px',
        topDeImage: '-130px',
        leftDeImage: '162px'
      }
    ]
  };

  var hautSaut = {
    saut:[
      {
        largeurMasque: '54px',
        hauteurMasque: '62px',
        leftMasque: '777px',
        topDeImage: '-4px',
        leftDeImage: '289px'
      },{
        largeurMasque: '54px',
        hauteurMasque: '62px',
        leftMasque: '777px',
        topDeImage: '-4px',
        leftDeImage: '161px'
      }
    ]
  };

  var retourne = {
    ret:[
      {
        largeurMasque: '54px',
        hauteurMasque: '62px',
        leftMasque: '777px',
        topDeImage: '-67px',
        leftDeImage: '289px'
      },{
        largeurMasque: '54px',
        hauteurMasque: '62px',
        leftMasque: '777px',
        topDeImage: '-67px',
        leftDeImage: '223px'
      }
    ]
  };

  var decompositionDuSprite = {
    perso: [{
        largeurMasque: '54px',
        hauteurMasque: '62px',
        leftMasque: '777px',
        topDeImage: '-195px',
        leftDeImage: '289px'
    },{
        largeurMasque: '54px',
        hauteurMasque: '62px',
        leftMasque: '777px',
        topDeImage: '-195px',
        leftDeImage: '219px'
    },{
        largeurMasque: '54px',
        hauteurMasque: '62px',
        leftMasque: '777px',
        topDeImage: '-195px',
        leftDeImage: '149px'
    },{
        largeurMasque: '54px',
        hauteurMasque: '62px',
        leftMasque: '777px',
        topDeImage: '-195px',
        leftDeImage: '79px'
    }]
};
    

                sprite.style.left = decompositionDuSprite.perso[0].leftDeImage;
                masque.style.left = decompositionDuSprite.perso[0].leftMasque;
                masque.style.width = decompositionDuSprite.perso[0].largeurMasque;
                masque.style.height = decompositionDuSprite.perso[0].hauteurMasque;
                sprite.style.top = decompositionDuSprite.perso[0].topDeImage;

    var i = 0;
    var j = 0;
    var counterLR = 0;
    var counterUD = 0;
    
    window.onkeyup = function(event){
      
      var code = event.keyCode;
      let posL = masque.style.left;
      let posT = masque.style.top;
      console.log(score);
      switch(code){
        case 37:
         //gauche
          sprite.style.top = retourne.ret[0].topDeImage;

          posL = parseFloat(posL) - 30;
          if(posL > 747){
            masque.style.left = posL + "px";
          }

          if(j > 0){
            counterLR--;
            j = counterLR;
            tab[i][j] = calculateAndApplyColor(i,j);
            console.log("après gauche tab["+i+"]["+j+"] = "+ tab[i][j]);
          }
            
          setTimeout(function(){     
            sprite.style.left = retourne.ret[0].leftDeImage;
          },300)
          sprite.style.left = retourne.ret[1].leftDeImage;
        break;

        case 38:
          //haut
          sprite.style.top = hautSaut.saut[1].topDeImage;
          sprite.style.left = hautSaut.saut[1].leftDeImage;
          
          posT = parseFloat(posT) - 30;
            if(posT > 345){
              masque.style.top = posT + "px";
            }
            if(i > 0){
              counterUD--;
              i = counterUD;
              tab[i][j] = calculateAndApplyColor(i,j);
              console.log("après haut tab["+i+"]["+j+"] = "+ tab[i][j]);
            }

          setTimeout(function(){
            sprite.style.top = hautSaut.saut[0].topDeImage;
            sprite.style.left = hautSaut.saut[0].leftDeImage;
          },500)
          
        break;
        case 39:
          // droite         
          
          sprite.style.top = decompositionDuSprite.perso[0].topDeImage;
          
          posL = parseFloat(posL) + 30 ;
          if(posL < 1077){
            masque.style.left = posL + "px";
          }
          
          if(j < 9){
            counterLR++;
            j = counterLR;
            tab[i][j] = calculateAndApplyColor(i,j);
            console.log("après droite tab["+i+"]["+j+"] = "+ tab[i][j]);
          }
          //console.log(j);
          setTimeout(function(){
            sprite.style.left = decompositionDuSprite.perso[0].leftDeImage;
          },300)
          sprite.style.left = decompositionDuSprite.perso[1].leftDeImage;
          
        break;
        case 40:
          //bas
          masque.style.width = baisser.baisse[0].largeurMasque;
          masque.style.height = baisser.baisse[0].hauteurMasque;
          sprite.style.top = baisser.baisse[0].topDeImage;

          posT = parseFloat(posT) + 30;
          if(posT < 675){
            masque.style.top = posT + "px";
          }

          if(i < 9){
            counterUD++;
            i = counterUD;
            tab[i][j] = calculateAndApplyColor(i,j);
            console.log("après bas tab["+i+"]["+j+"] = "+ tab[i][j]);
          }

          setTimeout(function(){
            sprite.style.left = baisser.baisse[0].leftDeImage;
          },300)
          sprite.style.left = baisser.baisse[1].leftDeImage;

          
        break;
        };
      };
      
      // Create 2D array where the hero will move during the game
      function make2Darray(cols, rows) {
        var arr = new Array(cols);
        
        for (var i = 0; i < arr.length; i++) {
          arr[i] = new Array(rows);
        }
        return arr;
      } 
      // Introduce global canvas to draw the stroke and the rectangle
      function draw() { 
        for (var i = 0; i < cols; i++) {
          for (var j = 0; j < rows; j++) {

            var x = i * 30;
            var y = j * 30;
            ctx.rect(x, y, 30, 30);
          }
        //tab[i][j] = calculateAndApplyColor(i,j);
        ctx.stroke();
        ctx.strokeStyle = "lightgrey";
        }
        console.log('carré dessiné');
    }
      
      // When the hero move, colors of squares change and you win some points
      // z-index allow us to see the hero when he's loosing his life, not behind the tree or the yeti
      function calculateAndApplyColor(i,j){
        var result = tab[i][j];
        var color1 = "grey";
        var color2 = "lightblue";
        var color3 = "blue";
        var color4 = "rgb(138,3,3)";
        
        if( tab[i][j] === undefined){
          score++;
          result = 1;
          ctx.fillStyle = color1;
          $('#container').css('z-index','1');
        }
        
        else if( tab[i][j] === 1){
          score++;
          result = 2;
          ctx.fillStyle = color2;
          $('#container').css('z-index','1');
        }
        else if(tab[i][j] === 4){
          score++;
          result = 4;
          ctx.fillStyle = color4;
          life--;
          $('#container').css('z-index','3');
          setTimeout(function(){
            setInterval(function(){
              
              $('#container').show();
              
            },100)
            
            $('#container').hide();
          },300)
          if(life == 0){
            looseWindow();
          }
        }

        else{
          result = 3;
          if(tab[i][j] != 3){
            score++;
          }
          ctx.fillStyle = color3;
          $('#container').css('z-index','1');
        } 
   
        var k = parseFloat(masque.style.left) - 777;
        var v = parseFloat(masque.style.top) - 375;
        ctx.fillRect(k,v,29,29);
        
        return result;
      }
      
      // Initialize the heart element : Catch them, win lifes
      function createHeart(){
        for (let i = 1; i <= numberofHeart; i++) {
          var imgHeart = document.createElement('img');
          imgHeart.src="./img/like.svg";
          imgHeart.id ="like" + i;
          
          imgHeart.style="position:absolute;z-index:0;"
          document.body.appendChild(imgHeart);
        }
      }
      
      // Initialize the star element : Catch them, win points
      function createStarBonus(){
        for (let i = 1; i <= numberofStar; i++) {
          var imgStr = document.createElement('img');
          imgStr.src="./img/star.png";
          imgStr.id ="star" + i;
          imgStr.style="position:absolute;z-index:2"
          document.body.appendChild(imgStr);
        }
      }

      // Initialize the mortal tree element : avoid them, stay alive
      function createMortalTree(numberofTree){
        for (let i = 1; i <= numberofTree; i++) {
          var imgMT = document.createElement('img');
          imgMT.src="./img/try-test.png"
          imgMT.id="mortal-tree"+i;
          imgMT.style="position:absolute;z-index:1";
          document.body.appendChild(imgMT);
        }
      
      // Position of heart icon is randomly determined and will change when the hero catch one
      }
      function randomHeartPosition(){
        for (let i = 1; i <= numberofHeart; i++) {
            $('#like'+i).css({"left": getRandomArbitrary(1,9)*30+790 + "px",
            "top": getRandomArbitrary(1,9)*30+413 + "px","width": getRandomArbitrary(5,5) + "%"});
          }
      }

      // Position of trees icon are randomly determined and won't change
      function randomTreePosition(){
        for (let i = 1; i <= numberofTree; i++) {
          $('#mortal-tree'+i).css({"left": getRandomArbitrary(1,9)*30+810 + "px",
          "top": getRandomArbitrary(1,9)*30+360 + "px","width": getRandomArbitrary(11,12) + "%"});
        }
      }
      
      // Position of star icon is randomly determined and will change automatically after time
      function randomStarPosition(){
        setInterval(function(){
          for (let i = 1; i <= numberofStar; i++) {
            $('#star'+i).css({"left": getRandomArbitrary(1,9)*30+785 + "px",
            "top": getRandomArbitrary(1,9)*30+408 + "px","width": getRandomArbitrary(7,7) + "%"});
          }
        },3000) 
      }

      // Progressive apparition of heart icons
      function animateHeart(){
        if(stepAnimateHeart == 120){
          stepAnimateHeart--;
        }
        for (let i = 1; i <= numberofHeart; i++) {
          $('#like' + i).width(stepAnimateHeart*0.15); 
        }
        if(stepAnimateHeart == 0){
          stepAnimateHeart++;
        }
        stepAnimateHeart++;
         requestAnimationFrame(animateHeart);
      }

      // Rotation of star icons
      function animateStar(){
        if(stepAnimateStar == 160){
          stepAnimateStar = 0;
        }
        for (let k = 1; k <= numberofStar; k++) {
          $('#star' + k).css('width','7%');
          $('#star' + k).css({"transform":"rotateY(" + stepAnimateStar+2 + "deg)"})
        }
        stepAnimateStar++;
         requestAnimationFrame(animateStar);
      }
      
      // The more the hero will stay on the star icon before it position changed, more he will have some points
      function catchStar(){
        for (let k = 1; k <= numberofStar; k++) {
          setInterval(function(){
            if(j == (parseFloat($('#star'+k).css('left'))-785)/30 && i == (parseFloat($('#star'+k).css('top')) - 408)/30){
            score++;
            }
          },500)
        }
      }
      var score = 0;
      // The hero can have more lifes available if he catchs the heart icon, one life per icon 
      function catchHeart(){
        for (let k = 1; k <= numberofHeart; k++) {
          setInterval(function(){
            if(j == (parseFloat($('#like'+k).css('left'))-790)/30 && i == (parseFloat($('#like'+k).css('top')) - 413)/30){
              life++;
              randomHeartPosition();
            }
          },5) 
        }
      }

      // Useful function who help the user to see the exact position of the tree by color by coloring the box
      function colorSquare(){
        let s = new Array;
        let v = new Array;
        for (let k = 0; k <= numberofTree; k++) {
          ctx.fillRect(parseFloat($('#mortal-tree'+k).css('left'))-780,parseFloat($('#mortal-tree'+k).css('top')) - 360,29,29);
          ctx.fillStyle = "rgb(214,236,239)";
        }
        for (let k = 1; k <= numberofTree; k++) {
          s[k] = (parseFloat($('#mortal-tree'+k).css('left'))-780)/30;
          v[k] = (parseFloat($('#mortal-tree'+k).css('top')) - 360)/30;
          tab[i+v[k]][j+s[k]] = 4;
        }     
      }

      // Useful function for random trees, hearts, stars etc...
      function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }

        var yetiX = parseFloat($('#container-golem').css('left'));
        var yetiY = parseFloat($('#container-golem').css('top'));

        destX = Math.round(getRandomArbitrary(1,10))*30+155;
        destY = Math.round(getRandomArbitrary(1,10))*30+345;
    
        var distanceX = destX - parseFloat($('#container-golem').css('left'))
        var distanceY = destY - parseFloat($('#container-golem').css('top'));
      
      // On each frame, the yeti will do movement in a specific direction(dest)
      // Loops change the visible face of the yeti(back,up,left,right)
      // At the end of each frame, check if the hero is on the same position

      var yetiAuto = function(){
        
        if(step == 120){
          
          
          destX = (Math.round(getRandomArbitrary(1,10))*30)+155;
          destY = (Math.round(getRandomArbitrary(1,10))*30)+345;
          
          distanceX = destX - parseFloat($('#container-golem').css('left'));
          distanceY = destY - parseFloat($('#container-golem').css('top'));
          if(distanceX > 0){
            $('#golem-image').css('top','-171px');
          }
          if(distanceX < 0){
            $('#golem-image').css('top','-86px'); 
          }
          if(distanceY > 0){
            $('#golem-image').css('top','2px');
          }
          if(distanceY < 0){
            $('#golem-image').css('top','-256px'); 
          }

          
          step = 0;
        }
        
        $('#container-golem').css('left', yetiX += distanceX/120);
        $('#container-golem').css('top', yetiY += distanceY/120);
        
          step++;
          colision();
          requestAnimationFrame(yetiAuto);
      }

      // Check if the hero is on the same position as the feet of the yeti, which is a colision
      // The hero twinkles when he looses a life (SetTimeOut + SetInterval)
      function colision(){
          
          if(i == (Math.round(yetiY - 345)/30) && j == (Math.round(yetiX - 155)/30) || i == (Math.round(yetiY - 345)/30) && j+1 == (Math.round(yetiX - 155)/30)){
              life--;
              destX = Math.round(getRandomArbitrary(1,10))*30+155;
              destY = Math.round(getRandomArbitrary(1,10))*30+345;
            setTimeout(function(){
              setInterval(function(){
                $('#container').show();
              },100)
              $('#container').hide();
            },300)
            
            if(life == 0){
              looseWindow();
            }
          }
        
      }

      // There is no score limits, automatic refresh each 100ms
      
      
      function displayScore(){
        setInterval(function(){
          $('#scoreGame').text("SCORE:" + score);
        },100)
      }

      // There is no maximum lifes limits, automatic refresh each 100ms
      function displayLife(){
      setInterval(function(){ 
          $('#lifeDisplay').text("LIFE:" + life);
        },100)
      }

      // You enjoyed this game, push this button to beat your best score
      function resetButton(){
        $(".fa-redo-alt").click(function(){
          document.location.reload(true);
        })
        $("#replay").click(function(){
          document.location.reload(true);
        })
      }

      // Because time is money, run faster
      function timer(){
        let minutes = 1;
        let seconds = 30;
        setInterval(function(){
          seconds--;
          if(seconds < 0 && minutes == 1){
            seconds = 59;
            minutes = 0;
          }
          if(seconds < 10){
            seconds = "0"+ seconds;
          }
          $('#timerDisplay').text(minutes + ":" + seconds);

          if(minutes == 0 && seconds == 00){
            looseWindow()
          }
        },1000)
      }

      // End screen which appears when the time is out or when you have lost all your lifes
      function looseWindow(){
        $('#timerDisplay').css('display','none');
            $('.window-bg').css('display','block');
            $('#text-window').text("YOUR SCORE:" + score)

            $('.close').click(function(){
              $('.window-bg').css('display','none');
              document.location.reload(true);

            })
            
            var imgScore = document.createElement("img");
            imgScore.src = "./img/sad-panda.png"

      }

      // each 10 points, you can see a new part of my CV
      // block-hide help me to hide a specific part of my CV
      function displayCV(){
        setInterval(function(){
          
          switch(score){
            
           
            case 10:
              $('#container-CV').css('width','750px');
              $('#container-CV').css('height','300px');
              $('#contenu-CV').css('top','-817px');
              $('#block-hide').css('display','block');
              
            break;
            case 20:
              $('#container-CV').css('width','750px');
              $('#container-CV').css('height','450px');
              $('#contenu-CV').css('top','-688px');
              $('#block-hide').css('display','block');
              $('#block-hide').css('height','247px');
            break;
            case 30:
              $('#container-CV').css('width','750px');
              $('#container-CV').css('height','900px');
              
              $('#contenu-CV').css('top','-550px');
              $('#block-hide').css('display','block');
              $('#block-hide').css('height','400px');
            break;
            case 40:
              $('#container-CV').css('width','750px');
              $('#container-CV').css('height','900px');
              
              $('#contenu-CV').css('top','-320px');
              $('#block-hide').css('display','block');
              $('#block-hide').css('height','630px');
            break;
            case 50:
              $('#container-CV').css('width','750px');
              $('#container-CV').css('height','900px');
              $('#contenu-CV').css('top','-270px');
              $('#block-hide').css('display','block');
              $('#block-hide').css('height','700px');
            break;
            case 60:
              $('#container-CV').css('width','750px');
              $('#container-CV').css('height','900px');
              $('#contenu-CV').css('top','-130px');
              $('#block-hide').css('display','block');
              $('#block-hide').css('height','800px');
            break;
            case 70:
              $('#container-CV').css('width','750px');
              $('#container-CV').css('height','900px');
              $('#contenu-CV').css('top','-130px');        
              $('#block-hide').css('display','block');
              $('#block-hide').css('height','630px');
            break;
            case 80:
              $('#container-CV').css('width','750px');
              $('#container-CV').css('height','900px');
              $('#contenu-CV').css('top','-130px');        
              $('#block-hide').css('display','block');
              $('#block-hide').css('height','380px');
            break;
            case 90:
              $('#container-CV').css('width','750px');
              $('#container-CV').css('height','900px');
              $('#contenu-CV').css('top','-130px');        
              $('#block-hide').css('display','block');
              $('#block-hide').css('height','280px');
            break;
            case 100:
              $('#container-CV').css('width','750px');
              $('#container-CV').css('height','900px');
              $('#contenu-CV').css('top','-130px');        
              $('#block-hide').css('display','block');
              $('#block-hide').css('height','0px');
            break;
            case 120:
              $('#container-CV').css('width','750px');
              $('#contenu-CV').css('width','650px');
              $('#container-CV').css('height','1400px');
              $('#container-CV').css('top','60px');
              $('#contenu-CV').css('top','-7px');
              $('#contenu-CV').css('left','25px');
              $('#block-hide').css('display','block');
              $('#block-hide').css('height','0px');
            break;
            }
        },100)
      }
      function resize(){
        var browserZoomLevel = Math.round(window.devicePixelRatio * 100);

        if(browserZoomLevel != 100)
        alert("Your zoom screen is at " + browserZoomLevel + "Please change it to 100%");
      }
      
      function start(){
        resize();
        calculateAndApplyColor(i,j);
        make2Darray();
        draw();
        createHeart();
        createMortalTree(numberofTree);
        createStarBonus();
        animateHeart();
        randomStarPosition();
        catchStar();
        animateStar();
        catchHeart();
        randomTreePosition();
        randomHeartPosition()
        colorSquare(); 
        yetiAuto();
        colision();
        displayScore();
        displayLife();
        resetButton();
        timer();
        displayCV();
      }
      start();
    }    

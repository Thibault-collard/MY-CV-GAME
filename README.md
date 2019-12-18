# Snow-wars 

The goal of this game is to collect points to reveal my whole curriculum vitae. 
For that, players can walk trough the board game or catch stars, but pay attention 
to the yeti and malefic trees, they are really nervous and ready to make this game 
the most difficult ever.

# Getting started

Please set your zoom to 100% and set your screen to maximum size, the game is not yet 
fully optimized for mobile display. There is no others requesites to test this game.

# Functions

- make2Darray(cols, rows) : Create 2D array where the hero will move during the game
- draw() : Introduce global canvas to draw the stroke and the rectangle
- calculateAndApplyColor(i,j) : When the hero move, colors of squares change and you win some points, z-index allow us to see the hero when he's loosing his life, not behind the tree or the yeti
- createHeart() : Initialize the heart element : Catch them, win lifes
- createStarBonus() : Initialize the star element : Catch them, win points
- createMortalTree(numberofTree) : Initialize the mortal tree element : avoid them, stay alive
- randomHeartPosition() : Position of heart icon is randomly determined and will change when the hero catch one
- randomTreePosition() : Position of trees icon are randomly determined and won't change
- randomStarPosition() : Position of star icon is randomly determined and will change automatically after time
- animateHeart() : Progressive apparition of heart icons
- animateStar() : Rotation of star icons
- catchStar() : The more the hero will stay on the star icon before it position changed, more he will have some points
- catchHeart() : The hero can have more lifes available if he catchs the heart icon, one life per icon
- colorSquare() : Useful function who help the user to see the exact position of the tree by color by coloring the box
- getRandomArbitrary(min, max) : Useful function for random trees, hearts, stars etc...
- yetiAuto() : On each frame, the yeti will do movement in a specific direction(dest).At the end of each frame, check if the hero is on the same position
- colision() : Check if the hero is on the same position as the feet of the yeti, which is a colision. The hero twinkles when he looses a life (SetTimeOut + SetInterval)
- displayScore() : There is no score limits, automatic refresh each 100ms
- displayLife() : There is no maximum lifes limits, automatic refresh each 100ms
- resetButton() : You enjoyed this game, push this button to beat your best score
- timer() : Because time is money, run faster
- looseWindow() : End screen which appears when the time is out or when you have lost all your lifes
- displayCV() : each 10 points, you can see a new part of my CV. block-hide help me to hide a specific part of my CV

## Tech-stack
Languages: CSS-HTML-Javascript
Framework: Bootstrap(cdn) - Jquery(local file)

## Contributing

If you want contribute to this project, feel free to contact me by e-mail: thibault.collard@gmail.com

# About me
I'm a student developper at IFOCOP Paris and previously student at The Hacking Project Paris. 
I did marketing studies for 5 years and i'll be available in june 2020 for hiring :)






// Dice Image 1

var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6)+1);//Generate Random Number

var randomDice = "dice"+randomNumber1+".png";// Chooses random PNG 

var randomSource = "images/"+randomDice ; //Locates the Source

//Changing the attribute of Refresh Me(Title)
var image1 = document.querySelector(".img1");
image1.setAttribute("src",randomSource);



// Dice Image 2

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6)+1); //Generate Random Number
var randomDice2 = "dice" + randomNumber2 + ".png"; // Chooses random PNG 
var randomSource2 = "images/" + randomDice2 ; //Locates the Source

//Changing the attribute of Refresh Me(Title)
var image2 = document.querySelector(".img2");
image2.setAttribute("src",randomSource2);

// Player1 Wins
if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins";

}
// Player2 Wins
else if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = " 🚩 Player 2 Wins";
}
// Draw Game
else
{
    document.querySelector("h1").innerHTML = " 🚩 Draw ! 🚩";
}




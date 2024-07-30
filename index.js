// var randomnumber1 = 1+Math.floor((Math.random())*6);

// if (randomnumber1 === 1){
//     document.querySelector(".img1").setAttribute("src", "dice1.png");
// }
// else if(randomnumber1 === 2){
//     document.querySelector(".img1").setAttribute("src", "dice2.png");
// }
// else if(randomnumber1 === 3){
//     document.querySelector(".img1").setAttribute("src", "dice3.png");
// }
// else if(randomnumber1 === 4){
//     document.querySelector(".img1").setAttribute("src", "dice4.png");

// }
// else if(randomnumber1 === 5){
//     document.querySelector(".img1").setAttribute("src", "dice5.png");

// }
// else {
//     document.querySelector(".img1").setAttribute("src", "dice6.png");
// }

// var randomnumber2 = 1+Math.floor((Math.random())*6);
// if (randomnumber2 === 1){
//     document.querySelector(".img2").setAttribute("src", "dice1.png");
// }
// else if(randomnumber2 === 2){
//     document.querySelector(".img2").setAttribute("src", "dice2.png");
// }
// else if(randomnumber2 === 3){
//     document.querySelector(".img2").setAttribute("src", "dice3.png");
// }
// else if(randomnumber2 === 4){
//     document.querySelector(".img2").setAttribute("src", "dice4.png");

// }
// else if(randomnumber2 === 5){
//     document.querySelector(".img2").setAttribute("src", "dice5.png");

// }
// else {
//     document.querySelector(".img2").setAttribute("src", "dice6.png");
// }

// if (randomnumber1>randomnumber2){
//     document.querySelector(".container h1").innerHTML = "Player 1 Wins";
// }

// else if (randomnumber2>randomnumber1){
//     document.querySelector(".container h1").innerHTML = "Player 2 Wins";
// }
// else{
//     document.querySelector(".container h1").innerHTML = "Draw!";
// }




var DrumButtons = document.querySelectorAll(".drum").length;
for  (var i = 0; i<DrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        keyPressed(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    keyPressed(event.key);
})

function makeSound(key){
    switch(key){
        case 'w':
            var audio = new Audio ("crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio('kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('snare.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('tom-4.mp3');
            audio.play();
            break;

    }

}

function keyPressed (key) {
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    })
}

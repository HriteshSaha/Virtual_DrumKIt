let numberOfDrumButtons = document.querySelectorAll(".drum") //capturing all the elements of class drum to an array

for(let i=0; i<numberOfDrumButtons.length; i++){ // iterating over the list of elements in the array
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){  // adding eventListener. Which means when we click on the button it triggers the function
        let button = this.innerHTML
        makeSound(button)
        makeAnnimation(button)
    })
}

document.addEventListener("keydown", function(event){ // here event lets us know the event which triggered this event listner
    makeSound(event.key);
    makeAnnimation(event.key)
})


function makeSound(key){ // matching the key with the cases and finding out which sound should it play
    switch (key) {
        case "w":
            let w1 = new Audio("sounds/tom-1.mp3")
            w1.play()
            break;
        case "a":
            let a1 = new Audio("sounds/tom-2.mp3")
            a1.play()
            break;
        case "s":
            let s1 = new Audio("sounds/tom-3.mp3")
            s1.play()
            break;
        case "d":
            let d1 = new Audio("sounds/tom-4.mp3")
            d1.play()
            break;
        case "j":
            let j1 = new Audio("sounds/kick-bass.mp3")
            j1.play()
            break;
        case "k":
            let k1 = new Audio("sounds/crash.mp3")
            k1.play()
            break;
        case "l":
            let l1 = new Audio("sounds/snare.mp3")
            l1.play()
            break;
    
        default:
            break;
    }
}

function makeAnnimation(key){
    let activeButton = document.querySelector("."+key)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed"), 100
    })
}





    // let audio = new Audio("sounds/tom-1.mp3");
    //     audio.play();
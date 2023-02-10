for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonContent=this.innerHTML;
        playSound(buttonContent);
        animation(buttonContent);
    });
}

document.addEventListener("keydown",function(event){//event here is the event that triggered the function, and this event has a 
    //variable of key that basically shows which is the key that was pressed to cause the event of keydown
    playSound(event.key);
    animation(event.key); 
});
function playSound(key){
    switch (key) {
        case 'w':
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}
function animation(currentKey){
    var activebutton= document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
        
    },100);
}



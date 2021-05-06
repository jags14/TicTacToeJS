const images = document.getElementsByTagName('img');
const btn = document.getElementById('restartbtn');
let toggle = 1;
const clicked = false;
/*
function toggleFunction(){
    if(toggle == 1){
        images[i].src = "X.jpg";
    }
    else{
        images[i].src = "O.png";
    }
    toggle = -toggle;
} */

for(let i=0; i<images.length; i++){
    images[i].addEventListener('mouseenter', ()=>{
        if(toggle == 1){
            images[i].src = "X.jpg";
            images[i].style.opacity = 0.2;
        }
        else{
            images[i].src = "O.png";
        }
        //toggle = -toggle;
    });

    images[i].addEventListener('click', ()=>{
        clicked = true;
        if(toggle == 1){
            images[i].src = "X.jpg";
        }
        else{
            images[i].src = "O.png";
        }
        toggle = -toggle;
    
}); 

    images[i].addEventListener('mouseleave', ()=>{
        if(!clicked){
            images[i].src = "default.jpg";
            images[i].style.opacity = 1;

        }
        else{
            clicked = false;
        }
    });   
    
}
btn.addEventListener('click', ()=>{
    
    //btn.innerHTML = 'Got Clicked!';
});
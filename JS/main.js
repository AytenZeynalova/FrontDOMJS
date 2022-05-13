
let allP= document.getElementsByTagName("p");;
let btn1 = document.getElementById('fontBtn1');
let btn2 = document.getElementById('fontBtn2');
let btn3color= document.getElementById('colorbtn');
var pow=10;

btn1.onclick = function(){

    for(let i=0;i<allP.length;i++)
    {
        allP[i].style.fontSize = (pow+3) +"px";
        pow++;
    }
    
}


btn2.onclick = function(){

    for(let i=0;i<allP.length;i++)
    {
        allP[i].style.fontSize = (pow-3) +"px";
        pow--;
    }
   
}

btn3color.onclick=function(){
    let color= document.getElementById('changecolorinput').value; 
    for(let i=0;i<allP.length;i++){
allP[i].style.color=color;
    }
}
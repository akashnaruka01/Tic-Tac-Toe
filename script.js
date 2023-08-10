console.log("tic tac toe")

let click_audio =new Audio("Click - Sound.mp3")
let win_audio = new Audio("win_sound.mp3")
let audioTurn = new Audio(".mp3")
let turn = 'x';
let Iswin = false;
let x,y,z;
var count=0;

const changeTurn = () =>{
    audioTurn.play();
    return turn === "x"?"0":"x"; 
}

const checkWin = () =>
{
    let boxtest = document.getElementsByClassName('boxtext');
    let Color = document.getElementsByClassName('box');
    let wins = 
    [
    [0 ,1 ,2 ,0 ,5.4 ,0],
    [3 ,4 ,5 ,0 ,15.4 ,0],
    [6 ,7 ,8 ,0 ,25.4 ,0],
    [0 ,3 ,6 ,-10 ,14.8 ,90],
    [2 ,5 ,8 ,10 ,14.8 ,90],
    [0 ,4 ,8 ,0 ,15 ,45],
    [2 ,4 ,6 ,0 ,15 ,-45],
    [1 ,4 ,7 ,0 ,14.8 ,90]
    ]
    
    wins.forEach(e =>{
        if((boxtest[e[0]].innerText === boxtest[e[1]].innerText) && (boxtest[e[2]].innerText === boxtest[e[1]].innerText) && (boxtest[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtest[e[0]].innerText + " Won";
            Iswin = true;
            win_audio.play();
            document.getElementsByTagName('img')[0].style.width = '50%';
            Color[e[0]].style = Color[e[1]].style = Color[e[2]].style ='background-color : aqua';
            x = e[0], y =e[1], z=e[2];
            document.querySelector('.line').style.width = '403px';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw , ${e[4]}vw ) rotate(${e[5]}deg)`;         
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === "" && !Iswin){
            count++;
            boxtext.innerText = turn;
            turn = changeTurn();
            click_audio.play();
            checkWin();  
            if(!Iswin)          
            {document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn}
            if(count === 9 && !Iswin)
                document.getElementsByClassName("info")[0].innerText = "No One wins ";            
        }
    })
})

reset.addEventListener('click',() =>{ 
    count = 0;      
    let boxtext = document.querySelectorAll('.boxtext');
    let Color = document.getElementsByClassName('box');
        Array.from(boxtext).forEach(element =>{
            element.innerText='';
       })          
            document.getElementsByClassName("info")[0].innerText  = "Turn for x" ;
       Iswin=false;
       turn = 'x';
       document.getElementsByTagName('img')[0].style.width = '0px';
       Array.from(Color).forEach(element =>{
        element.style = 'background-color : none';
    })
       document.querySelector('.line').style.width = '0';
})
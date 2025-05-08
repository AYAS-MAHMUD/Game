
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new-game");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let btn = true;

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(btn){
            box.innerText = "O";
            btn = false;
            
        }else{
            box.innerText = "X";
            btn = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const resetGame = ()=>{
    btn=true;
    enable();
}
const showwinner =(winner)=>{
    msg.innerText = `Congratulation, winner is ${winner}`;
    msg_container.classList.remove("hide");
}

const stop = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enable = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
        }
}
const checkwinner = ()=>{
    for(let pattern of win){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
                stop();
            }
        }

    }
}

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
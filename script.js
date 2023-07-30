const topBox=document.querySelector('.top-box');
const gridBoxes=document.querySelectorAll(".box");
const bottomBtn=document.querySelector('.bottom-button');

const winningPosition=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];


let currentPlayer;
let arrayBoxes=[];
let totalCount;
init();
function init(){
    gridBoxes.forEach((box)=>{
        box.innerHTML='';
        box.classList.remove('win');
        box.style.pointerEvents='all';
    });
    bottomBtn.innerHTML='New Game';
    topBox.style.backgroundColor="rgba(0, 0, 0, 0.25)";
    arrayBoxes=["","","","","","","","",""];
    currentPlayer='X';
    topBox.innerHTML='Player '+currentPlayer;
    totalCount=0;
}

gridBoxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        handleClick(index);
    })
});

function handleClick(index){
    if(arrayBoxes[index]===""){
        gridBoxes[index].innerHTML=currentPlayer;
        arrayBoxes[index]=currentPlayer;
         
        gridBoxes[index].style.pointerEvents='none';
        currentPlayer=currentPlayer==='X'?'O':'X';
        topBox.innerHTML='Player '+currentPlayer;
        checkWinner();
    }
}

bottomBtn.addEventListener('click',()=>{
    init();
})

function checkWinner(){
    winningPosition.forEach((element)=>{
        if( (arrayBoxes[element[0]]!='') &&  (arrayBoxes[element[1]]!='') && (arrayBoxes[element[2]]!='') &&
            (arrayBoxes[element[0]]==arrayBoxes[element[1]])&&(arrayBoxes[element[0]]==arrayBoxes[element[2]])){

                // winner mil gya
                
                topBox.style.backgroundColor="green";
                topBox.innerHTML='The Winner is '+arrayBoxes[element[0]];
                //green marks
                gridBoxes[element[0]].classList.add('win');
                gridBoxes[element[1]].classList.add('win');
                gridBoxes[element[2]].classList.add('win');
                return;
        }
    })
    totalCount++;
    if(totalCount===9){
        topBox.innerHTML='Match Draw';
        topBox.style.backgroundColor="red";
        bottomBtn.innerHTML='Play Again';
    }
}

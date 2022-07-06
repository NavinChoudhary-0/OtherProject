let allDiv = document.querySelectorAll('.grid div');
let logLeft = document.querySelectorAll('.log-left');
let logRight = document.querySelectorAll('.log-right');
let carRight = document.querySelectorAll('.car-right');
let carLeft = document.querySelectorAll('.car-left');

document.addEventListener('keyup',moveFrog);
let currIndex = 76;

function moveFrog(e){
    switch (e.key){
        case 'ArrowRight':
            if(currIndex%9 != 8){
                allDiv[currIndex].classList.remove('frog');
                currIndex += 1;
                allDiv[currIndex].classList.add('frog');
            }
            break;
        case 'ArrowLeft':
            if(currIndex%9 != 0){
                allDiv[currIndex].classList.remove('frog');
                currIndex -= 1;
                allDiv[currIndex].classList.add('frog');
            }
            break;
        case 'ArrowUp':
            if(currIndex - 9 >= 0){
                allDiv[currIndex].classList.remove('frog');
                currIndex -= 9;
                allDiv[currIndex].classList.add('frog');
            }
            break;
        case 'ArrowDown':
            if(currIndex + 9 < 81){
                allDiv[currIndex].classList.remove('frog');
                currIndex += 9;
                allDiv[currIndex].classList.add('frog');
            }
            break;
        
    }

}

function moveCarRight(){
    carRight.forEach((ele)=>{
        if(ele.classList.contains('c1')){
            ele.classList.remove('c1');
            ele.classList.add('c2');
        }else if(ele.classList.contains('c2')){
            ele.classList.remove('c2');
            ele.classList.add('c3');
        }else{
            ele.classList.remove('c3');
            ele.classList.add('c1');
        }
    })
        
}

function moveCarLeft(){
    carLeft.forEach((ele)=>{
        if(ele.classList.contains('c1')){
            ele.classList.remove('c1');
            ele.classList.add('c3');
        }else if(ele.classList.contains('c2')){
            ele.classList.remove('c2');
            ele.classList.add('c1');
        }else{
            ele.classList.remove('c3');
            ele.classList.add('c2');
        }
    })
        
}

function moveLogRight(){
    logRight.forEach((ele)=>{
        if(ele.classList.contains('l1')){
            ele.classList.remove('l1');
            ele.classList.add('l2');
        }else if(ele.classList.contains('l2')){
            ele.classList.remove('l2');
            ele.classList.add('l3');
        }else if(ele.classList.contains('l3')){
            ele.classList.remove('l3');
            ele.classList.add('l4');
        }else if(ele.classList.contains('l4')){
            ele.classList.remove('l4');
            ele.classList.add('l5');
        }else{
            ele.classList.remove('l5');
            ele.classList.add('l1');
        }
    })
}

function moveLogLeft(){
    logLeft.forEach((ele)=>{
        if(ele.classList.contains('l1')){
            ele.classList.remove('l1');
            ele.classList.add('l5');
        }else if(ele.classList.contains('l2')){
            ele.classList.remove('l2');
            ele.classList.add('l1');
        }else if(ele.classList.contains('l3')){
            ele.classList.remove('l3');
            ele.classList.add('l2');
        }else if(ele.classList.contains('l4')){
            ele.classList.remove('l4');
            ele.classList.add('l3');
        }else{
            ele.classList.remove('l5');
            ele.classList.add('l4');
        }
    })
}

let moveLogLeftID = setInterval(moveLogLeft,1000);
let moveLogRightID = setInterval(moveLogRight,1000);
let moveCarLeftID = setInterval(moveCarLeft,1000);
let moveCarRightID = setInterval(moveCarRight,1000);
let checkForWinId = setInterval(checkForWin,100);
function checkForWin(){
    let frog = document.querySelector('.frog');
    // console.log(frog);
    if(frog.classList.contains('l4') || frog.classList.contains('l5') || frog.classList.contains('c2')){
        document.getElementById('result').innerText = "YOU LOSE";
        clearInterval(moveCarLeftID);
        clearInterval(moveCarRightID);
        clearInterval(moveLogRightID);
        clearInterval(moveLogLeftID);
        document.removeEventListener('keyup',moveFrog);
    }else if(frog.classList.contains('ending-block')){
        document.getElementById('result').innerText = "YOU WIN";
        clearInterval(moveCarLeftID);
        clearInterval(moveCarRightID);
        clearInterval(moveLogRightID);
        clearInterval(moveLogLeftID);
        document.removeEventListener('keyup',moveFrog);
    }
}











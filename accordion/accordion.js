let q = document.querySelectorAll("ul.faq-text > li");
Array.from(q).forEach((e,i)=>{
    e.addEventListener('click',()=>{
        // console.log(e.classList.length);
        e.classList.toggle('showAnswer');
        removeRest(i);
    })
})
function removeRest(index){
    for(let i = 0;i<5;i++){
        if(i == index){
            continue;
        }
        if(q[i].classList.contains('showAnswer')){
            q[i].classList.toggle('showAnswer');
        }
    }
}
// let li = document.querySelectorAll(".faq-text li");
//     for (var i = 0; i < li.length; i++) {
//       li[i].addEventListener("click", (e)=>{
//         let clickedLi;
//         if(e.target.classList.contains("question-arrow")){
//           clickedLi = e.target.parentElement;
//         }else{
//           clickedLi = e.target.parentElement.parentElement;
//         }
//        clickedLi.classList.toggle("showAnswer");
//       });
//     }
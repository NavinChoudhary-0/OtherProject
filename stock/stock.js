let expand  = document.getElementsByClassName('navExpand');
expand[0].addEventListener('click',()=>{
    let navContainer = document.getElementsByClassName('nav-container');
    navContainer[0].classList.toggle('navexpand');  
})
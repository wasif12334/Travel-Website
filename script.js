let cardDistination = document.querySelectorAll('.card')
cardDistination.forEach(card => {
    card.addEventListener('click',()=>{
        console.log(card.innerHTML);
    })
});

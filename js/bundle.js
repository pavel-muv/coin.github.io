let swiper = new Swiper('.swiper',{
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {
        495: {
            spaceBetween: 24,
            slidesPerView: 2,
        },
        768: {
            spaceBetween: 24,
            slidesPerView: 3,
        }
    }
});

let allElems = document.querySelectorAll('.faq-list__question');

allElems.forEach((elem)=>{
    elem.addEventListener('click', function(){
        /*находим все активные элементы*/
        console.log('111')
        let descActive = document.querySelectorAll('.faq-list__question.active');
        /*прогоняем через цикл и удаляем класс active*/
        descActive.forEach((elem)=>{
            elem.classList.remove('active');
        })

        let parentElem = this.parentNode;

        let contentBlock = parentElem.querySelector('.faq-list__answer');
        let contentBtn = parentElem.querySelector('.faq-list__btn');

        if(contentBlock.classList.contains("active")) {
            contentBlock.classList.remove('active');
        }
        else {
            contentBlock.classList.add('active');
        }
        if(contentBtn.classList.contains('active')){
            contentBtn.classList.remove('active')
        } else {
            contentBtn.classList.add('active');
        }
    })
})
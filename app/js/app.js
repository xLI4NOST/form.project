// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

    //header
        const langButton= document.querySelector('.lang-button')
        const langBlock = document.querySelector('.lang-block')
        const langSelect = document.querySelectorAll('.lang_select')

        langButton.addEventListener('click', (e)=>{
            e.stopPropagation()
            langBlock.classList.toggle('lang-block_active')
        })

        document.body.addEventListener('click', ()=>{
            langBlock.classList.remove('lang-block_active')
        })


        for (let langSel of langSelect ){
            langSel.addEventListener('click', (e)=>{
                e.stopPropagation()
                setTimeout(()=>{
                    langBlock.classList.remove('lang-block_active')
                }, 100)
                console.log(langSel.textContent)
            })
        }

    //header

	//main-input

    // const inputBackground= document.querySelector('.input-background')
    // const mainInput = document.querySelector('.main-input')
    // const inputClearButton = document.querySelector('.input-box_clear-image')
    // const mainInputSearch= document.querySelector('.input-box_search-image')
    // const noResultBlock = document.querySelector('.no-result')
    // const mainInputFunc =()=>{
    //     if (mainInput.value.length > 0){
    //         noResultBlock.style.display='block'
    //         inputClearButton.style.display='block'
    //         inputBackground.classList.add('input-background_active')
    //         mainInput.classList.add('main-input_active')
    //         mainInputSearch.style.display='none'
    //     } else {
    //         noResultBlock.style.display='none'
    //         mainInputSearch.style.display='block'
    //         mainInput.classList.remove('main-input_active')
    //         inputClearButton.style.display='none'
    //         inputBackground.classList.remove('input-background_active')
    //     }
    // }
    // mainInput.addEventListener('input', mainInputFunc)
    // inputClearButton.addEventListener('click', ()=>{
    //     noResultBlock.style.display='none'
    //     mainInputSearch.style.display='block'
    //     inputClearButton.style.display='none'
    //     inputBackground.classList.remove('input-background_active')
    //     mainInput.value=''
    // })

    //main-input
    
    //contact-block
    //     const commentBlock = document.querySelector('.comment-block')
    //     const placeHoldreCommentBlock= document.getElementById('comment-block_pl')
    //     commentBlock.lastElementChild.textContent='Постарайтесь максимально подробно сформулировать ваш вопрос'
    //     commentBlock.addEventListener('focus', ()=>{
    //         commentBlock.lastElementChild.textContent=''
    //     })
    //
    //     commentBlock.addEventListener('blur', ()=>{
    //         if (commentBlock.innerText.length > 0 ){
    //
    //         } else {
    //             commentBlock.lastElementChild.textContent='Постарайтесь максимально подробно сформулировать ваш вопрос'
    //         }
    //     })
    //
    //
    //     const contactButtons = document.querySelectorAll('.social_button')
    //     const defaultBtn = document.querySelector('.social_button')
    //     const contactBlockInput = document.querySelector('.question_block_contact-block_input')
    //     const contactBlockSubmitBtn = document.querySelector('.question_block_contact-block_submit-button')
    //      window.addEventListener('load', ()=>{
    //          defaultBtn.classList.add('selected_button')
    //          defaultBtn.firstElementChild.style.display='flex'
    //          defaultBtn.children[1].style.display='none'
    //          contactBlockInput.placeholder = 'Введите свой Email'
    //          contactBlockInput.setAttribute('type', 'email')
    //          contactBlockInput.setAttribute('name', 'email')
    //
    //      })
    //
    //         contactButtons.forEach((button)=>{
    //             button.addEventListener('click', (e)=>{
    //                 e.preventDefault()
    //                     const activeBtn = document.querySelector('.social_button.selected_button')
    //                 if (activeBtn){
    //                     activeBtn.classList.remove('selected_button')
    //                     activeBtn.firstElementChild.style.display='none'
    //                     activeBtn.children[1].style.display='block'
    //                 }
    //
    //
    //                 switch (button.id) {
    //                     case 'Email':
    //                         button.classList.add('selected_button')
    //                         button.firstElementChild.style.display='flex'
    //                         button.children[1].style.display='none'
    //                         contactBlockInput.placeholder = 'Введите свой Email'
    //                         contactBlockInput.setAttribute('type', 'email')
    //                         contactBlockInput.setAttribute('name', 'email')
    //                         break
    //                     case 'Telegram':
    //                         button.classList.add('selected_button')
    //                         button.firstElementChild.style.display='flex'
    //                         button.children[1].style.display='none'
    //                         contactBlockInput.placeholder = 'Введите свой Telegram'
    //                         contactBlockInput.setAttribute('type', 'text')
    //                         contactBlockInput.setAttribute('name', 'telegram')
    //                         break
    //                     case'WhatsUp':
    //                         button.classList.add('selected_button')
    //                         button.firstElementChild.style.display='flex'
    //                         button.children[1].style.display='none'
    //                         contactBlockInput.placeholder = 'Введите свой WhatsUp'
    //                         contactBlockInput.setAttribute('type', 'text')
    //                         contactBlockInput.setAttribute('name', 'whatsup')
    //                         break
    //                 }
    //             })
    //
    //         })
    //
    //
    //             contactBlockInput.addEventListener('input', ()=>{
    //                 if(contactBlockInput.validity.valid){
    //                     contactBlockSubmitBtn.classList.add('question_block_contact-block_submit-button_active')
    //                     contactBlockSubmitBtn.removeAttribute('disabled')
    //                 }
    //                 if (contactBlockInput.value.length < 2){
    //                     contactBlockSubmitBtn.classList.remove('question_block_contact-block_submit-button_active')
    //                     contactBlockSubmitBtn.setAttribute('','disabled')
    //                 }
    //                 if(contactBlockInput.validity.valid === false){
    //                     contactBlockSubmitBtn.classList.remove('question_block_contact-block_submit-button_active')
    //                     contactBlockSubmitBtn.setAttribute('','disabled')
    //                 }
    //
    //             })


    //contact-block
    //users_group
                //     const slider = document.querySelector(".slider");
                //     const slides = document.querySelectorAll(".slide");
                //     const prevButton = document.querySelector(".prev-button");
                //     const nextButton = document.querySelector(".next-button");
                //     const dots = document.querySelectorAll(".slider-dot");
                //
                //     let currentSlide = 0;
                //
                //     // Функция для переключения на заданный слайд
                //     function goToSlide(slideIndex) {
                //
                //         slider.style.transform = `translateX(-${slideIndex * 100}%)`;
                //         currentSlide = slideIndex;
                //         updateDots();
                //     }
                //
                //     // Функция для обновления активного кружочка
                //     function updateDots() {
                //         dots.forEach((dot, index) => {
                //             dot.classList.toggle("active", index === currentSlide);
                //         });
                //     }
                //
                //     // Обработчики событий для кнопок
                //     prevButton.addEventListener("click", () => {
                //         currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                //         goToSlide(currentSlide);
                //     });
                //
                //     nextButton.addEventListener("click", () => {
                //         currentSlide = (currentSlide + 1) % slides.length;
                //         goToSlide(currentSlide);
                //     });
                //
                //     // Обработчики событий для кружочков
                //     dots.forEach((dot, index) => {
                //         dot.addEventListener("click", () => {
                //             goToSlide(index);
                //         });
                //     });
                //
                //     // Начнем с первого слайда
                //     goToSlide(currentSlide);
                //
                //
    const swiperBtnFront = document.querySelector('.slider_button-front')
    const swiperBtnBack = document.querySelector('.slider_button-back')
    const swiperDots = document.querySelector('.slider_dots')

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 3,
        loop: false,
        slidesPerGroup:3,
        spaceBetween: 24,

        // If we need pagination
        pagination: {
            el: swiperDots,
        },
        grid:{
            rows: 1
        },

        // Navigation arrows
        navigation: {
            nextEl: swiperBtnFront,
            prevEl: swiperBtnBack,
        },


    });



    //users_group

})

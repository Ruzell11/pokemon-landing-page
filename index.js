$(() =>{
    const emailInput = document.querySelector('.email');
    const body = document.getElementsByTagName('body')
    const passwordInput = document.querySelector('.password');
    const email = 'user123@gmail.com';
    const password = 'user123'
   $('.form-control').keyup(() =>{
   
    $('.btnModal').click(() =>{
        if(emailInput.value === email && passwordInput.value === password){
            $('.submitText').addClass('d-none')
            $('.spinnerDiv').removeClass('d-none')
            setInterval(function(){
               $('.modal-backdrop').addClass('d-none')
               $('.modal').addClass('d-none')
               $('body').css('overflow' , 'scroll')
               $('.btnLogin').addClass('d-none')
              }, 2000);
            $('.nav-items').removeClass('d-none')
            ('.btnLogin').addClass('d-none')
            
            
            
            emailInput.classList.add('is-valid')
            passwordInput.classList.add('is-valid')
            emailInput.classList.remove('is-invalid')
            passwordInput.classList.remove('is-invalid')
          
        }else {
            emailInput.classList.remove('is-valid')
            passwordInput.classList.remove('is-valid')
            emailInput.classList.add('is-invalid')
            passwordInput.classList.add('is-invalid')
        }
    })
   
   })
    
    
})


const title = document.querySelectorAll('.card-title');
const text = document.querySelectorAll('.card-text');
$('.es').click(() =>{
  $('.language-selected').addClass('change-es')
  $('.language-selected').text('Espanol')
  $('.language-selected').removeClass('change-en')
  $('.language-selected').removeClass('change-ks')
    title.forEach(item =>{
        item.innerHTML = 'POKÉMON'
    })
    text.forEach(item => {
        item.innerHTML = "Algún texto de ejemplo rápido para construir sobre el título de la tarjeta y constituir la mayor parte del contenido de la tarjeta."
    })
   $('.en').click(() =>{
    $('.language-selected').removeClass('change-es')
    $('.language-selected').removeClass('change-ks')
    $('.language-selected').text('English')
    $('.language-selected').addClass('change-en')
    text.forEach(item =>{
        item.innerHTML = "Some quick example text to build on the card title and make up the bulk of the card's content." 
    })
    title.forEach(item => {
        item.innerHTML ='POKEMON'
    })
   })
   $('.ks').click(() =>{
    $('.language-selected').removeClass('change-es')
    $('.language-selected').removeClass('change-en')
    $('.language-selected').addClass('change-ks')
    $('.language-selected').text('Korea')
    text.forEach(item =>{
        item.innerHTML = "카드 제목을 기반으로 카드 콘텐츠의 대부분을 구성하는 몇 가지 간단한 예제 텍스트입니다."
    })
    title.forEach(item =>{
        item.innerHTML = "포켓몬"
    })
   })
})

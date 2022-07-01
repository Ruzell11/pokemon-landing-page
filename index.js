$(() =>{
    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.password');
    const email = 'user123@gmail.com';
    const password = 'user123'
   $('.form-control').keyup(() =>{
   
    $('.btnModal').click(() =>{
        if(emailInput.value === email && passwordInput.value === password){
            $('.submitText').addClass('d-none')
            $('.spinnerDiv').removeClass('d-none')
            setInterval(function(){
                location.href = "index.html"
              }, 2000);
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
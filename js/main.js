const signup_btn = document.querySelector('#signup_btn');
const signup = document.querySelector('.signup');
const close_btn = document.querySelector('#close');

signup_btn.onclick = function () {
signup.classList.toggle("none")
  document.body.classList.toggle('no-scroll')
}


close_btn.onclick = function () {
    signup.classList.toggle("none")
      document.body.classList.toggle('no-scroll')
    }
    
    

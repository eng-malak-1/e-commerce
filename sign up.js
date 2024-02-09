//  validation form

let user = document.getElementById('user');
let password = document.getElementById('pass');
let number = document.getElementById('num')


user.addEventListener("keyup", function () {

    let check = document.querySelector(".u_check");
    let times = document.querySelector(".u_times");
    if (user.value.length == 0 || user.value.length < 6 ){
        user.style.border = '1px solid red';
        times.style.display = 'block';
        check.style.display = 'none';
        return false
    }
    else {
      user.style.border = '1px solid green'
      times.style.display = 'none'
      check.style.display = 'block'
    }

    

});


number.addEventListener('keyup' , function() {
  let times = document.querySelector('.n_times')
  let check = document.querySelector('.n_check')

  if( number.value.length == 0 || number.value.length < 11){
    number.style.border = '1px solid red'
    times.style.display = 'block'
    check.style.display = 'none'
  }
  else{
    number.style.border = '1px solid green'
    times.style.display = 'none'
    check.style.display = 'block'
  }
})




password.addEventListener('keyup' , function() {
  let times = document.querySelector('.p_times')
  let check = document.querySelector('.p_check')

if(password.value.length == 0 || password.value.length < 6 ){
      password.style.border = '1px solid red'
      times.style.display = 'block'
      check.style.display = 'none'
      return false
    }
    else {
      password.style.border = '1px solid green'
      times.style.display = 'none'
      check.style.display = 'block'
    }
})

let input = document.querySelector('.inp')

// function validation

function validation(){
  
  let errorUser = document.getElementById('error-user');
  let errorNumber = document.getElementById('error-num');
  let errorPassword = document.getElementById('error-pass');

  if(user.value == '' || user.value.length < 10 ){
    user.style.border = '1px solid red'
    errorUser.style.display = 'block'
    return false
  }
  else if ( password.value == '' || password.value.length == 0  || password.value.length < 6 ){
    password.style.border = '1px solid red'
    errorPassword.style.display = 'block'
    return false
  }
  else if (number.value.length == 0  || number.value.length < 11 || number.value == '' ){
    number.style.border = '1px solid red'
    errorNumber.style.display = 'block'
    return false

  }

  else{
    errorUser.style.display = 'none'
    errorPassword.style.display = 'none'
    errorNumber.style.display = 'none'
  }

}





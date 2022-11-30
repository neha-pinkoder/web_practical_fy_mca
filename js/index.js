/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// function validateEmail(inputText) {
//     var mailFormat =  /\S+@\S+\.\S+/;
//     if (inputText.value.match(mailFormat)) {
//       //alert("Valid address!");
//       return true;
//     } else {
//       alert("Invalid address!");
//       return false;
//     }
//   }

// function validatePhoneNumber(inputText) {
//   var phoneFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
//   if (inputText.value.match(phoneFormat)) {
//     //alert("Valid phone number!");
//     return true;
//   } else {
//     alert("Invalid phone number!");
//     return false;
//   }
// }

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username")

// handling blank fields
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    engine(username, 0, "Username cannot be blank");
    //engine(email, 1, "Email cannot be blank");
    //engine(password, 2, "Password cannot be blank");
  });
  
  // engine function which will do all the works
  
  let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
  
      // icons
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    } else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
  
      // icons
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    }
  };
// 'use strict';

// // modal variables
// const modal = document.querySelector('[data-modal]');
// const modalCloseBtn = document.querySelector('[data-modal-close]');
// const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// // modal function
// const modalCloseFunc = function () { modal.classList.add('closed') }

// // modal eventListener
// modalCloseOverlay.addEventListener('click', modalCloseFunc);
// modalCloseBtn.addEventListener('click', modalCloseFunc);





// // notification toast variables
// const notificationToast = document.querySelector('[data-toast]');
// const toastCloseBtn = document.querySelector('[data-toast-close]');

// // notification toast eventListener
// toastCloseBtn.addEventListener('click', function () {
//   notificationToast.classList.add('closed');
// });





// // mobile menu variables
// const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
// const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
// const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
// const overlay = document.querySelector('[data-overlay]');

// for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

//   // mobile menu function
//   const mobileMenuCloseFunc = function () {
//     mobileMenu[i].classList.remove('active');
//     overlay.classList.remove('active');
//   }

//   mobileMenuOpenBtn[i].addEventListener('click', function () {
//     mobileMenu[i].classList.add('active');
//     overlay.classList.add('active');
//   });

//   mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
//   overlay.addEventListener('click', mobileMenuCloseFunc);

// }





// // accordion variables
// const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
// const accordion = document.querySelectorAll('[data-accordion]');

// for (let i = 0; i < accordionBtn.length; i++) {

//   accordionBtn[i].addEventListener('click', function () {

//     const clickedBtn = this.nextElementSibling.classList.contains('active');

//     for (let i = 0; i < accordion.length; i++) {

//       if (clickedBtn) break;

//       if (accordion[i].classList.contains('active')) {

//         accordion[i].classList.remove('active');
//         accordionBtn[i].classList.remove('active');

//       }

//     }

//     this.nextElementSibling.classList.toggle('active');
//     this.classList.toggle('active');

//   });

// }

// // 5 day 1 hour 2 minute 3 second countdown timer
// var countDownDate = new Date("nov 29, 2023 01:02:03").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//  // Get today's date and time
//  var now = new Date().getTime();

//  // Find the distance between now and the count down date
//  var distance = countDownDate - now;

//  // Time calculations for days, hours, minutes and seconds
//  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//  // Display the result in the element with id="demo"
//  document.getElementById("demo").innerHTML = days + "days " + hours + "hour "
//  + minutes + "min " + seconds + "sec ";



//  // If the count down is finished, write some text 
//  if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//  } 
// }, 1000);
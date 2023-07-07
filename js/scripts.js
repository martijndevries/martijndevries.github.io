/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 


const readMoreBtn = document.getElementById('read-more');
const readLessBtn = document.getElementById('read-less');
const moreText = document.getElementById('more-text');
readMoreBtn.addEventListener('click', function() {
  moreText.style.display = 'inline';
  readMoreBtn.style.display = 'none';
  readLessBtn.style.display = 'inline';
});
readLessBtn.addEventListener('click', function() {
  moreText.style.display = 'none';
  readMoreBtn.style.display = 'inline';
  readLessBtn.style.display = 'none';
});

const readMoreBtn1 = document.getElementById('read-more-1');
const readLessBtn1 = document.getElementById('read-less-1');
const moreText1 = document.getElementById('more-text-1');

readMoreBtn1.addEventListener('click', function() {
  moreText1.style.display = 'inline';
  readMoreBtn1.style.display = 'none';
  readLessBtn1.style.display = 'inline';
});

readLessBtn1.addEventListener('click', function() {
  moreText1.style.display = 'none';
  readMoreBtn1.style.display = 'inline';
  readLessBtn1.style.display = 'none';
});

const readMoreBtn2 = document.getElementById('read-more-2');
const readLessBtn2 = document.getElementById('read-less-2');
const moreText2 = document.getElementById('more-text-2');

readMoreBtn2.addEventListener('click', function() {
  moreText2.style.display = 'inline';
  readMoreBtn2.style.display = 'none';
  readLessBtn2.style.display = 'inline';
});

readLessBtn2.addEventListener('click', function() {
  moreText2.style.display = 'none';
  readMoreBtn2.style.display = 'inline';
  readLessBtn2.style.display = 'none';
});


const readMoreBtn3 = document.getElementById('read-more-3');
const readLessBtn3 = document.getElementById('read-less-3');
const moreText3 = document.getElementById('more-text-3');

readMoreBtn3.addEventListener('click', function() {
  moreText3.style.display = 'inline';
  readMoreBtn3.style.display = 'none';
  readLessBtn3.style.display = 'inline';
});

readLessBtn3.addEventListener('click', function() {
  moreText3.style.display = 'none';
  readMoreBtn3.style.display = 'inline';
  readLessBtn3.style.display = 'none';
});


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


var mySwiper = new Swiper('.swiper-container', {
 // Optional parameters
 direction: 'horizontal',
 
 watchSlidesProgress: true,
 watchSlidesVisibility: true,
 slidesPerView: 5,
 breakpoints: {
     100: {
         slidesPerView: 3,
         spaceBetween: 0,
     },
     400: {
         slidesPerView: 4,
         spaceBetween: 0,
     },
     500: {
         slidesPerView: 5,
         spaceBetween: 0,
     },
     768: {
         slidesPerView: 5,
         spaceBetween: 0,
     },
     1024: {
         slidesPerView: 6,
         spaceBetween: 0,
     }
 }
  
  })
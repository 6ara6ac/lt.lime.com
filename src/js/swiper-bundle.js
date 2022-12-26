  // import Swiper bundle with all modules installed
  import Swiper from 'swiper/bundle';

  // import styles bundle
  import 'swiper/swiper-bundle.css'
  import 'swiper/swiper.min.css'


  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    slidesPerView: 4,
    initialSlide: 0,
    setWrapperSize: true,
    resizeObserver: false,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // // when window width is >= 480px
      768: {
        slidesPerView: 4,
      },
      // // when window width is >= 640px
      // 640: {
      //   slidesPerView: 4,
      //   spaceBetween: 40
      // }
    },
  

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hideOnClick: true,
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },

    autoplay: {
      delay: 12000,
    },
  });
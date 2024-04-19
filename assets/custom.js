jQuery(document).ready(function ($) {
    var timer = setInterval(() => {
        if($('.product__main-photos .slick-prev').length>0 || $('.product__main-photos .slick-next').length>0) {
            $('.product__main-photos .slick-prev').append('<svg class="slick-arrow__icon" width="14" height="20" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.22359 0l1.6855 1.63333L3.37101 7l5.53808 5.36667L7.22359 14l-7.2236-7z" fill="#2B2B2B" fill-rule="evenodd"></path></svg>');
            $('.product__main-photos .slick-next').append('<svg class="slick-arrow__icon" width="14" height="20" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg"><path d="M1.6855 0L0 1.63333 5.53808 7 0 12.36667 1.6855 14l7.22359-7z" fill="#2B2B2B" fill-rule="evenodd"></path></svg>');
            clearInterval(timer)
        }
    }, 200);
})
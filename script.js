// Cursor
let mouseCursor = document.querySelector('.cursor');
let navBar = document.querySelectorAll('.gCursor');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navBar.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
    })
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
    })

});

// menu
$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $('.menu').fadeToggle(200);
    });
});

// OwlCarousel
$(".owl-carousel").owlCarousel({
    loop: true, // 循環播放
    margin: 10, // 外距 10px
    nav: false, // 顯示點點
    responsive: {
        0: {
            items: 1 // 螢幕大小為 0~768 顯示 1 個項目
        },
        768: {
            items: 2 // 螢幕大小為 992~769 顯示 1 個項目
        },
        992: {
            items: 3 // 螢幕大小為 1599~992 顯示 3 個項目
        },
        1600: {
            items: 4 // 螢幕大小為 1999~1600 顯示 4 個項目
        },
        2000: {
            items: 5 // 螢幕大小為 2000 以上 顯示 5 個項目
        }
    }
});

// 滑動至頂
$("#top").click(function(){
    $("html,body").animate({scrollTop:0},1000);
});
function chatWa() {
    window.open('https://api.whatsapp.com/send?phone=6281297918007');
}
function menuHp(x) {
    let menu = document.getElementById("navhp");
    if (menu.style.display === "block") {
        menu.style.opacity = "0";
        menu.style.display = "none";
    } else {
        menu.style.opacity = "1";
        menu.style.display = "block";
    }
    x.classList.toggle("change");
}
function slider() {
    var imgs = document.querySelectorAll('.img-slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;
    
    let manual = function(index) {
        imgs.forEach((img) => {
            img.classList.remove('active');
        });
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });

        imgs[index].classList.add('active');
        btns[index].classList.add('active');
    };
    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            manual(i);
            currentSlide = i;
        });
    });

    let auto = () => {
        let aktif = document.getElementsByClassName('active');
        setTimeout(function() {
            [...aktif].forEach((slideAktif) => {
                slideAktif.classList.remove('active');
            });
            imgs[currentSlide].classList.add('active');
            btns[currentSlide].classList.add('active');
            currentSlide++;

            if (imgs.length == currentSlide) {
                currentSlide = 0;
            }
            if (currentSlide >= imgs.length) {
                return;
            }
            auto();
        }, 5000);
    };
    auto();
}
slider();
let topBtn = document.getElementById('scrollTop');
window.onscroll = function() {topBtnMuncul()};
function topBtnMuncul() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = 'block';
        topBtn.style.opacity = 1;
    } else {
        topBtn.style.display = 'none';
        topBtn.style.opacity = 0;
    }
}
function keAtas() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const musicBtn = $('.music-box-btn');
const musicBox = $('.music-box');

musicBox.controls = true;

const preloader = document.getElementById("preloader");
const playButton = document.getElementById("playButton");

const app = {

    preLoader: function () {
        window.addEventListener("load", function () {
            // Khi trang load xong, hiện nút Play
            setTimeout(() => {
                playButton.style.display = "block";
            }, 2000);

            // Khi user bấm Play, ẩn preloader
            playButton.addEventListener("click", function () {
                musicBox.play();
                preloader.style.opacity = "0";
                setTimeout(() => {
                    preloader.style.display = "none";
                    document.body.style.overflow = "auto"; // Cho phép cuộn lại
                }, 300); // Hiệu ứng ẩn dần
            });
        });


    },

    handleEvent: function () {

        musicBtn.onclick = function () {
            if (musicBox.classList.contains('inactive')) {
                musicBox.classList.remove('inactive');
                musicBox.classList.add('active');
            } else {
                musicBox.classList.remove('active');
                musicBox.classList.add('inactive');
            }
        }
    },


    start: function () {
        this.preLoader();
        this.handleEvent();
    }
}

app.start();
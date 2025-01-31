const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const musicBtn = $('.music-box-btn');
const musicBox = $('.music-box');

musicBox.controls = true;

const preloader = document.getElementById("preloader");
const loader = $('.loader');
const playButton = document.getElementById("playButton");
const loadingText = document.getElementById("loadingText");

const app = {

    preLoader: function () {
        window.addEventListener("load", function () {

            // Khi trang load xong, hiện nút Play và text
            setTimeout(() => {
                loader.style.display = "none";
                playButton.style.display = "block";
            }, 2000);
            
            setTimeout(() => {
                loadingText.classList.remove('loadingText-inactive');
                loadingText.classList.add('loadingText-active');
            }, 2500);


            // Khi user bấm Play, ẩn preloader
            playButton.addEventListener("click", function () {
                musicBox.play();
                preloader.style.opacity = "0";
                setTimeout(() => {
                    preloader.style.display = "none";
                    document.body.style.overflow = "auto"; // Cho phép cuộn lại
                }, 500);
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
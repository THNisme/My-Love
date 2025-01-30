const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const musicBtn = $('.music-box-btn');
const musicBox = $('.music-box');

const app = {

    handleEvent: function() {
        musicBtn.onclick = function () {
            if (musicBox.classList.contains('inactive')) {
                musicBox.classList.remove('inactive');
                musicBox.classList.add('active');
            } else  {
                musicBox.classList.remove('active');
                musicBox.classList.add('inactive');
            }
        }
    },
       

    start: function() {
        this.handleEvent();
    }
}

app.start();
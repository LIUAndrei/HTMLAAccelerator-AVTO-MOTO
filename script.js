/* Photo slider logic is below */

        let photoGallery = document.querySelectorAll(".picture-slider__slider img");
        let photoGalleryArry = Array.from(photoGallery);
        let photoFull = document.querySelector(".fullpic__active");
        const buttonNext = document.querySelector('#button-next');
        const buttonPrevious = document.querySelector('#button-previous');
        const photoFullOnLoad = document.querySelector('img[src$="thumbnail-1.png"]'); 
        let photoTarget;
        let photoCurrent = photoFullOnLoad;
        let photoCurrentIndex = 0;


        const buttonPreviousGreyout = function (inx) {
            var buttonPreviousArrow = document.querySelector('#arrow-previous');
            if (inx === 0) {
                buttonPrevious.classList.add('slider__button-inactive');
                buttonPreviousArrow.classList.add('slider__button-inactive');
            } else {
                buttonPrevious.classList.remove('slider__button-inactive');
                buttonPreviousArrow.classList.remove('slider__button-inactive');
            }
        }            

        const buttonNextGreyout = function (inx) {
            var buttonNextArrow = document.querySelector('#arrow-next');
            if (inx === photoGalleryArry.length - 1) {
                buttonNext.classList.add('slider__button-inactive');
                buttonNextArrow.classList.add('slider__button-inactive');
            } else {
                buttonNext.classList.remove('slider__button-inactive');
                buttonNextArrow.classList.remove('slider__button-inactive');
            }
        }        


        const photoFullSrcSwap = function(newpicture) {
            photoFull.src = newpicture.src.replace('thumbnail', 'full-pic');
        }


        buttonNext.addEventListener('click', function(evt) {
            photoCurrentIndex ++;
            photoFullSrcSwap(photoGalleryArry[photoCurrentIndex]);
            buttonPreviousGreyout(photoCurrentIndex);
            buttonNextGreyout(photoCurrentIndex);
        })

        buttonPrevious.addEventListener('click', function(evt) {
            photoCurrentIndex --;
            photoFullSrcSwap(photoGalleryArry[photoCurrentIndex]);
            buttonPreviousGreyout(photoCurrentIndex);
            buttonNextGreyout(photoCurrentIndex);
        })


        photoGalleryArry.forEach(function(thumbnail) {
            thumbnail.addEventListener("click", function(evt) {
                evt.preventDefault();
                photoFullSrcSwap(thumbnail);
                photoCurrent = thumbnail;
                photoCurrentIndex = photoGalleryArry.indexOf(thumbnail);
                buttonPreviousGreyout(photoCurrentIndex);
                buttonNextGreyout(photoCurrentIndex);
            })
        });





/* Modal popup open and close logic is below */

        const activatePopupButton = document.querySelector("#feedback__button");    
        const commentPopup = document.querySelector(".modal");
        const commentGreyoutOverlay = document.querySelector(".greyout-overlay");
        const closePopupButton = document.querySelector(".modal__close-button");

        closePopupButton.addEventListener("click", function() {
            commentPopup.classList.add("modal-visually-hidden");
            commentGreyoutOverlay.classList.add("modal-visually-hidden");
        });


        activatePopupButton.addEventListener("click", function() {
            commentPopup.classList.remove("modal-visually-hidden");
            commentGreyoutOverlay.classList.remove("modal-visually-hidden");
        });

/* switching tabs logic is below */

        const tabButtons = document.querySelectorAll(".tables__buttons button");
        const tabButtonsArry = Array.from(tabButtons);
        const activeTabButton = document.querySelector(".tables__buttons-active");
        const tables = document.querySelectorAll(".table");
        const tablesArry = Array.from(tables);

        tabButtonsArry.forEach(function(button) {
        button.addEventListener("click", function(evt) {

            const tabButtonsIndx = tabButtonsArry.indexOf(button);

            for (var k = 0; k <= tabButtonsArry.length - 1; k++ ) {
                tabButtonsArry[k].classList.remove("tables__buttons-active");
                tabButtonsArry[k].classList.add("tables__buttons-inactive");
                tablesArry[k].classList.remove("tables--active");
                tablesArry[k].classList.add("tables--inactive");
            }
            tabButtonsArry[tabButtonsIndx].classList.remove("tables__buttons-inactive");
            tabButtonsArry[tabButtonsIndx].classList.add("tables__buttons-active");
            tablesArry[tabButtonsIndx].classList.remove("tables--inactive");
            tablesArry[tabButtonsIndx].classList.add("tables--active");

        })
        });

       
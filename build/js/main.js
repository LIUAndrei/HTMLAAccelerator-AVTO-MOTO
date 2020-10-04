/* Photo slider logic is below */

        let photoGallery = document.querySelectorAll('.picture-slider__slider img');
        let photoGalleryArry = Array.from(photoGallery);
        let photoFull = document.querySelector('.fullpic__active');
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
            thumbnail.addEventListener('click', function(evt) {
                evt.preventDefault();
                photoFullSrcSwap(thumbnail);
                photoCurrent = thumbnail;
                photoCurrentIndex = photoGalleryArry.indexOf(thumbnail);
                buttonPreviousGreyout(photoCurrentIndex);
                buttonNextGreyout(photoCurrentIndex);
            })
        });





/* Modal popup open and close logic is below */

        const activatePopupButton = document.querySelector('#feedback__button');    
        const commentPopup = document.querySelector('.modal');
        const commentGreyoutOverlay = document.querySelector('.greyout-overlay');
        const closePopupButton = document.querySelector('.modal__close-button');
        const nameInputField = document.querySelector('#modal__form--name');
        const greyoutOverlay = document.querySelector('.greyout-overlay');

        closePopupButton.addEventListener('click', function() {
            commentPopup.classList.add('modal-visually-hidden');
            commentGreyoutOverlay.classList.add('modal-visually-hidden');
            document.querySelector('body').style.overflow = 'visible';
        });

        document.addEventListener('keydown', function(evt) {
            if (evt.keyCode == 27) {
                commentPopup.classList.add('modal-visually-hidden');
                commentGreyoutOverlay.classList.add('modal-visually-hidden');
                document.querySelector('body').style.overflow = 'visible';
            }
        });

        greyoutOverlay.addEventListener('click', function() {
            commentPopup.classList.add('modal-visually-hidden');
            commentGreyoutOverlay.classList.add('modal-visually-hidden');
            document.querySelector('body').style.overflow = 'visible';
        })



        activatePopupButton.addEventListener('click', function() {
            commentPopup.classList.remove('modal-visually-hidden');
            commentGreyoutOverlay.classList.remove('modal-visually-hidden');
            
            nameInputField.autofocus = true;
            console.log(nameInputField.autofocus);
            document.querySelector('body').style.overflow = 'hidden';
        });

/* switching tabs logic is below */

        const tabButtons = document.querySelectorAll('.tables__buttons button');
        const tabButtonsArry = Array.from(tabButtons);
        const activeTabButton = document.querySelector('.tables__buttons-active');
        const tables = document.querySelectorAll('.table');
        const tablesArry = Array.from(tables);

        tabButtonsArry.forEach(function(button) {
        button.addEventListener('click', function(evt) {

            const tabButtonsIndx = tabButtonsArry.indexOf(button);

            for (var k = 0; k <= tabButtonsArry.length - 1; k++ ) {
                tabButtonsArry[k].classList.remove('tables__buttons-active');
                tabButtonsArry[k].classList.add('tables__buttons-inactive');
                tablesArry[k].classList.remove('table-active');
                tablesArry[k].classList.add('table-inactive');
            }
            tabButtonsArry[tabButtonsIndx].classList.remove('tables__buttons-inactive');
            tabButtonsArry[tabButtonsIndx].classList.add('tables__buttons-active');
            tablesArry[tabButtonsIndx].classList.remove('table-inactive');
            tablesArry[tabButtonsIndx].classList.add('table-active');

        })
        });

       

/* adding a comment off of a popup to the comment section logic is below */

        const commentForm = document.querySelector('#modal__form');
        const commentBox = document.querySelector('#modal__form--comment');
        const feedbackSection = document.querySelector('.tables__feedback');
        const feedbackButtonContainer = document.querySelector('.feedback__button-container');
        const feedbackUnit = document.querySelector('.feedback__unit');


        let feedbackInWork = feedbackUnit.cloneNode(true);
        
        let feedbackName = feedbackInWork.querySelector('cite');
        let feedbackAdvantages = feedbackInWork.querySelector('.plus-minus-advantages');
        let feedbackDrawbacks = feedbackInWork.querySelector('.plus-minus-drawbacks');
        let feedbackComment = feedbackInWork.querySelector('.plus-minus-comment');
        let feedbackStarRating = feedbackInWork.querySelectorAll('.feedback__fivestar img');
        let feedbackStarRatingArry = Array.from(feedbackStarRating);


        const submitButton = commentForm.querySelector('#modal__form--submit');


        let newName = commentForm.querySelector('#modal__form--name');
        let newAdvantage = commentForm.querySelector('#modal__form--qualities');
        let newDrawback = commentForm.querySelector('#modal__form--drawbacks');
        let newComment = commentForm.querySelector('#modal__form--comment');
        let warningLabels = commentForm.querySelectorAll('label');
        let warningLabelsArry = Array.from(warningLabels);

        let starsInPopup =  commentForm.querySelectorAll('.modal__form--stars img');
        let starsInPopupArry = Array.from(starsInPopup);
        let starRating = 0;

        starsInPopupArry.forEach(function(star) {
            star.addEventListener('click', function() {
                for (var i = 0; i <= starsInPopupArry.indexOf(star); i++) {
                    starsInPopupArry[i].src = 'img/RedStar.svg';
                    feedbackStarRatingArry[i].src = 'img/RedStar.svg'
                }
                for (var j = starsInPopupArry.indexOf(star) + 1; j < starsInPopupArry.length; j++) {
                    starsInPopupArry[j].src = 'img/Star.svg';
                    feedbackStarRatingArry[j].src = 'img/Star.svg'
                }
                starRating = starsInPopupArry.indexOf(star);
            })
        })






        submitButton.addEventListener('click', function() {

            if (newName.value === '' || newName.value === null || newComment.value === '' || newComment.value === null) {
                for (var i = 0; i < warningLabelsArry.length; i++) {
                    warningLabelsArry[i].style.display = 'inline';
                } 
            }  
        })





        commentForm.addEventListener('submit', function(evt) {
            evt.preventDefault();

            feedbackName.textContent = newName.value;
            feedbackAdvantages.textContent = newAdvantage.value;
            feedbackDrawbacks.textContent = newDrawback.value;
            feedbackComment.textContent = newComment.value;

            feedbackButtonContainer.after(feedbackInWork);

            newName.value = '';
            newAdvantage.value = '';
            newDrawback.value = '';
            newComment.value = '';


            commentPopup.classList.add('modal-visually-hidden');
            commentGreyoutOverlay.classList.add('modal-visually-hidden');
            document.querySelector('body').style.overflow = 'visible';
        });
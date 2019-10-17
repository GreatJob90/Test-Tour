import $ from 'jquery';

$(document).ready(function () {

    $(".menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });

    let formSlidePersonalData = document.getElementById('personalData'),
        personalDataButton = document.getElementById('personalDataButton'),
        formSlideRules = document.getElementById('rules'),
        formSlideRulesButton = document.getElementById('rulesButton'),
        sliderUnderline = document.getElementById('formSliderMenuUnderline');

    personalDataButton.onclick = () => {
        formSlidePersonalData.style.display = 'flex';
        formSlidePersonalData.className = 'form-slide fade';
        personalDataButton.className = 'form-slider-menu__item form-slider-menu__item_active';
        sliderUnderline.style.transform = 'translateX(0)';
        formSlideRulesButton.className = 'form-slider-menu__item';
        formSlideRules.style.display = 'none';
    }
    
    formSlideRulesButton.onclick = () => {
        formSlideRules.style.display = 'flex';
        formSlideRules.className = 'form-slide fade';
        formSlideRulesButton.className = 'form-slider-menu__item form-slider-menu__item_active';
        sliderUnderline.style.transform = 'translateX(410px)';
        personalDataButton.className = 'form-slider-menu__item';
        formSlidePersonalData.style.display = 'none';
    }

    let modalWindow = document.getElementById('modalWindow'),
        getTour = document.getElementById('getTour'),
        modalClose = document.getElementById('modalClose');

    getTour.onclick = () => {
        modalWindow.style.display = 'block';
        modalWindow.className = 'modal-bg fade';
    }

    modalClose.onclick = () => {
        modalWindow.style.display = 'none';
        modalWindow.className = 'modal-bg';
    }

    let moveX = 0;
    let timer = setTimeout(function topSlideMove() {
        slide.style.transform = `translateX(${moveX = moveX-1920}px)`;
        timer = setTimeout(topSlideMove, 3000);
        if (moveX < -1920) {
            moveX = 1920;
        }
        activeDots()
    }, 2500);
    
    let slideDotFirst = document.getElementById('headSlideDot01'),
        slideDotSecond = document.getElementById('headSlideDot02'),
        slideDotThird = document.getElementById('headSlideDot03'),
        slide = document.getElementById('headSlide');

        slideDotFirst.onclick = () => {
            slideDotFirst.className = 'slider-button__dot slider-button__dot_active';
            slideDotSecond.className = 'slider-button__dot',
            slideDotThird.className = 'slider-button__dot',
            slide.style.transform = 'translateX(0px)';
            clearTimeout(timer);
        }

        slideDotSecond.onclick = () => {
            slideDotFirst.className = 'slider-button__dot';
            slideDotSecond.className = 'slider-button__dot slider-button__dot_active',
            slideDotThird.className = 'slider-button__dot',
            slide.style.transform = 'translateX(-1920px)';
            clearTimeout(timer);
        }

        slideDotThird.onclick = () => {
            slideDotFirst.className = 'slider-button__dot';
            slideDotSecond.className = 'slider-button__dot',
            slideDotThird.className = 'slider-button__dot slider-button__dot_active',
            slide.style.transform = 'translateX(-3840px)';
            clearTimeout(timer);
        }

        function activeDots() {
            if (moveX == 0) {
                slideDotFirst.className = 'slider-button__dot slider-button__dot_active';
                slideDotSecond.className = 'slider-button__dot';
                slideDotThird.className = 'slider-button__dot';
            } else if (moveX == -1920) {
                slideDotFirst.className = 'slider-button__dot';
                slideDotSecond.className = 'slider-button__dot slider-button__dot_active';
                slideDotThird.className = 'slider-button__dot';
            } else {
                slideDotFirst.className = 'slider-button__dot';
                slideDotSecond.className = 'slider-button__dot';
                slideDotThird.className = 'slider-button__dot slider-button__dot_active';
            }
        };

//FEEDBACK FORM

    /* let inputName = document.getElementById('name'),
        inputPhone = document.getElementById('phone'),
        sendBtn = document.getElementById('sendButton'),
        modalWindow = document.getElementById('modalMsg');

    let elements = [inputName, inputPhone],
        placeholders = [
            'Напишите свое имя',
            'Напишите номер телефона'
        ];

    sendBtn.onclick = () => {
        checkForm();
    };

    document.forms[0].onkeydown = function (event) {
        let e = event || window.event;
        if (e.keyCode == 13) {
            e.preventDefault();
            checkForm();
        }
    };

    inputName.onblur = () => {
        clearStyle(inputName, placeholders[0]);
    };
    inputPhone.onblur = () => {
        clearStyle(inputPhone, placeholders[1]);
    };

    function checkForm() {

        if (inputName.value.length == 0) {
            inputAlert(inputName, "*Введите имя");
            return false;

        } else if (inputPhone.value.length == 0) {
            inputAlert(inputPhone, "*Введите телефон");
            return false;

        } else {
            clearStyle(inputName);
            clearStyle(inputPhone);
        }

        let regPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
            validPhone = regPhone.test(inputPhone.value);

        if (!validPhone) {
            inputPhone.value = '';
            inputAlert(inputPhone, "*Формат телефона 8 908 088 0828");
            return false;

        } else {
            sendForm();

            for (let i = 0; i < elements.length; i++) {
                elements[i].value = '';
                clearStyle(elements[i], placeholders[i]);
            }

            modalWindow.className = 'modal-message fade';
            setTimeout(function () {
                modalWindow.className = 'modal-message';
            }, 3000);
        }
    }

    function inputAlert(elem, placeholder) {
        elem.placeholder = placeholder;
        elem.style.border = '2px solid #dc0000';
        elem.style.padding = '0 10px 0 10px';
    }

    function clearStyle(elem, placeholder) {
        elem.placeholder = placeholder;
        elem.style.border = 'none';
        elem.style.borderBottom = '2px solid #000';
    }

    function sendForm() {

        let name = $('input[name = name]').val(),
            phone = $('input[name = phone]').val();

        let data = {
            'user_name': name,
            'user_phone': phone
        };

        $.post('sendmail.php', data,
            function (answer) {
                console.log(answer.text);
            }, 'json');
    } */
});

    
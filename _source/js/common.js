import $ from 'jquery';

/* $(document).ready(function () {

    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });

    $("#next").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });


    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#upButton').fadeIn();
            } else {
                $('#upButton').fadeOut();
            }
        });

        $('#upButton').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
        });
    });

    $('#orderButton').click(function () {
        window.open("https://vk.com/fotogr_magnitogorsk", "_blank");
    });

    $('#saleButton').click(function () {
        window.open("https://vk.com/fotogr_magnitogorsk", "_blank");
    });

    $('#gallery1').click(function () {
        window.open("gallery1.html", "_blank");
    });

    $('#gallery2').click(function () {
        window.open("gallery2.html", "_blank");
    });

    $('#gallery3').click(function () {
        window.open("gallery3.html", "_blank");
    });

    $('#gallery4').click(function () {
        window.open("gallery4.html", "_blank");
    });

    $('#gallery5').click(function () {
        window.open("gallery5.html", "_blank");
    });

    $('#gallery6').click(function () {
        window.open("gallery6.html", "_blank");
    }); */

//FEEDBACK FORM

/*     let inputName = document.getElementById('name'),
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
    }
}); */

    
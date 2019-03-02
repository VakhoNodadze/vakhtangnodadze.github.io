$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText:["<img src='assets/img/arrow.svg'>","<img src='assets/img/arrow.svg' style='transform: rotate(180deg)'>"],
        dots: false,
        responsive:{
            0:{
                items:1
            }
        }
    });

    $(".menu ul a").on("click",function(){
        $(".burger-bar, .menu").removeClass("active")
    });

    $(".burger-bar").on("click",function(){
        $(".burger-bar, .menu").toggleClass("active");
    });

    let $horizontal = $('.car');
    $(window).scroll(function () {
        let s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();
        scrollPercent = (s / d);
        let position = (($(document).width() - $horizontal.width())*scrollPercent);
        position+=$(document).width()/10;
        $horizontal.css({
            'right': position
        });
        if ($(this).scrollTop() > $("#slider").height()) {
            $(".burger-bar").addClass("black-burger");
        } else {
            $(".burger-bar").removeClass("black-burger");
        }
    });

    function validateForm() {
        let x = document.forms["contactForm"]["name"].value;
        if (x == "") {
            alert("Name must be filled out");
            return false;
        }
        else{
            $(".form-success").addClass("active");
            return true;
        }
    }

});

$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
  })


let form = {
    contactForm: "#contactForm",
    formGroupClass: ".input-field",
    errors: [],
    input: {
        name: "#name",
        email: "#email",
        subject: "#subject",
        textarea: "#message",
        radioBtn: ".radio-btn",
    },

    validate:  function() {
        form.errors = [];
        $('.form-error').remove();
        $.each(form.input, function(key, val) {
            if ($(form.contactForm).find(val).attr('type') == 'radio') {
                form.checkRadioButtons(val);
            } else if(!$(form.contactForm).find(val).val()) {
                form.errors.push(val);
            }
        });

        if (form.errors.length > 0) {
            $.each(form.errors, function(key, val){
                let dataError = $(val).data('error');
                $(val).closest(form.formGroupClass).append("<div class='form-error'>"+ dataError +"</div>")
            });
            return false;
        } else {
            $(".form-success").addClass("active");
        }

    },

    checkRadioButtons: function(val) {
        let name = $(form.contactForm).find(val).attr('name');
        if ($('input[name='+ name +']:checked').length <= 0) {
            form.errors.push(val);
        }
    }
}
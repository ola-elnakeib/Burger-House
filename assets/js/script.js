// start custom navbar & custom collapse
$(window).on('scroll', function () {
    let navbar = document.querySelector('.navbar')
    var position = $(window).scrollTop();
    if (position > 55) {
        navbar.classList.add('custom-style');
        navbar.classList.remove('custom-collapse');

    } else {
        navbar.classList.add('custom-collapse');
        navbar.classList.remove('custom-style');
    }
});
// end custom navbar & custom collapse




// start custam collapse icon
let mobileCollapse = document.querySelector('.mobile-collapse');
let navbar = document.querySelector('.navbar');

mobileCollapse.addEventListener('click', () => {
    mobileCollapse.classList.toggle("active");
    navbar.classList.toggle("active");
});
// end custam collapse icon




// start page scrolling to each section 
$(document).on('click', 'a.page-scroll', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top + (-150)
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
// start page scrolling to each section 




// start AOS animation 
AOS.init({
    duration: 1200,
    once: true
});
// end AOS animation 




// start events slider 
$('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: false,
    mobileFirst: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: false,

});
// start events slider 




//==== start form validation ====//
let form = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let date = document.getElementById('date');
let time = document.getElementById('time');
let people = document.getElementById('people');

// prevent & enable default submitting 
form.addEventListener('submit', (event) => {
    validateInputs();
    if (isFormValid() == true) {
        form.submit();
    } else {
        event.preventDefault();
    }

});

function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-control');

    let result = true;

    inputContainers.forEach((element) => {
        if (element.classList.contains('error')) {
            result = false;
        }
    });

    return result;
};



// set validation errors function
function setError(input, message) {
    let inputControl = input.parentElement;
    let errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');

};


// set success validation function
function setSuccess(input) {
    let inputControl = input.parentElement;
    let errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = "";

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// validate name function 
function isValidName(name) {
    let rejex = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
    return rejex.test(String(name));
}

// validate email function 
function isValidEmail(email) {
    let rejex = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    return rejex.test(String(email).toLowerCase());
}

// validate date function 
function isValidDate(date) {
    let rejex = /^(((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))[-/]?[0-9]{4}|02[-/]?29[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;
    return rejex.test(date);
}

// validate time function 
function isValidTime(time) {
    let rejex = /^((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;
    return rejex.test(time);
}

// validate people number function 
function isvalidPeopleNumber(peopleNumber) {
    let rejex = /^\b([1-9]|[12][0-9]|3[0-9]|4[0-9]|50)\b/;
    return rejex.test(Number((peopleNumber)));
}

// validate form inputs function 
function validateInputs() {
    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let dateValue = date.value.trim();
    let timeValue = time.value.trim();
    let peopleValue = people.value.trim();

    if (nameValue === "") {
        setError(name, "Name is required");
    } else if (!isValidName(nameValue)) {
        setError(name, "Enter a valid name");
    } else {
        setSuccess(name);
    }


    if (emailValue === "") {
        setError(email, "Email is required")
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Enter a valid email");
    } else {
        setSuccess(email);
    }


    if (dateValue === "") {
        setError(date, "Date is required")

    } else if (!isValidDate(dateValue)) {
        setError(date, "Enter a valid date");
    } else {
        setSuccess(date);
    }


    if (timeValue === "") {
        setError(time, "Time is required")
    } else if (!isValidTime(timeValue)) {
        setError(time, "Enter a valid time");
    } else {
        setSuccess(time);
    }


    if (peopleValue === "") {
        setError(people, "People number is required")
    } else if (!isvalidPeopleNumber(peopleValue)) {
        setError(people, "People number can be from 1 to 50 per reservation");
    } else {
        setSuccess(people);
    }

};
//==== end form validation ====//




// start date and time pickers  
$(document).ready(function () {
    $('#date').datepicker();
});

$(document).ready(function () {
    $('#time').datetimepicker({
        format: 'LT',
    });
});
// end date and time pickers  




// start scroll to top 
$(document).on('scroll', function () {
    if ($(window).scrollTop() > 450) {
        $('.scroll-up').addClass('show');
    } else {
        $('.scroll-up').removeClass('show');
    }
});

$('.scroll-up').on('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
// end scroll to top 

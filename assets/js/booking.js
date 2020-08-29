//callendar placeholder
$(".date-picker").focus(function() {
    $(this).attr('type', 'date');
});
$(".close").click(function() {
    $('.date-picker').val("");
    $('#departure').attr({
        type: "text",
        placeholder: "Departure Date"
    });
    $('#arrival').attr({
        type: "text",
        placeholder: "Arrival Date"
    });
});
//callendar placeholder


//Validation
$(document).ready(function() {
    $('#registration').validate({
        rules: {
            name: {
                'required': true,
                minlength: 3,
            },
            email: {
                'required': true,
                'email': true
            },
            telephone: {
                'required': true,
                number: true,
                rangelength: [8, 12],
            },
            ticket: {
                'required': true,
                number: true,
                max: 9,
            },
            location: 'required',
            traffic: 'required',
            departure: 'required',
            arrival: 'required'
        },
        messages: {
            name: {
                'required': 'Please enter your first name',
                minlength: 'Your name must be over 3 characters'
            },
            email: {
                'required': 'Please enter your email',
                'email': 'Please enter a valid email'
            },
            telephone: {
                'required': 'Please enter telephone number',
                number: 'Please enter valid number',
                rangelength: 'Your number must be between 8-12 characters',
            },
            ticket: {
                'required': 'Please enter your number of ticket',
                number: 'Your tickets must be a number',
                max: 'There is only 9 seats avalable',
            },
            location: 'Please choose your location',
            traffic: 'Please choose your traffic type',
            departure: 'Please choose your departure date',
            arrival: 'Please choose your arrival date',
        },

    })


})


//Validation

// Auto play modal video
$(function() {
    $(".video").click(function() {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});
// Auto play modal video
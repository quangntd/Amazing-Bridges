function validateFeedback() {
    var comment = document.getElementsByClassName('comment').value;
    swal({
        title: "Thank you!",
        text: "Your feedback has been sent!",
        icon: "success",
        button: "Close",
    });
    return false;
}
// $(document).ready(function(){
    
//     (function($) {
//         "use strict";

    
//     jQuery.validator.addMethod('answercheck', function (value, element) {
//         return this.optional(element) || /^\bcat\b$/.test(value)
//     }, "type the correct answer -_-");

//     // validate contactForm form
//     $(function() {
//         $('#contactForm').validate({
//             rules: {
//                 name: {
//                     required: true,
//                     minlength: 2
//                 },
//                 subject: {
//                     required: true,
//                     minlength: 4
//                 },
//                 number: {
//                     required: true,
//                     minlength: 5
//                 },
//                 email: {
//                     required: true,
//                     email: true
//                 },
//                 message: {
//                     required: true,
//                     minlength: 20
//                 }
//             },
//             messages: {
//                 name: {
//                     required: "come on, you have a name, don't you?",
//                     minlength: "your name must consist of at least 2 characters"
//                 },
//                 subject: {
//                     required: "come on, you have a subject, don't you?",
//                     minlength: "your subject must consist of at least 4 characters"
//                 },
//                 number: {
//                     required: "come on, you have a number, don't you?",
//                     minlength: "your Number must consist of at least 5 characters"
//                 },
//                 email: {
//                     required: "no email, no message"
//                 },
//                 message: {
//                     required: "um...yea, you have to write something to send this form.",
//                     minlength: "thats all? really?"
//                 }
//             },
//             submitHandler: function(form) {
//                 $(form).ajaxSubmit({
//                     type:"POST",
//                     data: $(form).serialize(),
//                     url:"contact_process.php",
//                     success: function() {
//                         $('#contactForm :input').attr('disabled', 'disabled');
//                         $('#contactForm').fadeTo( "slow", 1, function() {
//                             $(this).find(':input').attr('disabled', 'disabled');
//                             $(this).find('label').css('cursor','default');
//                             $('#success').fadeIn()
//                             $('.modal').modal('hide');
// 		                	$('#success').modal('show');
//                         })
//                     },
//                     error: function() {
//                         $('#contactForm').fadeTo( "slow", 1, function() {
//                             $('#error').fadeIn()
//                             $('.modal').modal('hide');
// 		                	$('#error').modal('show');
//                         })
//                     }
//                 })
//             }
//         })
//     })
        
//  })(jQuery)
// })

// Contact form handling script
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        alert('Please fill in all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Send form data
    fetch('send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
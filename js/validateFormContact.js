$.validator.setDefaults({
  submitHandler: function() {
    const data = {
      name: $('#name').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      message: $('#message').val(),
      'g-recaptcha-response': grecaptcha.getResponse(), 
    };

    $.ajax({
      method:'POST',
      url:'./ajax/sendEmail.php',
      data,
      success:function (res) {
        console.log(res)
        if(res == 'success'){
          setTimeout(function(){ $('.success').fadeIn('fast'); }, 3000);
        }
      }
    })
  }
});

$("#appointment-form").validate({
  rules: {
    name: "required",
    email: {
      required: true,
      email: true
    },
   
    message: "required"
  },
  messages: {
    name: "Por favor, escriba su nombre",
    email: "Por favor, introduce una dirección de correo electrónico válida",
    message: "Por favor, Escriba un mensaje"
  }
});
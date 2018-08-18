$('#loginForm').validate({
    rules: {
        username: {
            required: true,
        },
        password: {
            required: true,
        }, 
        },
        messages: {
        username: {
            required: "Required field",
        },
        password: {
            required: "Required field",
        }
    },
    submitHandler: function(form, e) {
    const username =$("#username").val();
    const password =$("#password").val(); 
        $.ajax({
          url: "users.html",
          type: "POST",
          data: {
            username:username,
            password:password
          },
        success: function() {
            swal({
                title: "Welcome to Carrefour!",
                text: "You have logged in successfully",
                icon: "success",
                button: "Let's explore",
            });
        },
        error : function() {
            swal({
                title: "Something went wrong!",
                icon: "error",
                button: "Try again",
            });
        }
        
      });
    }
});
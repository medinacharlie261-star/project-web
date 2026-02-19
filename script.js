$(document).ready(function() {
    $('#submit').click(function() {
        let email = $('.input-field[type="email"]').val();
        let password = $('.input-field[type="password"]').val();

        if (email === "" || password === "") {
            Swal.fire({
            title: 'Oops!',
            text: 'Please fill up the blank!',
            icon: 'error',
            confirmButtonColor: '#d33'
        });

        } else {
            console.log("Email:", email);
            console.log("Password:", password);
            Swal.fire({
            title: 'Success!',
            text: 'Welcome to Eloy"s Meat Shop!',
            icon: 'success',
            confirmButtonColor: '#4CAF50'
            });
        }
    });
});


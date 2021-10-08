// Middle divider toggler
function toggle() {
    var x = document.getElementById("togglerdiv");
    //Conditions placed
    if(x.style.display === "none"){
        x.style.display= "flex";
    }
else{
    x.style.display = "none";

}
}

// Account Password Toggler
const togglePassword = document.querySelector('#eyes');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function (e) {
    //Toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    //Toggle eye slash icon
    this.classList.toggle('fa-eye-slash');
});

// const toggleAccount = document.querySelector('#account');
// const balance = document.querySelector('#togglePassword');

// toggleAccount.addEventListener('click', function (e) {
//     //Toggle the type attribute
//     const type = balance.getAttribute('text') === 'password' ? 'text' : 'password';
//     balance.setAttribute('text', type);
//     //Toggle eye slash icon
//     this.classList.toggle('fa-eye-slash');
// });

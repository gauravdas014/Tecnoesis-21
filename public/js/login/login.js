const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signInForm = document.getElementsByClassName('sign-in-container');
console.log(signInForm)

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	signInForm[0].classList.add("left-panel-active")

});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
	signInForm[0].classList.remove("left-panel-active")
});

function onlyNumberKey(evt) {
          
	// Only ASCII charactar in that range allowed
	var ASCIICode = (evt.which) ? evt.which : evt.keyCode
	if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
		return false;
	return true;
}
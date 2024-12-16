const password = document.getElementById("password");
const mensaje = document.getElementById("mensaje");
const strength = document.getElementById("strength");
const submitButton = document.querySelector("button");

password.addEventListener("input",function(){
	const passwordValue = password.value;
	const passwordLength = passwordValue.length;
	
	let strengthValue = '';
	
	if(password === 0 ){
		strengthValue = '';
	}else if(passwordLength < 6){
		strengthValue = 'Debil';
	}else if(passwordLength < 10){
		strengthValue = 'Medio';
	}else{
		strengthValue = 'Fuerte';
	}
	
	strength.textContent =  strengthValue;
	mensaje.style.display = "block";  //Muestra el mensaje
	
});

submitButton.addEventListener("click",function(){
	const passwordType = password.getAttribute('type');
	
	if(passwordType === 'password'){
		password.setAttribute('type','text');
	}else{
		password.setAttribute('type','password');
	}
});
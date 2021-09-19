document.getElementById('loanForm').addEventListener('submit', function(e){
	document.querySelector(".results").style.display = 'none';

	document.querySelector(".loading").style.display = 'block';
	setTimeout(calculations, 2000);
	e.preventDefault();
});

function calculations(){
	// storing the values
	var amount = document.querySelector("#amount");
	var interest = document.querySelector("#interest");
	var years = document.querySelector("#years");
	var monthlyPayment = document.querySelector("#monthlyPayment");
	var totalPayment = document.querySelector("#totalPayment");
	var totalInterest = document.querySelector("#totalInt");

	const principal = parseFloat(amount.value);
	const calcInterest = parseFloat(interest.value) / 100 / 12;
	const calcPayments = parseFloat(years.value) * 12;


	const x = Math.pow(1 + calcInterest, calcPayments);
	const monthly = (principal*x*calcInterest)/(x-1);

	if(isFinite(monthly)) {
		monthlyPayment.value=monthly.toFixed(2);
		totalPayment.value=(monthly * calcPayments).toFixed(2);
		totalInterest.value=((monthly * calcPayments)-principal).toFixed(2);
		
		


	}else{
		errorAlert('please check your numbers');
		
		

	}





}


function errorAlert(error){
	document.querySelector(".results").style.display = 'none';

	document.querySelector(".loading").style.display = 'none';
	var alertDiv = document.createElement("div");
		alertDiv.className = 'alert alert-danger';
		alertDiv.appendChild(document.createTextNode(error));

		card = document.querySelector('.card');
		heading = document.querySelector('.heading');
		card.insertBefore(alertDiv, heading);
		setTimeout(removeAlert, 3000);
}
function removeAlert(){
	document.querySelector('.alert').remove();
}
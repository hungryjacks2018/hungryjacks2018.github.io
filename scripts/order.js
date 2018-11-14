// Time Picker
$(function () {
  $('#orderTime').datetimepicker({
      format: 'LT'
  });
});

// saving users input into local storage 
var button = document.getElementById('submit'); 
var form = document.getElementById('orderFood');

var orders = []

button.addEventListener('click', (e) => {
	e.preventDefault()	

  let usersName = document.getElementById('usersName').value || undefined
  let x = document.getElementById("foodName").selectedIndex;
  let food = document.getElementsByTagName("option")[x].value || undefined;
	let moment = $("#orderTime").datetimepicker('date') || undefined;
	let time = moment.format("h:mm a");

	let order = {
   		name : usersName,
    	food : food,
    	time  : time	
	}

	orders.push(order);


	// Stores the JavaScript object as a string
	localStorage.setItem('orders', JSON.stringify(orders));

	console.log(localStorage.getItem('orders'))

  form.reset()

  window.location.pathname = '/thankyou.html'

})

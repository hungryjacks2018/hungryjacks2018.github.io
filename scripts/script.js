// VIdeo LightBox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});


window.onload = () => {
  let title = document.getElementById('title');	
  let text = document.getElementById('text');
	let orders_string = localStorage.getItem('orders');
	let orders; 

  orders = JSON.parse(orders_string);

  for (order of orders || []) {
    title.innerHTML = "THANK YOU " + order.name;
    text.innerHTML = "You can grab your " + order.food + " at " + order.time;
	}
}


document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display menu items
  fetch('http://localhost:3000/api/menu')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching menu:', error));


    // Handle order form submission
    document.getElementById('order-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const customerID = document.getElementById('customer-id').value;
        const menuItemID = document.getElementById('menu-item').value;
        const quantity = document.getElementById('quantity').value;

        fetch('http://localhost:3000/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerID,
                menuItemID,
                quantity
            })
        })
            .then(response => response.text())
            .then(message => {
                document.getElementById('status-message').textContent = message;
            });
    });
});

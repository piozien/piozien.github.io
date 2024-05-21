document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    const orderedItemsDiv = document.getElementById('orderedItems');
    const noOrdersText = document.getElementById('noOrdersText');
    const placeOrderBtn = document.getElementById('placeOrderBtn');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const itemName = document.getElementById('itemName').value;
        const quantity = document.getElementById('quantity').value;

        if (itemName && quantity > 0) {
            const orderItem = document.createElement('div');
            orderItem.classList.add('orderItem');

            const itemContent = `
                <img src="https://via.placeholder.com/50" alt="${itemName}">
                <span><strong>${itemName}</strong> - ${quantity} szt.</span>
            `;
            orderItem.innerHTML = itemContent;

            orderedItemsDiv.appendChild(orderItem);

            // Sprawdzenie czy są już dodane zamówienia
            if (noOrdersText.style.display !== 'none') {
                noOrdersText.style.display = 'none';
            }

            // Wyświetlenie przycisku "Zamów"
            placeOrderBtn.style.display = 'block';

            // Resetowanie formularza
            orderForm.reset();
        }
    });

    placeOrderBtn.addEventListener('click', function() {
        // Tutaj można dodać logikę finalizacji zamówienia (np. wysłanie zamówienia do serwera)

        // Wyczyszczenie listy zamówień
        orderedItemsDiv.innerHTML = '<h2>Zamówione dania:</h2>';
        noOrdersText.style.display = 'block';

        // Ukrycie przycisku "Zamów"
        placeOrderBtn.style.display = 'none';

        // Dodanie dodatkowej logiki (np. potwierdzenie zamówienia)
        alert('Zamówienie zostało złożone!');
        window.location.href = 'https://psi-szr.me/płatność.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productDiv = event.target.closest('.product');
            const productName = productDiv.querySelector('h2').textContent;

            alert(`Added "${productName}" to cart! (Functionality could be improved further)`);
        });
    });
});

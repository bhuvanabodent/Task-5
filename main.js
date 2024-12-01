document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count'); // Cart item count in the header
    const cartTableBody = document.querySelector('#cart-table tbody'); // Table body in the cart page
    const cartTotal = document.getElementById('cart-total'); // Total price display in the cart page
  
    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();
  
    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const id = button.dataset.id;
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
  
        // Check if item is already in the cart
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
          alert(`${name} is already in your cart!`);
        } else {
          // Add new item to the cart
          cart.push({ id, name, price });
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCartCount();
          alert(`${name} has been added to your cart!`);
        }
      });
    });
  
    // Populate Cart Table on Cart Page
    if (cartTableBody) {
      if (cart.length === 0) {
        // Show message for empty cart
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="3">Your cart is empty. Start shopping!</td>`;
        cartTableBody.appendChild(row);
      } else {
        // Display items in the cart
        cart.forEach((item, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td><button class="btn-remove" data-index="${index}">Remove</button></td>
          `;
          cartTableBody.appendChild(row);
        });
  
        // Add functionality to Remove buttons
        cartTableBody.addEventListener('click', e => {
          if (e.target.classList.contains('btn-remove')) {
            const index = e.target.dataset.index;
            cart.splice(index, 1); // Remove item from cart array
            localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
            location.reload(); // Reload page to reflect changes
          }
        });
      }
  
      // Calculate and Display Total Price
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      cartTotal.textContent = `Total: ${total.toFixed(2)}`;
    }
  
    // Update Cart Count in Header
    function updateCartCount() {
      cartCount.textContent = cart.length;
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
  
    // Load cart from localStorage and update cart count
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.length;
  });

  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
  
    // Add event listener to handle form submission
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent actual form submission (default behavior)
  
      // Capture form data
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Validate form inputs
      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Simulate form submission
      alert('Thank you for contacting us, ' + name + '! Your message has been received.');
  
      // Optionally, log the form data for debugging
      console.log('Form Data Submitted:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
  
      // Reset the form
      contactForm.reset();
    });
  });
  
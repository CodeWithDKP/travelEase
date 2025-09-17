// main.js

// Select all "Book Now" buttons
const bookButtons = document.querySelectorAll('.btn[data-bs-target="#bookingModal"]');
const destinationInput = document.getElementById('destinationInput');
const bookingForm = document.getElementById('bookingForm');

// Add click event to each button
bookButtons.forEach(button => {
  button.addEventListener('click', () => {
    const destination = button.getAttribute('data-destination');
    destinationInput.value = destination; // Fill modal input with destination
  });
});

// Handle form submission
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Optional: Collect data if needed
  const name = bookingForm.querySelector('input[type="text"]').value;
  const email = bookingForm.querySelector('input[type="email"]').value;
  const date = bookingForm.querySelector('input[type="date"]').value;
  const guests = bookingForm.querySelector('input[type="number"]').value;

  // Show success message (can replace with real backend)
  alert(`Thank you ${name}! Your trip to ${destinationInput.value} has been booked for ${guests} guest(s) on ${date}.`);
  
  bookingForm.reset(); // Reset form after submission
  const bookingModal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
  bookingModal.hide();
});

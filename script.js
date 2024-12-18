document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const car = document.getElementById('car').value;
    const pickup = document.getElementById('pickup').value;
    const returnDate = document.getElementById('return').value;

    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Clear previous messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    // Validation
    if (!name || !email || !phone || !car || !pickup || !returnDate) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please fill in all the fields.';
        return;
    }

    // Check if the return date is after the pick-up date
    const pickupDate = new Date(pickup);
    const returnDateObj = new Date(returnDate);

    if (returnDateObj <= pickupDate) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Return date must be after the pick-up date.';
        return;
    }

    // If validation passes, display success message
    successMessage.style.display = 'block';
    successMessage.innerHTML = `
        Thank you, <strong>${name}</strong>! Your booking for a <strong>${car}</strong> has been CONFIRMED.<br>
        Pick-Up Date: ${pickup}<br>
        Return Date: ${returnDate}<br>
        We will contact you at <strong>${email}</strong> or <strong>${phone}</strong>.
    `;

    // Clear the form fields
    document.getElementById('bookingForm').reset();
});

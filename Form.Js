document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('form').addEventListener('submit', function(event) {
		const name = document.querySelector('#name').value;
		const email = document.querySelector('#email').value;
		const phone = document.querySelector('#phone').value;
		const guests = document.querySelector('#guests').value;
		const date = document.querySelector('#date').value;
		const description = document.querySelector('#description').value;

		if (!name || !email || !guests || !date || !description) {
			alert('Please fill out all fields.');
			event.preventDefault();
			return;
		}

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(email)) {
			alert('Please enter a valid email address.');
			event.preventDefault();
			return;
		}

		const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
		if (!datePattern.test(date)) {
			alert('Please enter a valid date in MM/DD/YYYY format.');
			event.preventDefault();
			return;
		}

		if (!validatePhoneNumber(phone)) {
			alert('Invalid phone number');
			event.preventDefault();
			return;
		}

		if (!validateGuestCount(guests)) {
			alert('Guest count must be greater than 0');
			event.preventDefault();
			return;
		}

		if (!validateDescription(description)) {
			alert('Description cannot be empty');
			event.preventDefault();
			return;
		}

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('guests', guests);
        localStorage.setItem('date', date);
        localStorage.setItem('description', description);

        // Show the modal
		const modal = document.getElementById('successModal');
		const span = document.getElementsByClassName('close')[0];

		modal.style.display = 'block';

		// Close the modal when the user clicks on <span> (x)
		span.onclick = function() {
			modal.style.display = 'none';
		}

		// Close the modal when the user clicks anywhere outside of the modal
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = 'none';
			}
		}

		event.preventDefault(); // Prevent form submission for demonstration purposes

        document.querySelector('form').reset();
	});

	function validatePhoneNumber(phone) {
		// Add phone validation logic here
		return true; // Placeholder
	}

	function validateGuestCount(guests) {
		return guests > 0;
	}

	function validateDescription(description) {
		return description.trim() !== '';
	}
});
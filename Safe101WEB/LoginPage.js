// Existing theme toggle functionality
const themeToggle = document.getElementById('theme-icon');
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
    themeToggle.textContent = isDarkMode ? '🌙' : '🌞';
});

// Existing phone number validation
function validatePhoneNumber(input) {
    let phoneNumber = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (phoneNumber.length > 10) {
        phoneNumber = phoneNumber.slice(0, 10); // Limit to 10 digits
    }
    input.value = `${phoneNumber}`;
}

document.getElementById('phone').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10); // Allow only numbers and limit to 10 digits
    this.value = `${this.value}`;
});

// New validation for Start your safety journey button
const startJourneyButton = document.querySelector('.start-journey');
const phoneInput = document.getElementById('phone');

startJourneyButton.addEventListener('click', () => {
    if (phoneInput.value.length === 10) {
        window.location.href = 'OtpPage.html'; // Redirect to another HTML page
    } else {
        alert('Please enter a 10-digit phone number.');
    }
});

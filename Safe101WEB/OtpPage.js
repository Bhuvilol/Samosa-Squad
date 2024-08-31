document.addEventListener('DOMContentLoaded', () => {
    alert('OTP has been Sent to Your Mobile Number');
    
    const otpInputs = document.querySelectorAll('.otp-input');
    
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            } else if (value.length === 0 && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });

    document.getElementById('verify-btn').addEventListener('click', () => {
        const otpValues = Array.from(otpInputs).map(input => input.value).join('');
        if (otpValues.length === 4) {
            alert('OTP Verified Successfully');
            // Redirect to another page or perform further actions
            // window.location.href = 'nextPage.html';
        } else {
            alert('Please enter a 4-digit OTP.');
        }
    });
});
document.getElementById("verify-btn").addEventListener("click", function() {
    // Here you can add validation logic if needed.
    
    // Redirect to Home.html
    window.location.href = "Home.html";
});

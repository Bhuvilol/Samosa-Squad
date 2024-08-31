document.addEventListener('DOMContentLoaded', function () {
    // Handle tab switching
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            tabContents.forEach(content => {
                if (content.id === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // Set default active tab (General Settings)
    const defaultTab = 'general';
    document.querySelector(`.tab-button[data-tab="${defaultTab}"]`).click();

    // Handle contact addition
    document.getElementById('add-contact').addEventListener('click', function () {
        const name = document.getElementById('contact-name').value;
        const phone = document.getElementById('contact-phone').value;
        const relation = document.getElementById('contact-relation').value;

        if (name && phone && relation) {
            const contactList = document.getElementById('contact-list');

            // Create a new contact item
            const contactItem = document.createElement('div');
            contactItem.classList.add('contact-item');
            contactItem.innerHTML = `
                <strong>${name}</strong><br>
                Phone: ${phone}<br>
                Relation: ${relation}
            `;

            // Add to contact list
            contactList.appendChild(contactItem);

            // Clear the input fields
            document.getElementById('contact-name').value = '';
            document.getElementById('contact-phone').value = '';
            document.getElementById('contact-relation').value = '';
        } else {
            alert('Please fill in all contact details.');
        }
    });
});


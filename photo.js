document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and dialog elements
    const closeModalButton = document.getElementById('closeModalButton');
    const modal = document.getElementById('modal-photo');
    const body = document.body;
    
    // Get references to the open modal buttons and their corresponding content elements
    const modalButtons = [
        { button: document.getElementById('popup_summermilkshake2023'), content: document.getElementById('info_summermilkshake2023') },
        { button: document.getElementById('popup_perfect-man'), content: document.getElementById('info_perfect-man') },
        { button: document.getElementById('popup_on-the-ropes'), content: document.getElementById('info_on-the-ropes') },
        { button: document.getElementById('popup_cries-of-lies'), content: document.getElementById('info_cries-of-lies') },
        { button: document.getElementById('popup_cabbie'), content: document.getElementById('info_cabbie') },
        { button: document.getElementById('popup_purple'), content: document.getElementById('info_purple') },
        { button: document.getElementById('popup_ftgwarehouse'), content: document.getElementById('info_ftgwarehouse') },
        { button: document.getElementById('popup_dudes-at-the-surfshop'), content: document.getElementById('info_dudes-at-the-surfshop') },
    ];

    // Add event listeners to open the dialog when buttons are clicked
    modalButtons.forEach(({ button, content }) => {
        button.addEventListener('click', () => {
            modalButtons.forEach(({ content }) => {
                content.style.display = 'none';
            });
            content.style.display = 'block';
            modal.showModal();
            body.classList.add('no-scroll'); 
        });
    });

    // Add an event listener to close the dialog when the close button is clicked
    closeModalButton.addEventListener('click', () => {
        modal.close();
        body.classList.remove('no-scroll');
    });
});
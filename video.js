document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and dialog elements
    const closeModalButton = document.getElementById('closeModalButton');
    const modal = document.getElementById('modal');
    
    // Get references to the open modal buttons and their corresponding content elements
    const modalButtons = [
        { button: document.getElementById('popup_n64'), content: document.getElementById('info_n64') },
        { button: document.getElementById('popup_cc'), content: document.getElementById('info_cc') },
        { button: document.getElementById('popup_codemy'), content: document.getElementById('info_codemy') },
        { button: document.getElementById('popup_localonly'), content: document.getElementById('info_localonly') },
        { button: document.getElementById('popup_damaris1'), content: document.getElementById('info_damaris1') },
        { button: document.getElementById('popup_damaris2'), content: document.getElementById('info_damaris2') },
        { button: document.getElementById('popup_coffeecomic'), content: document.getElementById('info_coffeecomic') },
        { button: document.getElementById('popup_pulp'), content: document.getElementById('info_pulp') }
    ];

    // Add event listeners to open the dialog when buttons are clicked
    modalButtons.forEach(({ button, content }) => {
        button.addEventListener('click', () => {
            modalButtons.forEach(({ content }) => {
                content.style.display = 'none';
            });
            content.style.display = 'block';
            modal.showModal();
        });
    });

    // Add an event listener to close the dialog when the close button is clicked
    closeModalButton.addEventListener('click', () => {
        modal.close();
    });
});
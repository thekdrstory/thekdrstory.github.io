document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and dialog elements
    const closeModalButton = document.getElementById('closeModalButton');
    const modal = document.getElementById('modal');
    
    // Get references to the open modal buttons and their corresponding content elements
    const modalButtons = [
        { button: document.getElementById('popup_portraits'), content: document.getElementById('info_portraits') },
        { button: document.getElementById('popup_landscapes'), content: document.getElementById('info_landscapes') },
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
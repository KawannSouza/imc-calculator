const modals = document.querySelectorAll('.modal');
const infos = document.querySelectorAll('.info');
const closeModal = document.querySelectorAll('.btn-close');

infos.forEach(info => {
    info.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.style.display = "flex";
        });
    });
});

closeModal.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.style.display = "none";
        });
    });
});
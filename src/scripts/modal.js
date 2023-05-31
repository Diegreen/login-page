/* Desenvolva seu código aqui... */
function showModal() {
    const btnCadastrar = document.querySelector('.btn-cadastrar');
    const modalContainer = document.querySelector('#modalContainer');
    const modalBackground = document.querySelector('.modal-background');

  
    btnCadastrar.addEventListener('click', () => {
        modalContainer.showModal();
        modalBackground.classList.add('modal-background--show');
        closeModal();
    });
}

function closeModal() {
    const closeModal = document.querySelector('.modal__input-button');
    const modalContainer = document.querySelector('#modalContainer');
    const modalBackground = document.querySelector('.modal-background');
  
    closeModal.addEventListener('click', () => {
        modalContainer.close();
        modalBackground.classList.remove('modal-background--show');
    });
}

showModal();


let heroBTN = document.querySelector('.hero-btn')
let modal = document.querySelector('.modal')
let modalBTN = document.querySelector('.modal-btn')
let closeModal = document.querySelector('.close-modal')


heroBTN.addEventListener('click', () => {

  modal.classList.add('show-modal')
 

})

modalBTN.addEventListener('click', () => {

  modal.classList.remove('show-modal')
 

})

closeModal.addEventListener('click', () => {

  modal.classList.remove('show-modal')
 

})





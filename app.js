// For search modal opening
const openSearchModal = document.querySelector('.modal');
const openModalButton = document.querySelector('.search-button');
const closeModalButton = document.querySelector('.cross');
const openFavoriteModal = document.querySelector('.star');
const favoriteModal = document.querySelector('.favorite-container');
const cancelFavorites = document.querySelector('.cancel-favorites');

openModalButton.addEventListener('click', () => {
    openSearchModal.style.display = 'block'
    document.body.style.overflowY = 'hidden'
})

closeModalButton.addEventListener('click', () => {
    openSearchModal.style.display = 'none'
    // document.body.style.overflowY = 'auto'
})

openFavoriteModal.addEventListener('click', () => {
    favoriteModal.style.display = 'block'
})

cancelFavorites.addEventListener('click', () => {
    favoriteModal.style.display = 'none'
})

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// console.log(galleryItems);

const galleryContainer = document.querySelector('.js-gallery');

const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCardsMarkup);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    }).join('');
};

const lightbox = new SimpleLightbox('.js-gallery a', {
    captionsData: 'alt',
    captionsPosition: 'bottom',
    captionsDelay: 250,
});

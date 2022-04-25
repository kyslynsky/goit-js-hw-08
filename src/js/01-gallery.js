// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryBlockEl = document.querySelector('.gallery');

const makeGalleryMarkup = ({ preview, original, description }) => {
  return `
    <li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join('');

galleryBlockEl.insertAdjacentHTML('afterbegin', makeGallery);

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  enableKeyboard: true,
});

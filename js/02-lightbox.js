import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeGalleryItems = element => {
  const { preview, original, description } = element;
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /> </a>`;
};
const gallery = document.querySelector('.gallery');
const makeGallery = galleryItems.map(makeGalleryItems).join('');
gallery.innerHTML = makeGallery;

let lightbox = new SimpleLightbox('.gallery a', {
  close: true,
  captions: true,
  captionsData: 'alt',
  captionDelay: '250',
  captionPosition: 'bottom',
  showCounter: true,
  doubleTapZoom: 2,
});
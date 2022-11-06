import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeGalleryItems = element => {
  const { preview, original, description } = element;

  return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
};

const gallery = document.querySelector('.gallery');

const makeGallery = galleryItems.map(makeGalleryItems).join('');
gallery.innerHTML = makeGallery;

const instance = basicLightbox.create(
  `<img class="modal-img" src= ''>`,
  {
    onShow: () => window.addEventListener('keydown', onEscButtonPress),
  },
  {
    onClose: () => window.addEventListener('keydown', onEscButtonPress),
  },
);
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return
  }
  instance.element().querySelector('.modal-img').src = e.target.dataset.source;
  instance.show();
});
function onEscButtonPress(e) {
  if (e.key === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', onEscButtonPress);
  }
}

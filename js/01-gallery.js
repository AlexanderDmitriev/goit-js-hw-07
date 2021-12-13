/* Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

    1) Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
    2) Реализация делегирования на div.gallery и получение url большого изображения.
    3) Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr 
и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
    4) Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
    5) Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку 
модального окна с изображением из примеров библиотеки basicLightbox.
 */

import { galleryItems } from './gallery-items.js';
// Change code below this line

const href = {
  galleryList: document.querySelector('.gallery'),
}

const imageFromGallery = galleryItems.map(image => `<div class="gallery__item">
  <a class="gallery__link" href=${image.original}>
    <img 
      class="gallery__image"
      src=${image.preview}
      data-source=${image.original}
      alt=${image.description}
    />
 </a>
</div>`).join('');

href.galleryList.insertAdjacentHTML('afterBegin', imageFromGallery);

let currentImage;

const imagesHandler = (event) => {

  const escHandler = (event) => {
    if (event.key === 'Escape') {instance.close();}
  }
  
  event.preventDefault();
  
   if (event.target.nodeName !== "IMG") {
    return;
  } 

  currentImage = event.target.dataset.source;
  
  const instance = basicLightbox.create
    (`<img src="${currentImage}">`);
  
  instance.show();
  window.addEventListener('keydown', escHandler, 'once');
 }

href.galleryList.addEventListener('click', imagesHandler);






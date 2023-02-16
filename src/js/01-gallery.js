// Add imports above this line
import { galleryItems } from './gallery-items';

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryArr = document.querySelector(".gallery");

const createGallery = (items) => {
    return items.map((item) => `
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" 
            src="${item.preview}"
            alt="${item.description}"
        >
    </a>`).join("");
}
galleryArr.innerHTML = createGallery(galleryItems)

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
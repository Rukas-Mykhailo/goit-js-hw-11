import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader-container');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="info">
            <p class="info-item"><b>Likes</b><span>${likes}</span></p>
            <p class="info-item"><b>Views</b><span>${views}</span></p>
            <p class="info-item"><b>Comments</b><span>${comments}</span></p>
            <p class="info-item"><b>Downloads</b><span>${downloads}</span></p>
          </div>
        </a>
      </li>`
    )
    .join('');
}

export function renderGallery(images) {
  galleryList.style.display = 'flex';
  const markup = createGallery(images);
  galleryList.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryList.innerHTML = '';
  galleryList.style.display = 'none';
}

export function showLoader() {
  loader.style.display = 'flex';
}

export function hideLoader() {
  loader.style.display = 'none';
}

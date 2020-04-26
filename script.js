const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Нургуш',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
  },
  {
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
  },
  {
    name: 'Остров Желтухина',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
  },
  {
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
  }
];

const container = document.querySelector('.places-list');
const buttonOpenerNewCard = document.querySelector('.user-info__button');
const popup = document.querySelector('.popup');
const popupCloser = document.querySelector('.popup__close');
const form = document.forms.new;





function createCard(link, name) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('place-card');

  const cardImage = document.createElement('div');
  cardImage.classList.add('place-card__image');
  cardImage.setAttribute('style', `background-image: url(${link})`);

  const buttonDelete = document.createElement('button');
  buttonDelete.classList.add('place-card__delete-icon');

  const cardDescription = document.createElement('div');
  cardDescription.classList.add('place-card__description');

  const cardName = document.createElement('h3');
  cardName.classList.add('place-card__name');
  cardName.textContent = name;

  const buttonLike = document.createElement('button');
  buttonLike.classList.add('place-card__like-icon');


  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardDescription);
  cardImage.appendChild(buttonDelete);
  cardDescription.appendChild(cardName);
  cardDescription.appendChild(buttonLike);

  return cardContainer;
}

initialCards.forEach(function (item) {
  container.appendChild(createCard(item.link, item.name));
});


function likeHandler(event) {
  if (event.target.classList.contains('place-card__like-icon')) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }
}

function popupToggleHandler() {
  popup.classList.toggle('popup_is-opened');
}

function addNewCard(event) {
  event.preventDefault();

  const name = form.elements.name.value;
  const link = form.elements.link.value;
  const cardsContainer = createCard(link, name);

  container.appendChild(cardsContainer);
  form.reset();
  popupToggleHandler();
}

function removeHandler(event) {
  if (event.target.classList.contains('place-card__delete-icon')) {
    const parent = event.target.closest('.place-card');
    container.removeChild(parent);
  }
}



container.addEventListener('click', likeHandler);
buttonOpenerNewCard.addEventListener('click', popupToggleHandler);
popupCloser.addEventListener('click', popupToggleHandler);
form.addEventListener('submit', addNewCard);
container.addEventListener('click', removeHandler);

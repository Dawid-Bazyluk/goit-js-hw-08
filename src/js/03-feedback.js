import _ from 'lodash';

const formElement = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
formElement.addEventListener('submit', e => {
  e.preventDefault();
  Array.from(formElement.elements).forEach(el => {
    if (el.name) {
      localStorage.setItem(el.name, el.value);
    }
  });
});

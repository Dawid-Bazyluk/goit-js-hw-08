import _ from 'lodash';

const formElement = document.querySelector('.feedback-form');

formElement.addEventListener('submit', e => {
  e.preventDefault();
  Array.from(formElement.elements).forEach(el => {
    if (el.name) {
      localStorage.setItem('feedback-form-state', JSON.stringify(el.value));
    }
  });
});

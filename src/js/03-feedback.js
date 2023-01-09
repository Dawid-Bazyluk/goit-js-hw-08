import _ from 'lodash';

const STORAGE_KEY = 'feedback-form-state';
const inputForm = document.querySelector('.feedback-form');
const inputText = inputForm.querySelector('label > textarea');
const inputEmail = inputForm.querySelector(`label > input`);
const saveInput = () => {
  const storedInput = {
    email: inputEmail.value,
    message: inputText.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storedInput));
};

inputForm.addEventListener('input', _.throttle(saveInput, 500));

const storedValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (localStorage.getItem(STORAGE_KEY) === null) {
  inputEmail.value = "";
  inputText.value = "";
} else {
  inputEmail.value = storedValue.email;
  inputText.value = storedValue.message
  }
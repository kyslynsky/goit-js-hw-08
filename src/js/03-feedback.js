import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onSubmit);
refs.input.addEventListener('input', saveEmail);
refs.textarea.addEventListener('input', saveMessage);

function onSubmit(e) {
  e.preventDefault();

  //   const {
  //     elements: { email, message },
  //   } = e.currentTarget;

  //   console.log(email.value);
  //   console.log(message.value);
  e.currentTarget.reset();
}

// створити об'єкт в середині ф-ї і записати в значення email.value, message.value


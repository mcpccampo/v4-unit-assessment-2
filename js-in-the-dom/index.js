// variables
let emailList = [];

// elements
const formBtn = document.querySelector('#close-form');
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const formContainer = document.querySelector('.form-container');

// worker functions
const toggler = function (event) {
  form.classList.toggle('hide');
  console.log(formBtn.innerText);
  formBtn.innerText === 'X' ? (formBtn.innerText = '+') : (formBtn.innerText = 'X');
};

const validateForm = function (event) {
  if (!nameInput.value && !emailInput.value) {
    nameInput.className = 'empty';
    emailInput.className = 'empty';
    alert('must enter correct info');
  } else if (!nameInput.value) {
    nameInput.className = 'empty';
    alert('must enter correct info');
  } else if (!emailInput.value) {
    emailInput.className = 'empty';
    alert('must enter correct info');
  } else {
    event.preventDefault();
    emailList.push({ name: nameInput.value, emai: emailInput.value });
    nameInput.value = '';
    emailInput.value = '';
    displayThankYou(event);
  }
};

const displayThankYou = function (event) {
  formContainer.innerText = 'thank you for Subscribing!...';
};

// events
formBtn.addEventListener('click', toggler);
form.addEventListener('submit', validateForm);

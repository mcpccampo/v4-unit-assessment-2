// elements
const formBtn = document.querySelector('#close-form');
const form = document.querySelector('form');

// hide form
function toggler(event) {
  form.classList.toggle('hide')
  formBtn.innerHTML === "X" ? formBtn.innerHTML = "+" : formBtn.innerHTML = "X"
}

// click event
formBtn.addEventListener('click', toggler);

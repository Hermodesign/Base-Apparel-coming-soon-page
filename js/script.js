function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.querySelector('.btn').addEventListener('click', function () {
  const emailInput = document.querySelector('.input');
  const errorMsg = document.querySelector('.errorMsg');
  const btnMsg = document.querySelector('.btn');

  const enteredEmail = emailInput.value;

  if (isValidEmail(enteredEmail)) {
    errorMsg.classList.add('hidden');
    emailInput.classList.remove('inputError');
    btnMsg.classList.remove('btn-error');
  } else {
    errorMsg.classList.remove('hidden');
    emailInput.classList.add('inputError');
    btnMsg.classList.add('btn-error');
  }
});

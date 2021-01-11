import { saveSubscriptorDatainLS, emailExists } from '../services/localStorageSubscriptors.js';
import showInvalidEmail from './displayValidations.js';
import showSuccessPopUp from './popUps.js';

function addFormEvent() {
  const $registrationForm = document.getElementById('registrationForm');
  $registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (emailExists(formData.get('email'))) {
      showInvalidEmail();
      return undefined;
    }
    saveSubscriptorDatainLS(formData);
    showSuccessPopUp();
    $registrationForm.reset();
  });
}

export default function getDataFromUser() {
  addFormEvent();
}

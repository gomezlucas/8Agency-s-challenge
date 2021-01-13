import { saveSubscriptorDatainLS, emailExists } from '../services/localStorageSubscriptors.js';
import showInvalidEmail from './displayValidations.js';
import showSuccessPopUp from './popUps.js';

function addFormEvent() {
  const $registrationForm = document.getElementById('registrationForm');
  $registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = formData.get('name');
    const lastName = formData.get('lastName');
    const country = formData.get('country');
    const email = formData.get('email');
    const telephone = formData.get('telephone');
    const job = formData.get('job');

    const subscriptorObject = {
      name, lastName, country, email, telephone, job,
    };

    fetch('https://telecomevento-back.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(subscriptorObject),
    })
      .then((res) => {
        if (res.status === 200) {
          saveSubscriptorDatainLS(subscriptorObject);
          $registrationForm.reset();
          showSuccessPopUp();
        } else {
          showInvalidEmail();
        }
      })
      .catch((error) => console.log('Problem with the server', error));
  });
}

export default function getDataFromUser() {
  addFormEvent();
}

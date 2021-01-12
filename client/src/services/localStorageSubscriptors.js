export function saveSubscriptorDatainLS(newSubscriptor) {
  const key = 'subscriptors';

  if (localStorage.getItem(key)) {
    const arraySubcriptors = JSON.parse(localStorage.getItem(key));
    arraySubcriptors.push(newSubscriptor);
    localStorage.setItem(key, JSON.stringify(arraySubcriptors));
  } else {
    localStorage.setItem(key, JSON.stringify([newSubscriptor]));
  }
}

export function loadSubscriptorsFromDB() {
  const key = 'subscriptors';

  fetch('http://localhost:3001/subscriptors', {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
        console.log(res, 'the res is');
        localStorage.setItem(key, JSON.stringify(res));
      } else {
        localStorage.setItem(key, JSON.stringify(res));
      }
    })
    .catch((error) => console.log('Problem with the server', error));
}

/* Check if the email exist in LocalStorage. Currentrly checking from in the Back */
export function emailExists(email) {
  const key = 'subscriptors';
  const arraySubcriptors = JSON.parse(localStorage.getItem(key));
  if (!arraySubcriptors) {
    return false;
  }
  const subscriptorObj = arraySubcriptors.filter((subscriptor) => subscriptor.email.toLowerCase() === email.toLowerCase())[0];
  if (subscriptorObj) {
    return true;
  }

  return false;
}

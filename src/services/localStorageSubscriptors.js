export function saveSubscriptorDatainLS(dataForm) {
  const key = 'subscriptors';
  const name = dataForm.get('name');
  const lastname = dataForm.get('lastName');
  const country = dataForm.get('country');
  const email = dataForm.get('email');
  const telephone = dataForm.get('telephone');
  const job = dataForm.get('job');

  const newSubscriptor = {
    name, lastname, country, email, telephone, job,
  };

  if (localStorage.getItem(key)) {
    const arraySubcriptors = JSON.parse(localStorage.getItem(key));
    arraySubcriptors.push(newSubscriptor);
    localStorage.setItem(key, JSON.stringify(arraySubcriptors));
  } else {
    localStorage.setItem(key, JSON.stringify([newSubscriptor]));
  }
}

export function emailExists(email) {
  const key = 'subscriptors';
  const arraySubcriptors = JSON.parse(localStorage.getItem(key));
  if (arraySubcriptors.length === 0) {
    return false;
  }
  
  const subscriptorObj = arraySubcriptors.filter((subscriptor) => subscriptor.email.toLowerCase() === email.toLowerCase())[0];
  if (subscriptorObj) {
    return true;
  }

  return false;
}

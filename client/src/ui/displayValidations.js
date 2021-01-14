export default function showInvalidEmail() {
  const $emailInput = document.querySelector('input[type="email"]');
  $emailInput.classList.add('is-invalid');
  setTimeout(() => {
    $emailInput.classList.remove('is-invalid');
  }, 3000);
}

 import Swal from '../../node_modules/sweetalert2/src/sweetalert2.js';

export default function showSuccessPopUp() {
  Swal.fire({
    title: 'Bienvenido!',
    text: 'Tu Email ha sido guardado satisfatoriamente, te esperamos!',
    icon: 'success',
    confirmButtonText: 'ok',
  });
}

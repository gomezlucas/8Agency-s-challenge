import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@10.13.0/src/sweetalert2.js';
 
export default function showSuccessPopUp() {
   Swal.fire({
    title: 'Bienvenido!',
    text: 'Tu Email ha sido guardado satisfatoriamente, te esperamos!',
    icon: 'success',
    confirmButtonText: 'ok',
  });
}

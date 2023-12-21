import Swal from "sweetalert2"


const SweetAlert = (type, title, text, timer = 2000) => {
  return Swal.fire({
        icon: "type",
        title: title,
        text: text,
        showConfirmButton: false,
        timer: timer
  });
}

export default SweetAlert

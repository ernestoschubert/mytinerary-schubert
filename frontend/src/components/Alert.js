import Swal from "sweetalert2"

const Alert = (icon, title) => {
    const toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    toast.fire({
        icon: icon,
        title: title
    })
}

export default Alert;

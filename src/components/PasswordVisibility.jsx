import showImage from '../assets/images/showImage.png'
import hideImage from '../assets/images/hideImage.png'
export default function togglePasswordVisibility() {
    var passwordInput = document.getElementById('passwordField');
    var toggleIcon = document.getElementById('togglePassword');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.innerHTML = `<img src="${hideImage}" id="togglePassword" alt="Hide">`;
    } else {
        passwordInput.type = 'password';
        toggleIcon.innerHTML = `<img src="${showImage}" id="togglePassword" alt="Show">`;
    }
}
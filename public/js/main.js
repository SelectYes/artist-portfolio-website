console.log('Connected to main.js');

// HANDLE FORM SUMBIT:

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA5-PgDZ_OOvf2OnARBtNywhxUHPzgjSsQ",
    authDomain: "contactform-1b2a4.firebaseapp.com",
    databaseURL: "https://contactform-1b2a4.firebaseio.com",
    projectId: "contactform-1b2a4",
    storageBucket: "contactform-1b2a4.appspot.com",
    messagingSenderId: "32926547598",
    appId: "1:32926547598:web:d9ed648ca205695e8193df"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference contact info collections
let contactInfo = firebase.database().ref("info");

// Listen for submit
const contactForm = document.querySelector(".form-container");
contactForm.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    
    // GET IMPUT VALUES:
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    saveContactInfo(name, email, subject, message);

    contactForm.reset();
}

function saveContactInfo(name, email, subject, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    })
}
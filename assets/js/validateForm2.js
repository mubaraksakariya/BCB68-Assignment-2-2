const contactForm = document.getElementById("contactForm").addEventListener("submit", validateForm);


function validateForm(event) {
    event.preventDefault()
    // validating email 
    let y = document.forms["myForm"]["Email"].value;
    let p = document.forms["myForm"]["PhoneNumber"].value;
    var phoneno = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    var emailId = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (!emailId.test(y)){
        alert("Enter a valid Email id. dont forget to add '@'");
        document.getElementById("message").innerHTML = "Enter a valid Email id. dont forget to add '@'"
        return false;
    }
    
    // validating phone number
    
    else if(!phoneno.test(p)){
        alert("Ener a valid phone number, 10 digits");
        document.getElementById("message").innerHTML = "Ener a valid phone number, 10 digits"
        return false;
    }
    else
        document.getElementById("message").innerHTML = "Your message has been sent. Thank you!";

    // Sending Data to google sheet
    var form = document.getElementById('contactForm');
    var xhr = new XMLHttpRequest();
    var data = new FormData(form);
    console.log(data);
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbyklALaQ_QV_dZ0RFuBqF6VAba4HEKu6RSN77f730dCw6cnFQfQJWuRsdpwUnSNYz0jrg/exec',true)
    xhr.send(data);
    form.reset();
    return true;
}
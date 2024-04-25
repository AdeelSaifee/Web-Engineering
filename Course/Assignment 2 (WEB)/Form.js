
function validateForm() {

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let phone = document.getElementById("phone").value;
    let zipCode = document.getElementById("zipCode").value;
    let email = document.getElementById("email").value;
    let reTypeEmail = document.getElementById("reTypeEmail").value;

    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    let createAccount = document.querySelector('input[name="yes-no"]:checked').value;
    let addressType = document.querySelector('input[name="home-business"]:checked').value;
    let shipToBilling = document.querySelector('input[name="orderYes-orderNo"]:checked').value;

    // Client-side validation
    if (firstName === "" || lastName === "" || address === "" || city === "" || phone === "" || zipCode === "" || email === "" || reTypeEmail === "") {
        alert("Please fill in all the required fields.");
        return false;
    }

    if (!(/^\d{5}$/.test(zipCode))) {
        alert("Zip code must be of 5 digits.");
        return false;
    }

    if (!(/^\d{11}$/.test(phone))) {
        alert("Phone number must be of 11 digits.");
        return false;
    }

    if (email !== reTypeEmail) {
        alert("Email and Re-type Email must match.");
        return false;
    }

    // Regular expression pattern for email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (createAccount !== "yes" || shipToBilling !== "order") {
        alert("Please select 'Yes' for all radio button options.");
        return false;
    }

    let formData = {
        "First Name": firstName,
        "Last Name": lastName,
        "Address": address,
        "City": city,
        "Phone": phone,
        "Zip Code": zipCode,
        "Email": email,
        "Re-type Email": reTypeEmail,
        "State": state,
        "Country": country,
        "Create Account": createAccount,
        "Address Type": addressType,
        "Ship to Billing": shipToBilling
    };

    let jsonData = JSON.stringify(formData, null, 2);
    document.write("<pre>" + jsonData + "</pre>");

    return false;
}

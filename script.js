"use strict";


const password = document.querySelector(".password");
const confirm_password = document.querySelector(".confirm-password");

const btn_create_account = document.querySelector(".create-account");
btn_create_account.addEventListener("click", createAccount);

function createAccount() {
    const str_password = password.value;
    const str_confirm_password = confirm_password.value;
    if (str_password !== str_confirm_password) {
        password.setCustomValidity("Invalid field.");
        confirm_password.setCustomValidity("Invalid field.");
        
        const form_password = document.querySelector(".input-password");
        let error_message = document.createElement("p");
        error_message.className = "error-message";
        form_password.appendChild(error_message);

        error_message.innerText = "*Passwords do not match";
        error_message.style.color = "red";
    }
}
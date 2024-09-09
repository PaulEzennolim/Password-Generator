// Selecting DOM elements based on their IDs
const password_el = document.querySelector('#password');
const length_el = document.querySelector('#length');   
const uppercase_el = document.querySelector('#uppercase'); 
const lowercase_el = document.querySelector('#lowercase');
const numbers_el = document.querySelector('#numbers');    
const symbols_el = document.querySelector('#symbols');    

// Selecting buttons for generating and copying password
const generate_btn = document.querySelector("#generate");
const copy_btn = document.querySelector("#copy");

// Adding event listeners for button actions
generate_btn.addEventListener('click', GeneratePassword);
copy_btn.addEventListener('click', CopyPassword);

// Character sets to be used in password generation
const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "0123456789";
const symbols_chars = "!@#$%^&*()";

/**
 * Function to generate a password based on selected criteria.
 * It checks which options (uppercase, lowercase, numbers, symbols) are selected,
 * combines their corresponding character sets, and generates a random password.
 */
function GeneratePassword() {
    let password = "";                 // Initialize an empty password string
    let length = length_el.value;      // Get the password length from user input
    let chars = "";                    // Initialize a variable to hold all possible characters

    // Append character sets based on user selection
    chars += uppercase_el.checked ? uppercase_chars : "";    // Include uppercase characters if selected
    chars += lowercase_el.checked ? lowercase_chars : "";    // Include lowercase characters if selected
    chars += numbers_el.checked ? numbers_chars : "";        // Include numbers if selected
    chars += symbols_el.checked ? symbols_chars : "";        // Include symbols if selected

    // Randomly generate a password from the combined character set
    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * chars.length); // Generate a random index
        password += chars.substring(rand, rand + 1);         // Append a random character to the password
    }

    // Set the generated password to the password input field
    password_el.value = password;
}

/**
 * Function to copy the generated password to the clipboard.
 * It uses the Clipboard API to copy the content of the password field,
 * and alerts the user when the password is successfully copied.
 */
async function CopyPassword() {
    if (navigator.clipboard) {                               // Check if the Clipboard API is supported by the browser
        await navigator.clipboard.writeText(password_el.value); // Copy the password to the clipboard

        // Notify the user that the password has been copied
        alert("Password copied to clipboard");
    }
}

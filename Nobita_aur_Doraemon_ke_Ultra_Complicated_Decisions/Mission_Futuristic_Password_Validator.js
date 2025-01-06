// Mission: Futuristic Password Validator (Tough Conditions)
// Ek advanced password checker banao jo futuristic duniya ke rules follow kare.

// Rules:
// Password length kam se kam 8 characters honi chahiye.
// Password mein ek uppercase letter, ek lowercase letter, aur ek digit hona zaroori hai.
// Agar password mein special characters nahi hain, toh output: Futuristic Security Breach!.
// Agar password sab kuch pass kare, output: Password Accepted!.


function futuristicPasswordValidator(password) {
    // Check minimum length
    if (password.length < 8) {
        return "Password too short!";
    }

    // Check for at least one uppercase, one lowercase, and one digit
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;
    if (!regex.test(password)) {
        return "Password must include uppercase, lowercase, and a digit!";
    }

    // Check for special characters
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(password)) {
        return "Futuristic Security Breach!";
    }

    // If all conditions are satisfied
    return "Password Accepted!";
}

console.log(futuristicPasswordValidator("Abc123!"));  // Output: Password too short!
console.log(futuristicPasswordValidator("Abcd1234")); // Output: Futuristic Security Breach!
console.log(futuristicPasswordValidator("Abcd1234!")); // Output: Password Accepted!

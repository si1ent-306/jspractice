const submitBtn = document.getElementById("submitBtn");

function generatePassword() {
    const chars = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z','A', 'B', 'C', 'D',
        'E', 'F','G','H','I','J','K','L','M',
        'N','O','P','Q','R','S','T','U','V',
        'W','X','Y','Z', '0', '1', '2', '3', '4',
        '5', '6', '7', '8', '9', '~', '`', '!', '@',
        '#', '$', '%', '^', '&', '*', '(', ')', '_',
    ];

    const passwordLength = 16;
    let password = "";
    for (let i = 0; i <= passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }
    document.getElementById("password").value = password;
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    generatePassword();
});
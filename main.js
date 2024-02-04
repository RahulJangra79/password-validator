const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// An array of password requirements with corresponding
// regular expressions and index of the requirements list item
const requirements = [
    {regex: /.{8,}/, index:0 },    // At least 8 characters length
    {regex: /.*[0-9].*/, index:1 },   // At least 1 number (0...9)
    {regex: /.*[a-z].*/, index:2 },   // At least 1 lowercase letter (a...z)
    {regex: /.*[^A-Za-z0-9].*/, index:3 },  // At least 1 special symbol (!...$)
    {regex: /.*[A-Z].*/, index:4 },   // At least 1 uppercase letter (A...Z)
]

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        if(isValid)
        {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");
        }
        else
        {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }
    });
});

eyeIcon.addEventListener("click", () => {
    // Toggle the password input type  between "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // Update the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});
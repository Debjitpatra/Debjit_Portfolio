document.addEventListener('DOMContentLoaded', () => {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz7jZnPRWUOZ9tBKA88ehSoByKEQeZVGvkgQW9DiilEIAMNOJYEpOaxtKTKudRigJRE/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        const submitButton = form.querySelector('button');
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                alert('Your message has been sent successfully!');
                form.reset(); // Optionally reset the form after successful submission
                submitButton.disabled = false;
                submitButton.textContent = "Send";
            })
            .catch(error => {
                console.error('Error!', error.message);
                submitButton.disabled = false;
                submitButton.textContent = "Send";
            });
    })
})

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 50, // 50px offset for space above the section
        behavior: 'smooth'
    });
}
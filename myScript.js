document.addEventListener("DOMContentLoaded", () => {
    // FAQ List
    const faqListItems = document.querySelectorAll(".faq ul li");

    faqListItems.forEach((item) => {
        const question = item.querySelector("h2");
        const answer = item.querySelector("p");

        if (question && answer) {
            question.addEventListener("click", () => {
                item.classList.toggle("show");
            });
        } else {
            console.error("Question or answer not found for FAQ item:", item);
        }
    });

    // Language Dropdown
    const languageDropdown = document.getElementById("language-btn");
    const languageList = document.getElementById("language-dropdown");

    if (languageDropdown && languageList) {
        languageDropdown.addEventListener("click", () => {
            languageList.classList.toggle("show");
        });

        window.addEventListener("click", (event) => {
            if (!event.target.matches("#language-btn")) {
                if (languageList.classList.contains("show")) {
                    languageList.classList.remove("show");
                }
            }
        });
    } else {
        console.error("Language dropdown button or list not found.");
    }
});

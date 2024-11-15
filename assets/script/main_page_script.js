/*Часто задаваемые вопросы*/

function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const toggles = document.querySelectorAll('.faq-toggle');

    answers.forEach((answer, i) => {
        if (i + 1 === index) {
            const isVisible = answer.style.display === "block";
            answer.style.display = isVisible ? "none" : "block";
            toggles[i].textContent = isVisible ? "+" : "-";
        } else {
            answer.style.display = "none";
            toggles[i].textContent = "+";
        }
    });
}
toggleAnswer(index);
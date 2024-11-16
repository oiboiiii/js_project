document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const submitButton = document.getElementById("submit-button");
  
    const validateName = (name) => /^[A-Za-zА-Яа-яЁё\s]{2,20}$/.test(name);
    const validateEmail = (email) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
    const validateNumber = (number) => /^\d{10}$/.test(number);
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let valid = true;
  
      // Очистка предыдущих ошибок
      document
        .querySelectorAll(".error")
        .forEach((err) => (err.textContent = ""));
  
      const nameValue = document.getElementById("name").value;
      const surnameValue = document.getElementById("surname").value;
      const emailValue = document.getElementById("email").value;
      const numberValue = document.getElementById("number").value;
      const messageValue = document.getElementById("message").value;
      const consent = document.getElementById("consent");
  
      const nameError = document.getElementById("name-error");
      const surnameError = document.getElementById("surname-error");
      const emailError = document.getElementById("email-error");
      const numberError = document.getElementById("number-error");
      const messageError = document.getElementById("message-error");
      const consentError = document.getElementById("consent-error");
  
      // Валидация полей
      if (!validateName(nameValue)) {
        nameError.textContent =
          "Имя должно содержать только буквы и пробелы (2-20 символов).";
        valid = false;
      }
      if (document.getElementById("surname").value.trim() === "") {
        surnameError.textContent = "Фамилия обязательна.";
        valid = false;
      }
      if (!validateEmail(emailValue)) {
        emailError.textContent =
          "Введите корректный email.";
        valid = false;
      }
      if (!validateNumber(numberValue)) {
        numberError.textContent =
          "Номер должен содержать 10 цифр.";
        valid = false;
      }
      if (messageValue.trim() === "") {
        messageError.textContent =
          "Сообщение обязательно.";
        valid = false;
      }
      if (!consent.checked) {
        consentError.textContent =
          "Необходимо согласие на обработку данных.";
        valid = false;
      }
  
      if (valid) {
        console.log({
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          number: document.getElementById("number").value,
          surname: document.getElementById("surname").value,
          message: document.getElementById("message").value,
        });
        form.reset();
      }
    });
  
    document.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("focus", () => {
        const errorSpan = document.getElementById(`${input.id}-error`);
        errorSpan.textContent = "";
      });
    });
  });
  
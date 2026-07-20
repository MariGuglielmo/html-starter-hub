"use strict";

const feedbackForm = document.querySelector("#feedback-form");
const formResponse = document.querySelector("#form-response");

if (feedbackForm && formResponse) {
    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.querySelector("#name");
        const topicSelect = document.querySelector("#topic");

        const name = nameInput.value.trim();
        const selectedTopic = topicSelect.options[topicSelect.selectedIndex].textContent;

        formResponse.textContent =
            "Thank you, " + name + ". Your feedback about " + selectedTopic.toLowerCase() +
            " was recorded for this demo.";

        formResponse.classList.add("success-message");

        feedbackForm.reset();
    });
}
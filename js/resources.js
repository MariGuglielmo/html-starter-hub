"use strict";

const resources = [
    {
        title: "MDN HTML Guide",
        category: "Documentation",
        description: "A reliable reference for HTML elements, attributes, structure, and examples.",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        title: "W3C Markup Validator",
        category: "Validation",
        description: "Checks whether your HTML follows valid web standards.",
        url: "https://validator.w3.org/"
    },
    {
        title: "WAVE Accessibility Tool",
        category: "Accessibility",
        description: "Helps identify accessibility issues such as missing alt text, low contrast, and form label problems.",
        url: "https://wave.webaim.org/"
    },
    {
        title: "CSS-Tricks Guide to Flexbox",
        category: "CSS Layout",
        description: "A visual guide for understanding Flexbox properties and layout behavior.",
        url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
    },
    {
        title: "CSS-Tricks Guide to Grid",
        category: "CSS Layout",
        description: "A practical reference for CSS Grid columns, rows, gaps, and responsive layouts.",
        url: "https://css-tricks.com/snippets/css/complete-guide-grid/"
    },
    {
        title: "GitHub Pages Documentation",
        category: "Publishing",
        description: "Instructions for publishing a website from a GitHub repository.",
        url: "https://docs.github.com/en/pages"
    }
];

const resourceList = document.querySelector("#resource-list");
const resourcesStatus = document.querySelector("#resources-status");

function createResourceCard(resource) {
    const card = document.createElement("article");
    card.classList.add("resource-card");

    const category = document.createElement("span");
    category.classList.add("tag");
    category.textContent = resource.category;

    const title = document.createElement("h3");
    title.textContent = resource.title;

    const description = document.createElement("p");
    description.textContent = resource.description;

    const link = document.createElement("a");
    link.href = resource.url;
    link.textContent = "Visit resource";
    link.target = "_blank";
    link.rel = "noopener";

    card.appendChild(category);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);

    return card;
}

function renderResources(resourceArray) {
    resourceList.textContent = "";

    for (let index = 0; index < resourceArray.length; index++) {
        const resourceCard = createResourceCard(resourceArray[index]);
        resourceList.appendChild(resourceCard);
    }

    resourcesStatus.textContent = resourceArray.length + " resources loaded.";
}

if (resourceList && resourcesStatus) {
    renderResources(resources);
}
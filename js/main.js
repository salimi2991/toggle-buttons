//Change the aria-expanded attribute for all elements with the specified class

document.querySelectorAll("button").forEach(element => {
    element.addEventListener("click", function () {
        const currentAriaExpanded = this.getAttribute("aria-expanded");
        const newAriaExpanded = currentAriaExpanded === "true" ? "false" : "true";
        this.setAttribute("aria-expanded", newAriaExpanded);
    });
});
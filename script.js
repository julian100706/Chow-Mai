const orderForm = document.querySelector("#order-form");

if (orderForm) {
    const orderResult = document.querySelector("#order-result");
    const orderSummary = document.querySelector("#order-summary");
    const orderConfirmation = document.querySelector("#order-confirmation");
    const confirmedOrderSummary = document.querySelector("#confirmed-order-summary");
    const demoReference = document.querySelector("#demo-reference");

    orderForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!orderForm.reportValidity()) {
            return;
        }

        const formData = new FormData(orderForm);
        const summary = [
            "Chow-Mai order",
            `Name: ${formData.get("fullName")}`,
            `Contact number: ${formData.get("contactNumber")}`,
            `Delivery address: ${formData.get("address")}`,
            `Food: ${formData.get("foodItem")}`,
            `Number of portions: ${formData.get("quantity")}`,
        ].join("\n");

        orderSummary.textContent = summary;
        orderResult.hidden = false;
        orderResult.scrollIntoView({ behavior: "smooth", block: "start" });
        document.querySelector("#order-result-title").focus({ preventScroll: true });
    });

    document.querySelector("#confirm-order").addEventListener("click", () => {
        demoReference.textContent = `DEMO-${Date.now().toString(36).toUpperCase()}`;
        confirmedOrderSummary.textContent = orderSummary.textContent;
        orderForm.hidden = true;
        orderResult.hidden = true;
        orderConfirmation.hidden = false;
        orderConfirmation.scrollIntoView({ behavior: "smooth", block: "start" });
        document.querySelector("#confirmation-title").focus({ preventScroll: true });
    });

    document.querySelector("#edit-order").addEventListener("click", () => {
        orderResult.hidden = true;
        orderForm.scrollIntoView({ behavior: "smooth", block: "start" });
        document.querySelector("#full-name").focus({ preventScroll: true });
    });

    document.querySelector("#new-order").addEventListener("click", () => {
        orderForm.reset();
        orderConfirmation.hidden = true;
        orderForm.hidden = false;
        orderForm.scrollIntoView({ behavior: "smooth", block: "start" });
        document.querySelector("#full-name").focus({ preventScroll: true });
    });
}
const orderForm = document.querySelector("#order-form");

if (orderForm) {
    const orderResult = document.querySelector("#order-result");
    const orderSummary = document.querySelector("#order-summary");
    const copyOrderButton = document.querySelector("#copy-order");
    const copyStatus = document.querySelector("#copy-status");

    orderForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!orderForm.reportValidity()) {
            return;
        }

        const formData = new FormData(orderForm);
        const summary = [
            "Fresh Bite order",
            `Name: ${formData.get("fullName")}`,
            `Contact number: ${formData.get("contactNumber")}`,
            `Delivery address: ${formData.get("address")}`,
            `Food: ${formData.get("foodItem")}`,
            `Number of portions: ${formData.get("quantity")}`,
        ].join("\n");

        orderSummary.textContent = summary;
        orderResult.hidden = false;
        copyStatus.textContent = "";
        orderResult.scrollIntoView({ behavior: "smooth", block: "start" });
        document.querySelector("#order-result-title").focus({ preventScroll: true });
    });

    copyOrderButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(orderSummary.textContent);
            copyStatus.textContent = "Order details copied. Paste them into your Facebook message.";
        } catch (error) {
            copyStatus.textContent = "Copy isn't available in this browser. Select and copy the order details above.";
        }
    });
}
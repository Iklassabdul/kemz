document.addEventListener("DOMContentLoaded", () => {
  const hangoutSelect = document.getElementById("hangout-select");
  const hangoutOptions = document.getElementById("hangout-options");
  const form = document.getElementById("gift-form");
  const success = document.getElementById("success");

  hangoutSelect.addEventListener("change", () => {
    hangoutOptions.classList.toggle("hidden", hangoutSelect.value !== "yes");
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic validation
    const inputs = form.querySelectorAll("input, select");
    for (const input of inputs) {
      if (input.required && !input.value.trim()) {
        alert("Please fill all required fields.");
        return;
      }
    }

    const data = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        form.classList.add("hidden");
        success.classList.remove("hidden");
      } else {
        alert("Something went wrong. Try again.");
      }
    }).catch(() => {
      alert("Submission failed. Please try again.");
    });
  });
});

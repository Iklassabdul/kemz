document.addEventListener("DOMContentLoaded", () => {
  const hangoutSelect = document.getElementById("hangout-select");
  const hangoutOptions = document.getElementById("hangout-options");
  const form = document.getElementById("gift-form");
  const successMessage = document.getElementById("success-message");

  // Show hangout follow-up options only if 'Yes' is selected
  hangoutSelect.addEventListener("change", () => {
    if (hangoutSelect.value === "yes") {
      hangoutOptions.classList.remove("hidden");
      const selects = hangoutOptions.querySelectorAll("select");
      selects.forEach(sel => sel.setAttribute("required", true));
    } else {
      hangoutOptions.classList.add("hidden");
      const selects = hangoutOptions.querySelectorAll("select");
      selects.forEach(sel => sel.removeAttribute("required"));
    }
  });

  // Formspree AJAX Submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        form.classList.add("hidden");
        successMessage.classList.remove("hidden");
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    }).catch(error => {
      alert("Oops! Unable to submit the form. Please check your connection.");
    });
  });
});

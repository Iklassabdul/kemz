document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("gift-form");
  const successMessage = document.getElementById("success-message");
  const hangoutSelect = document.getElementById("hangout");
  const hangoutOptions = document.getElementById("hangout-options");

  // Show/hide hangout sub-options
  hangoutSelect.addEventListener("change", () => {
    if (hangoutSelect.value === "Yes") {
      hangoutOptions.classList.remove("hidden");
    } else {
      hangoutOptions.classList.add("hidden");
    }
  });

  // Handle Formspree success
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => {
        if (response.ok) {
          form.reset();
          form.classList.add("hidden");
          successMessage.classList.remove("hidden");
        } else {
          alert("Oops! Something went wrong. Try again later.");
        }
      })
      .catch(() => {
        alert("Oops! Something went wrong. Try again later.");
      });
  });
});

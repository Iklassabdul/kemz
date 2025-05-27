document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("gift-form");
  const container = document.getElementById("gift-container");
  const successMessage = document.getElementById("success-message");

  const hangoutRadios = document.querySelectorAll("input[name='hangout']");
  const hangoutOptions = document.getElementById("hangout-options");
  const hangoutType = document.getElementById("hangout-type");
  const hangoutDay = document.getElementById("hangout-day");

  // Toggle hangout options
  hangoutRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "yes") {
        hangoutOptions.style.display = "flex";
        hangoutType.setAttribute("required", "required");
        hangoutDay.setAttribute("required", "required");
      } else {
        hangoutOptions.style.display = "none";
        hangoutType.removeAttribute("required");
        hangoutDay.removeAttribute("required");
      }
    });
  });

  // Formspree submission handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          container.classList.add("submitted");
          successMessage.classList.add("show");
        } else {
          alert("Oops! Something went wrong. Try again.");
        }
      })
      .catch(() => alert("Oops! Something went wrong. Try again."));
  });
});

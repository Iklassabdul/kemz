document.addEventListener("DOMContentLoaded", () => {
  const hangoutSelect = document.getElementById("hangout-select");
  const hangoutOptions = document.getElementById("hangout-options");
  const form = document.getElementById("gift-form");
  const successBox = document.getElementById("success-box");

  hangoutSelect.addEventListener("change", () => {
    hangoutOptions.classList.toggle("hidden", hangoutSelect.value !== "Yes");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => {
      if (response.ok) {
        form.reset();
        form.classList.add("hidden");
        successBox.classList.remove("hidden");
      } else {
        alert("There was an error. Please try again.");
      }
    })
    .catch(() => alert("Submission failed. Please check your connection."));
  });
});

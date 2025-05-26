document.addEventListener("DOMContentLoaded", function () {
  const hangoutSelect = document.getElementById("hangout-select");
  const hangoutOptions = document.getElementById("hangout-options");
  const form = document.getElementById("gift-form");
  const success = document.getElementById("success-message");

  hangoutSelect.addEventListener("change", function () {
    if (this.value === "Yes") {
      hangoutOptions.classList.remove("hidden");
    } else {
      hangoutOptions.classList.add("hidden");
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = form.getAttribute("action");

    fetch(action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    })
    .then(res => {
      if (res.ok) {
        form.classList.add("hidden");
        success.classList.remove("hidden");
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(() => {
      alert("There was a network error.");
    });
  });
});

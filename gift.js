document.addEventListener("DOMContentLoaded", function () {
  const hangoutSelect = document.getElementById("hangout");
  const hangoutOptions = document.getElementById("hangout-options");

  hangoutSelect.addEventListener("change", function () {
    if (this.value === "yes") {
      hangoutOptions.classList.remove("hidden");
    } else {
      hangoutOptions.classList.add("hidden");
    }
  });

  document.getElementById("gift-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Submitted successfully, my love!");
    // You can replace the alert with logic to handle the form data
    this.reset();
    hangoutOptions.classList.add("hidden");
  });
});

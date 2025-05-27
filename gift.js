document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("gift-form");
  const successDiv = document.getElementById("success");
  const formContainer = document.querySelector("form");
  const hangoutSelect = document.getElementById("hangout");
  const hangoutDetails = document.getElementById("hangout-details");

  // Load Lottie success animation
  const lottieContainer = document.getElementById("lottie-success");
  if (lottieContainer) {
    lottie.loadAnimation({
      container: lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'cake/delivery.json'
    });
  }

  // Show/hide conditional hangout questions
  hangoutSelect.addEventListener("change", function () {
    if (this.value === "yes") {
      hangoutDetails.classList.add("show-conditional");
      Array.from(hangoutDetails.querySelectorAll("select")).forEach(select => {
        select.setAttribute("required", "required");
      });
    } else {
      hangoutDetails.classList.remove("show-conditional");
      Array.from(hangoutDetails.querySelectorAll("select")).forEach(select => {
        select.removeAttribute("required");
      });
    }
  });

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    fetch("https://formspree.io/f/xvgajnwk", {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    }).then(response => {
      if (response.ok) {
        form.reset();
        formContainer.style.display = "none";
        successDiv.classList.add("show");
        document.getElementById("success-message").textContent =
          "Operation spoil my babygirl is now in motion. Hold tight babygirl, delivery in progress.";
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    }).catch(error => {
      console.error("Form error:", error);
      alert("There was a network error. Please try again later.");
    });
  });
});

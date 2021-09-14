$(document).foundation();

function getResources(resourceType) {
  const proxy = "https://api.allorigins.win/get?url=";
  const resourcesURL = proxy + encodeURIComponent("https://www.sikhcoalition.org/resources/?fwp_resource_types=" + resourceType);

  const settings = {
    "url": resourcesURL,
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(settings).done(function (response) {
    const resourcesPage = $(response.contents);
    resourcesPage.find("article");

  });
};


// Scroller.scrollVerticalToElementById("about-section", -50);

$(".top-bar a, footer a").on("click", function (e) {
  if(this.href.includes(window.location.origin)) {
    e.preventDefault();
    const height = $(".top-bar").height();
    Scroller.scrollVerticalToElementById(this.href.split("#")[1], height);
  }
});




var contactForm = document.querySelector("#contact-section form");

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var nameInput = document.querySelector("#name-input");
  var emailInput = document.querySelector("#email-input");
  var numberInput = document.querySelector("#number-input");
  var subjectInput = document.querySelector("#subject-input");
  var messageInput = document.querySelector("#message-input");
  var submitButton = document.querySelector("#submit-btn");

  submitButton.disabled = true;

  var emailData = {
    name: nameInput.value,
    email: emailInput.value,
    number: numberInput.value,
    subject: subjectInput.value,
    message: messageInput.value
  }

  fetch('https://hillside-gurdwara-email.herokuapp.com/api/send-email', {
    method: 'post',
    body: JSON.stringify(emailData),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    contactForm.innerHTML = `<p class="text-center">Thank you for submitting.<br>We will be in contact with you soon.</p>`
  });
});

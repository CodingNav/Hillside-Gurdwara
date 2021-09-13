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

$(".top-bar a, footer a").on("click", function(e) {
  e.preventDefault();
  const height = $(".top-bar").height();
  Scroller.scrollVerticalToElementById(this.href.split("#")[1], height);
});
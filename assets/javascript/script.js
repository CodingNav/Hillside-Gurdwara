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
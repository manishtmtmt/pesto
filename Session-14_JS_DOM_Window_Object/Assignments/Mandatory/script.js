document.addEventListener("DOMContentLoaded", function(){
  displayWindowProperties();
})

function displayWindowProperties() {
  // get the userAgent property from the window properties
  const userAgent = window.navigator.userAgent;
  console.log("displayWindowProperties ~ userAgent:", userAgent);

  // get the screenWidth property from the window properties
  const screenWidth = window.screen.width;
  console.log("displayWindowProperties ~ screenWidth:", screenWidth);

  // get the screenHeight property from the window properties
  const screenHeight = window.screen.height;
  console.log("displayWindowProperties ~ screenHeight:", screenHeight);

  // get the currentUrl property from the window properties
  const currentUrl = window.location.href;
  console.log("displayWindowProperties ~ currentUrl:", currentUrl);

  // get the pathName property from the window properties
  const pathName = window.location.pathname;
  console.log("displayWindowProperties ~ pathName:", pathName);

  const userData = { userAgent, screenWidth, screenHeight, currentUrl, pathName };

  // set the window properties to session storage
  window.sessionStorage.setItem("userData", JSON.stringify(userData));

  // set the window properties to local storage
  window.localStorage.setItem("userData", JSON.stringify(userData));

  // get the window properties from session storage
  const storedUserDataToSessionStorage = JSON.parse(window.sessionStorage.getItem("userData"));
  console.log(
    "displayWindowProperties ~ storedUserDataToSessionStorage:",
    storedUserDataToSessionStorage
  );

  // get the window properties from local storage
  const storedUserDataToLocalStorage = JSON.parse(window.localStorage.getItem("userData"));
  console.log(
    "displayWindowProperties ~ storedUserDataToLocalStorage:",
    storedUserDataToLocalStorage
  );
}
//Instantiate object of github class
const github = new Github();

//Get the searchUser
document.getElementById("searchUser").addEventListener("keyup", getUser);

function getUser(e) {
  const user = e.target.value;

  if (user !== "") {
    //Make Http request to get user data
    github.getUser(user).then(data => {
      //Check to see if a profile is returned
      if (data.profile.message == "Not Found") {
        //Show alert UI
      } else {
        //Show profile
      }
    });
  } else {
    //clear profile UI field
  }
}

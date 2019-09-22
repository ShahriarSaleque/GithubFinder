//Instantiate object of github class
const github = new Github();

//Instantiate object of UI class
const ui = new UI();

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
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //Show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    //clear profile UI field
    ui.clearProfile();
  }
}

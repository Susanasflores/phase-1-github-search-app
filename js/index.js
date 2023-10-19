
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("github-form").addEventListener('submit', function(event) {
      event.preventDefault(); // prevent the form from submitting and refreshing the page
   
  
//creating and appending elements to DOM
const userInfo = document.createElement("div");
userInfo.setAttribute("id", 'user-info');
const mainDiv = document.getElementById("main");
mainDiv.appendChild(userInfo);

const username = document.createElement("h2");
username.setAttribute("id", 'username');
const avatar = document.createElement("img");
avatar.setAttribute("id", 'avatar')
avatar.src = ""
avatar.setAttribute("alt", 'User Avatar')
const profileLink = document.createElement("a")
profileLink.setAttribute("id", 'profile-link');
profileLink.href = ""
profileLink.setAttribute("target", '_blank')

      // take the value of the input
      const submitValue = document.getElementById("search").value;
  
      fetch(`https://api.github.com/users/${submitValue}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    })
      .then(res => res.json())
        .then(data => {
            
       // Extract username, avatar, and link to profile
  const usernameInfo = data.login;
  const avatarElementSrc = data.avatar_url;
  const userProfileUrl = data.html_url;

  // Update HTML elements with fetched data
 

const userInfo = document.createElement("div");
userInfo.setAttribute("id", 'user-info');
const mainDiv = document.getElementById("main");
mainDiv.appendChild(userInfo);

const username = document.createElement("h2");
username.setAttribute("id", 'username');
userInfo.appendChild(username);
const avatar = document.createElement("img");
avatar.setAttribute("id", 'avatar');
avatar.src = avatarElementSrc;
avatar.setAttribute("alt", 'User Avatar');
userInfo.appendChild(avatar);
const profileUrl = document.createElement("a");
profileUrl.setAttribute("id", 'profile-link');

//profileLink.href = ""
profileUrl.setAttribute("target", '_blank')
userProfileUrl.href = data.html_url;
userInfo.appendChild(profileUrl);
username.textContent = usernameInfo;
        });
    });
});

//Step 3
//////////////////////////////////////////////////////////
//Clicking on one of these users should send a request to the 
//User Repos Endpoint and return data about all the 
//repositories for that user
document.addEventListener('DOMContentLoaded', function() {
const main = document.getElementById("main")
    main.addEventListener("click", function(event) {
       
   const userInput = document.getElementById("search").value
   if (event.target.id === "username") {
        fetch(`https://api.github.com/users/${userInput}/repos`, {
        headers: {
            Accept: 'application/vnd.github.v3+json'
          }
        })
          .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(data => {
                console.log(data)
     main.textContent = '';
     data.forEach(repo => {
        const containerElement = document.createElement("li");
        containerElement.textContent = repo.name;
        main.appendChild(containerElement)
        
     })
    })}
})
    //.catch(error => {
    //    console.log('Error:', error);
   // });
})
   








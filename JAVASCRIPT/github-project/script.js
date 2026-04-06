const username = document.querySelector("#username");
const btn = document.querySelector("#fetch");
const result = document.querySelector("#repo-list");

btn.addEventListener("click", async () => {
  const value = username.value.trim();

  if (!value) {
    result.innerHTML = "Enter username";
    return;
  }
  result.innerHTML = "Loading..."

  try {
    const res = await fetch(`https://api.github.com/users/${value}`);

    if (res.status === 404) {
      result.innerHTML = "User not found";
      return;
    }
    const user = await res.json();
    console.log(user);
    

      result.innerHTML = `
    <img src="${user.avatar_url}" width="120" />
    <h2>${user.name || "No Name"}</h2>
    <p>${user.bio || "No bio available"}</p>
    <p><strong>Followers:</strong> ${user.followers}</p>
    <p><strong>Following:</strong> ${user.following}</p>
    <p><strong>Public Repos:</strong> ${user.public_repos}</p>
    <a href="${user.html_url}" target="_blank">View Profile</a>
  `;
  } catch (error) {
    result.innerHTML = "Error fetching data"
  }
});

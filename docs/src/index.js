
const app = document.getElementById("app");

function showLoading() {
    const template = document.createElement("template");
    template.innerHTML = `<div>Loading...</div>`;
    app.innerHTML = template.innerHTML;
}

function showContributor() {
    showLoading();
    const template = document.createElement("template");
    fetch("https://api.github.com/repos/petanikode/belajar-git/contributors")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((contributor) => {
                template.innerHTML += `<div class="contributor">
        <a href="${contributor.html_url}" target="_blank">
          <img src="${contributor.avatar_url}" width="100px" height="100px" />
        </a>
        <br>
         @${contributor.login}
         
        </div>`;
            });

            app.innerHTML = template.innerHTML;
        });
}

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}
setBg();
showContributor();

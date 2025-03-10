document.addEventListener("DOMContentLoaded", function (){
    const userName = "Simon2782";
    const url = `https://api.github.com/users/${userName}/repos`;

    const projectLists = document.getElementById("project-list");
    const loadingText = document.getElementById("loading");

    fetch(url)
    .then(response => response.json())
    .then(data => {
        loadingText.style.display = "none";

        data.forEach(repo => {
            const project = dokument.createElement("div");
            project.classList.add("project");

            project.innerHTML =
            <h3>${repo.name}</h3>
            <h3>${repo.name}</h3>
            <p>${repo.description ? repo.description : "Ingen beskrivning tillgänglig."}</p>
            <a href="${repo.html_url}" target="_blank">Se projekt</a>
            ;

            projectLists.appendChild(project);
        });
    })
    .catch(error => {
        loadingText.innerText = "Kunde inte ladda projekten.";
        console.error("Fel vid hämtning av GitHub-projekt:", error);
    });
});
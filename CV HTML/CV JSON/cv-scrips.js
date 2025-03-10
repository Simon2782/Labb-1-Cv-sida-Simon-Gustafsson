dokument.addEventListener("DOMContentLoaded", getInfo);

    async function getInfo(){
        try{
            const responce = await fetch("/CVHTML/CVJSON/erfarenhet.json");
            if (!responce.ok){
                throw new Error("Kunde inte hämta data.");
            }
            const data = await responce.json();
            showUtb(data.utbildning);
            showArb(data.arbete)
        } catch (error){
            showError(error);
        }
    }
    

function visaUtbildning(utbildningar) {
    const utbildningContainer = dokument.getElementById("utbildning");
    utbildningar.foreach(utbildning => {
        utbildningContainer.innerHTML +=
            <div class="cv-item">
                <h3>${utbildning.programm} - ${utbildning.school}</h3>
                <p><strong>År:</strong> ${utbildning.year}</p>
                <p>${utbildning.description}</p>
            </div>
        ;
    });
}

function visaArbete(jobb) {
    const arbeteContainer = document.getElementById("arbete");
    jobb.foreach(arbete => {
        arbeteContainer.innerHTML += `
        <div class="cv-item">
        <h3>${arbete.roll} - ${arbete.workplace}</h3>
        <p><strong>År:</strong> ${arbete.year}</p>
        <p>${arbete.description}</p>
        </div>
        `;
    })
}
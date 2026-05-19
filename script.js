fetch("menuiserie.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
afficherTravaux(data.realisations)
afficherTemoignages(data.temoignages)
    });



function afficherTravaux(tableauDeTravaux) {

    tableauDeTravaux.forEach(realisations => {
        let ContenueDeLaPage = `
       

                <!-- enfant -->
                <div class="card w20">
                    <h3 class="txtcenter creme txt-ombre">${realisations.titre}</h3>
                    <img src="${realisations.image}" alt="" width="50%" class="mgl50 br20 mgt20">
                    <p class="txtwhite mgt20 dot">${realisations.description}</p>
                </div>
                
            
        
        `
        document.querySelector("#carteRealisation").innerHTML += ContenueDeLaPage;
    });
}


function afficherTemoignages(tableauRetourClient) {
    tableauRetourClient.forEach(temoignages => {
        let ContenueClient = `
        
                <div class="card w-33">
                    <p class="txtwhite mgt10 txtcenter gras txt-ombre">${temoignages.typePrestation}</p>
                    <p class="creme mgt10 dot">${temoignages.commentaire}</p>
                    <h4 class="txtwhite gras mgt20">${temoignages.prenom}</h4>
                    <i class="ph-fill ph-star creme"></i>
                    <i class="ph-fill ph-star creme"></i>
                    <i class="ph-fill ph-star creme"></i>
                    <i class="ph-fill ph-star creme"></i>
                    <i class="ph-fill ph-star creme"></i>
                </div>
                
            
        `
        document.querySelector("#carteTemoignage").innerHTML += ContenueClient;

    });
}
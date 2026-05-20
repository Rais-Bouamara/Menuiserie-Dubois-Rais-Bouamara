fetch("menuiserie.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        afficherTravaux(data.realisations)
        afficherTemoignages(data.temoignages)
        afficherPhraseAccroche(data)
        AffichertexteBouton(data)
        AffichertexteBouton1(data)
        AffichertexteBouton2(data)
        AfficherPromesseClient(data)
    });

//fonction qui affiche ma valeur entreprise avec comme parametre la valeur et qui retourne rien
function afficherPhraseAccroche(propositionDeValeur) {
    let PhraseAccroche = `
    <h1 class="creme txtcenter taille-gras mgt100 txt-ombre">${propositionDeValeur.propositionDeValeur}</h1>
    `
    document.querySelector("#Valeurs").innerHTML += PhraseAccroche;
}
//fonction qui affiche mon texte boutton ,avec comme parametre mon texte boutton et qui retourne rien
function AffichertexteBouton(texteBouton) {
    let txtBoutton = `
    <a href="https://www.sidecare.com/generateur-devis" class="no-lien btn-creme dot" target="_blank">${texteBouton.texteBouton}</a>
    `

    document.querySelector("#boutton").innerHTML += txtBoutton;
}
//fonction qui affiche mon texte boutton 1 ,avec comme parametre mon texte boutton et qui retourne rien
function AffichertexteBouton1(texteBouton) {
    let txtBoutton1 = `
    <a href="https://www.sidecare.com/generateur-devis" class="btn-creme no-lien dot" target="_blank">${texteBouton.texteBouton}</a>
    `

    document.querySelector("#boutton1").innerHTML += txtBoutton1;
}
//fonction qui affiche mon texte boutton 2 ,avec comme parametre mon texte boutton et qui retourne rien
function AffichertexteBouton2(texteBouton) {
    let txtBoutton2 = `
    <a href="https://www.sidecare.com/generateur-devis" class="w-48 btn-creme h-50 txtcenter dot no-lien" target="_blank">${texteBouton.texteBouton}</a>
    `

    document.querySelector("#boutton2").innerHTML += txtBoutton2;
}
//fonction qui affiche mes promesses clients avec comme parametre mes avis clients et qui retourne rien
function AfficherPromesseClient(promesse) {
    let avisClient = `
    <p class="txtwhite txtcenter">Des créations personnalisées pour s'adapter parfaitement à votre
                    espace</p>
                
    `

    document.querySelector("#avis").innerHTML += avisClient;
}


//role:afficher mes carte travaux
//parametre: tableaux avec les objets travaux
//return: rien



function afficherTravaux(tableauDeTravaux) {

    tableauDeTravaux.forEach(realisations => {
        let ContenueDeLaPage = `
       

                <!-- enfant -->
            
                <div class="swiper-slide card w20">
                <h3 class="txtcenter creme txt-ombre">${realisations.titre}</h3>
                    <img src="${realisations.image}" alt="" class="br20 mgt20 mgl41 br20 w-100">
                    <p class="txtwhite mgt20 dot">${realisations.description}</p>
                </div>
                    

                
        
                
            
        
        `
        document.querySelector("#carteRealisation").innerHTML += ContenueDeLaPage;
    });
}



//role: afficher mes cartes retour client
//parametre: le tableau d'objet des avis clients
//returne: rien
function afficherTemoignages(tableauRetourClient) {
    tableauRetourClient.forEach(temoignages => {
        let notation = "★".repeat(temoignages.note) + "☆".repeat(5 - temoignages.note)

        let ContenueClient = `
        
                <div class="card w-33">
                    <p class="txtwhite mgt10 txtcenter gras txt-ombre">${temoignages.typePrestation}</p>
                    <p class="creme mgt10 dot">${temoignages.commentaire}</p>
                    <h4 class="txtwhite gras mgt20">${temoignages.prenom}</h4>

                    <p class="creme">${notation}</p>
                </div>
                
            
        `
        document.querySelector("#carteTemoignage").innerHTML += ContenueClient;

    });
}





var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
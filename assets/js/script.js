  const projets = [
    {
      titre: "Site Star Wars Première Trilogie",
      description: "Site web inspiré de la trilogie originale.",
      technologie: "VSCode / HTML / CSS",
      lien: "https://star-wars1-kappa.vercel.app/",
      image: "./assets/apercu Star Wars .png"
    },
    {
      titre: "Culture&Co ",
      description: "Maquette interactive d'un site internet d'informations culturelles.",
      technologie: "Figma",
      lien: "https://www.figma.com/design/NGawnH0dal11uffqVP0tg4/Projet-Culture-Co-Adem",
      image: "./assets/apercu culture&co.png"
    },
    {
      titre: "Site Présentation Mariage",
      description: "Site élégant pour présenter un événement de mariage.",
      technologie: "VSCode / HTML / CSS",
      lien: "https://photo-mariage-j3lh.vercel.app/",
      image: "./assets/Apercu site mariage .png"
    }
  ];



  const sectionProjects = document.getElementById("projects");



  sectionProjects.innerHTML = `
    <h2>Mes Projets</h2>
    <div class="projects-contenue"></div>
  `;

  const contenue = sectionProjects.querySelector(".projects-contenue");
  

  //au lieu de créer 3 cards individuellement je crée une boucle grace à mon tableau de donnée  
  // qui va venir me créer mes 3 cards sans le faire indivuellement de maniere répétitive 
 for (let i = 0; i < projets.length; i++) {

     const projet = projets[i];
    
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <h3>${projet.titre}</h3>

      <p id="principal">${projet.description}</p>

      <p id="Technologies">
        <strong>Technologies :</strong> ${projet.technologie}
      </p>

      <a class="link" href="${projet.lien}" target="_blank">
        Voir le site →
      </a>
    `;

    const preview = document.createElement("div");
    preview.className = "preview";

    const img = document.createElement("img");
    img.src = projet.image;
    img.alt = "Aperçu du projet " + projet.titre;

    preview.appendChild(img);
    card.appendChild(preview);

    contenue.appendChild(card);
  };
;

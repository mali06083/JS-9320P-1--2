let characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },

  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const chc = document.getElementById("chc");
const toggleButton = document.getElementById("toggleButton");

function renderCharacter({ name, pic, homeworld }) {
  chc.innerHTML = "";

  characters.forEach((character) => {
    const markup = `  
    <div class="row" style="margin: 100px;">
  
          <div class="card" style="width: 18rem;">
              <img src="${character.pic}" class="card-img-top"  style="align-items: center; margin-top: 10px;" alt="${character.name}">
              <div class="card-body" style="margin: 15px; text-align: center;">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text" style="justify-content: center;">${character.homeworld}</p>
               
              </div>
            </div>
  
      </div>
      `;
    chc.innerHTML += markup;
  });

  toggleButton.innerText = "Hide Characters";
  toggleButton.classList.remove("btn-primary");
  toggleButton.classList.add("btn-danger");
}

function removeCharacters() {
  chc.innerHTML = "";
  toggleButton.innerText = "Show Characters";
  toggleButton.classList.remove("btn-danger");
  toggleButton.classList.add("btn-success");
}

toggleButton.addEventListener("click", () => {
  if (toggleButton.innerText === "Show Characters") {
    renderCharacter(characters);
  } else {
    removeCharacters();
  }
});

const homeworldsRaw = characters.map(
  (character) => character.homeworld ?? "other"
);
const homeworldsUnique = [...new Set(homeworldsRaw)];
const homeworld = homeworldsUnique.map((homeworld) => homeworld.toLowerCase());

const filterContainer = document.getElementById("filterContainer");

homeworldsUnique.forEach((homeworld) => {
  const inputId = homeworld.replace(/\s+/g, '_');
  const radio = `
<div class="form-check form-check-inline">
<input type="radio" id="${inputId}" name="homeworld" value="${homeworld}"></input>
<label for="${inputId}">${homeworld}</label>
  </div>
  `;

  filterContainer.innerHTML += radio;
});
function filteredCharacter(value) {
  let filterCharacter = characters.filter((character) => {
    return character.homeworld === value; // Eşleşme sağlamak için return kullan
  });

  // Eğer filterCharacter boş değilse, içeriği render et
  chc.innerHTML = filterCharacter.map((home) => {
    return `  
      <div class="row" style="margin: 100px;">
          <div class="card" style="width: 18rem;">
              <img src="${home.pic}" class="card-img-top" style="align-items: center; margin-top: 10px;" alt="${home.name}">
              <div class="card-body" style="margin: 15px; text-align: center;">
                <h5 class="card-title">${home.name}</h5>
                <p class="card-text" style="justify-content: center;">${home.homeworld}</p>
              </div>
          </div>
      </div>`;
  }); // join ile birleştir
}

filterContainer.addEventListener("change", (input) => {
  if(input.target.name === "homeworld") {
     const selectedHomeValue = input.target.value
     console.log(selectedHomeValue);

     filteredCharacter(selectedHomeValue)
}})
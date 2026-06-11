const slides = [
  {
    titolo: "Saldi di primavera",
    sottotitolo: "Fino al 50% di sconto sui prodotti in evidenza",
    bgColor: "bg-primary",
    active: true,
  },
  {
    titolo: "Nuova collezione",
    sottotitolo: "Scopri gli arrivi della settimana",
    bgColor: "bg-success",
    active: false,
  },
  {
    titolo: "Spedizione gratis",
    sottotitolo: "Sopra i 50 € su tutto il sito",
    bgColor: "bg-dark",
    active: false,
  },
];

const prodotti = [
  {
    id: 1,
    nome: "Sneaker run",
    descrizione: "Scarpa leggera per la corsa, suola in gomma traspirante.",
    prezzo: "€89",
    immagine: "assets/img/pexels-rubenstein111rebello-6246831.jpg",
    alt: "Immagine scarpe",
    categoria: "scarpe",
  },
  {
    id: 2,
    nome: "T-shirt basic",
    descrizione: "Cotone biologico, taglio regolare, disponibile in 5 colori.",
    prezzo: "€19",
    immagine: "assets/img/pexels-marsianin-18199559.jpg",
    alt: "Immagine maglietta",
    categoria: "abbigliamento",
  },
  {
    id: 3,
    nome: "Borsa city",
    descrizione: "Tessuto resistente, tasca interna, cinghia regolabile.",
    prezzo: "€49",
    immagine: "assets/img/pexels-bertoli-26903900.jpg",
    alt: "Immagine borsa",
    categoria: "accessori",
  },
  {
    id: 4,
    nome: "Vinili da collezione",
    descrizione:
      "Tanti vinili da collezione tra cui scegliere, non lasciarteli sfuggire.",
    prezzo: "€59",
    immagine: "assets/img/pexels-irrabagon-35254141.jpg",
    alt: "Immagine vinile",
    categoria: "musica",
  },
  {
    id: 5,
    nome: "Cappello sport",
    descrizione: "Visiera regolabile, traspirante, ideale per gli allenamenti.",
    prezzo: "€14",
    immagine: "/assets/img/pexels-cesar-o-neill-26650613-33111376.jpg",
    alt: "Immagine cappello",
    categoria: "accessori",
  },
  {
    id: 6,
    nome: "Felpa con cappuccio",
    descrizione: "Tessuto morbido, tasca e marsupio, polsini elasticizzati.",
    prezzo: "€59",
    immagine: "/assets/img/pexels-ana-maria-arroyave-1851916642-28701959.jpg",
    alt: "Immagine vinile",
    categoria: "abbigliamento",
  },
];
prodotti.sort(() => Math.random() - 0.5);

const carouselInner = document.querySelector("#hero .carousel-inner");

slides.forEach((slide) => {
  const div = document.createElement("div");
  div.classList.add(
    "carousel-item",
    slide.bgColor,
    "text-white",
    "text-center",
    "py-5",
  );
  if (slide.active) {
    div.classList.add("active");
  }
  div.innerHTML = `
    <div class="container">
    <h2 class="fs-1 fw-bold mb-2">${slide.titolo}</h2>
    <p class="fs-5 mb-0">${slide.sottotitolo}</p>
    </div>`;

  carouselInner.appendChild(div);
});

const prodottiRow = document.querySelector("section .row");

prodotti.forEach((prodotto) => {
  const article = document.createElement("article");
  article.classList.add(
    "col-sm-12",
    "col-md-6",
    "col-xl-3",
    "col-xxl-3",
    "mb-3",
    "card-product",
  );
  article.innerHTML = `
    <div class="card h-100 shadow-sm">
    <div class="bg-secondary mb-2 rounded" style="height: 160px;">
    <img class="img-fluid mb-3 w-100 h-100 object-fit-cover" src="${prodotto.immagine}" alt="${prodotto.alt}">
    </div>
    <div class="card-body">
    <h5 class="card-title">${prodotto.nome}
    <p class="card-text text-muted">${prodotto.descrizione}</p>
    <p class="fw-bold fs-5 m-0">${prodotto.prezzo}</p>
    </h5>
    <div class="card-footer bg-white border-0">
    <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#prodotto-${prodotto.id}">Dettagli</button>
    </div>
    </div>
    </div>
  `;
  prodottiRow.appendChild(article);
});

prodotti.forEach((prodotto) => {
  const modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.id = `prodotto-${prodotto.id}`;
  modal.tabIndex = "-1";
  modal.setAttribute("aria-labelledby", `prodotto-${prodotto.id}`);
  modal.setAttribute("aria-hidden", "true");

  modal.innerHTML = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">${prodotto.nome}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Chiudi"></button>
    </div>
    <div class="modal-body">
    <img src="${prodotto.immagine}" alt="${prodotto.alt}" class="img-fluid mb-3">
    <p>${prodotto.descrizione}</p>
    <p class="fw-bold fs-4 m-0">${prodotto.prezzo}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
      <button type="button" class="btn btn-success">Aggiungi al carrello</button>
    </div>
  </div>
</div>
`;

  document.body.appendChild(modal);
});

document.getElementById("toggle-tema").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  this.textContent = document.body.classList.contains("dark")
    ? "Tema chiaro"
    : "Tema scuro";
});

/**
 * Renderizza una lista di prodotti all'interno del contenitore dedicato.
 *
 * Per ogni prodotto genera una card Bootstrap con immagine, nome, descrizione,
 * prezzo e un bottone che apre il modal di dettaglio corrispondente.
 * Aggiorna inoltre il contatore visibile con il numero di prodotti mostrati.
 *
 * @param {Object[]} lista - Array di oggetti prodotto da visualizzare.
 * @param {number}   lista[].id          - Identificatore univoco del prodotto.
 * @param {string}   lista[].nome        - Nome del prodotto.
 * @param {string}   lista[].descrizione - Descrizione breve del prodotto.
 * @param {string}   lista[].prezzo      - Prezzo formattato (es. "€89").
 * @param {string}   lista[].immagine    - Percorso dell'immagine del prodotto.
 * @param {string}   lista[].alt         - Testo alternativo per l'immagine.
 * @param {string}   lista[].categoria   - Categoria di appartenenza del prodotto.
 * @returns {void}
 */
function renderProdotti(lista) {
  document.getElementById("contenitore-prodotti").innerHTML = lista
    .map(
      (
        p,
      ) => `<article class="col-sm-12 col-md-6 col-xl-4 col-xxl-4 mb-3 card-product"> <div class="card h-100 shadow-sm ${p.categoria}">
    <div class="bg-secondary mb-2 rounded" style="height: 160px;">
    <img class="img-fluid mb-3 w-100 h-100 object-fit-cover" src="${p.immagine}" alt="${p.alt}">
    </div>
    <div class="card-body">
    <h5 class="card-title">${p.nome}</h5>
    <p class="card-text text-muted">${p.descrizione}</p>
    <p class="fw-bold fs-5 m-0 prezzo">${p.prezzo}</p>
    </div>
    <div class="card-footer border-0">
    <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#prodotto-${p.id}">Dettagli</button>
    </div>
    </div>
    </article>
    `,
    )
    .join("");
  document.getElementById("contatore").textContent = lista.length;
}

/**
 * Listener delegato sul contenitore dei bottoni filtro (#filtri).
 *
 * Intercetta i click su qualsiasi bottone figlio che possiede l'attributo
 * `data-categoria`. Quando un bottone viene premuto:
 *  - rimuove la classe `active` da tutti i bottoni del gruppo;
 *  - aggiunge `active` al bottone cliccato;
 *  - filtra l'array `prodotti` in base alla categoria selezionata
 *    (il valore speciale "tutti" mostra l'intera lista);
 *  - chiama {@link renderProdotti} con la lista filtrata.
 *
 * @listens click
 * @param {MouseEvent} event - Evento di click propagato fino al contenitore.
 * @returns {void}
 */
filtri.addEventListener("click", function (event) {
  const bottone = event.target.closest("[data-categoria]");
  if (!bottone) {
    return; // se non c'è nessun bottone, esco
  }
  filtri.querySelectorAll(".btn").forEach((b) => b.classList.remove("active"));
  bottone.classList.add("active");
  const categoria = bottone.dataset.categoria;
  const filtrati =
    categoria === "tutti"
      ? prodotti
      : prodotti.filter((p) => p.categoria === categoria);

  renderProdotti(filtrati);
});

function calcolaTotale(lista) {
  return lista.reduce((tot, p) => tot + p.prezzo, 0);
}
calcolaTotale(prodotti);
renderProdotti(prodotti);

// call the .json file and retrieve data for my future cards

let cardsData = [];

async function loadCards() {
  try {
    const res = await fetch("./SRC/JS/cards.json");
    cardsData = await res.json();
    renderCards(cardsData);
  } catch (err) {
    console.error("Erreur de chargement des cards :", err);
  }
}

function renderCards(cards) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  cards.forEach(
    ({
      movie,
      price,
      date,
      time,
      ticketsSold,
      picture,
      capacity,
      description,
      duration,
    }) => {
      const percent = Math.round((ticketsSold / capacity) * 100); // create the variable for the percentage

      // create the HTML structure of my cards and display it

      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <img src="${picture}" alt="${movie}" />
        <div class="card-body">
          <h2 class="card-title">${movie}</h2>
          <strong>${price.toFixed(2)}€</strong> 
          <div class="progress-container">
            <div class="progress-bar" style="width: ${percent}%"></div>
          </div>
          <p>${ticketsSold} / ${capacity} (${percent}%)</p>
          <p>${description}</p>
          <p><strong>Date:</strong> ${date} at ${time}</p>
          <p><strong>Durée:</strong> ${duration} min</p>
          <button class="cards__cta-button cta-button--primary">Acheter</button>
        </div>
      `;
      container.appendChild(card);
    }
  );
}

// Event on the drop-down menu

document.getElementById("sort-select").addEventListener("change", (e) => {
  const value = e.target.value;
  let sorted = [...cardsData];

  if (value === "asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (value === "desc") {
    sorted.sort((a, b) => b.price - a.price);
  }

  renderCards(sorted);
});

document.addEventListener("DOMContentLoaded", loadCards);

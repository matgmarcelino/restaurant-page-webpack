const aboutContainer = document.createElement("div");
aboutContainer.className = "about-container";

// Hero
const hero = document.createElement("div");
hero.className = "hero";

const heroEyebrow = document.createElement("p");
heroEyebrow.className = "eyebrow";
heroEyebrow.textContent = "OUR STORY";

const heroTitle = document.createElement("p");
heroTitle.className = "title";
const heroSpan = document.createElement("span");
heroSpan.textContent = "fire.";
heroTitle.append("Built around the ", heroSpan);

const heroSubtitle = document.createElement("p");
heroSubtitle.className = "subtitle";
heroSubtitle.textContent =
  "Ember & Salt opened in 2024 with one conviction: live fire is the most honest way to cook. Only wood, heat, and ingredients worth respecting.";

hero.append(heroEyebrow, heroTitle, heroSubtitle);

// Kitchen
const kitchenContainer = document.createElement("div");
kitchenContainer.className = "container";

const img = document.createElement("div");
img.className = "img";

const kitchen = document.createElement("div");
kitchen.className = "the-kitchen";

const kitchenEyebrow = document.createElement("p");
kitchenEyebrow.className = "eyebrow";
kitchenEyebrow.textContent = "THE KITCHEN";

const kitchenTitle = document.createElement("p");
kitchenTitle.className = "title";
kitchenTitle.textContent = "The hearth sits in the center of the room on purpose.";

const kitchenSubtitle = document.createElement("p");
kitchenSubtitle.className = "subtitle";
kitchenSubtitle.textContent =
  "We source from twelve farms within a hundred miles of Millcreek. The menu is rewritten every week according to seasonal cooking demands.";

kitchen.append(kitchenEyebrow, kitchenTitle, kitchenSubtitle);
kitchenContainer.append(img, kitchen);

// Stats
const stats = document.createElement("div");
stats.className = "stats";

const statsData = [
  { title: "2024", subtitle: "FOUNDED" },
  { title: "38", subtitle: "SEATS" },
  { title: "12+", subtitle: "LOCAL FARMS" },
  { title: "100%", subtitle: "LIVE FIRE" },
];

statsData.forEach(({ title, subtitle }) => {
  const card = document.createElement("div");
  card.className = "card";
  const cardTitle = document.createElement("p");
  cardTitle.className = "card-title";
  cardTitle.textContent = title;
  const cardSubtitle = document.createElement("p");
  cardSubtitle.className = "card-subtitle";
  cardSubtitle.textContent = subtitle;
  card.append(cardTitle, cardSubtitle);
  stats.append(card);
});

// Meet the team
const meetTheTeam = document.createElement("div");
meetTheTeam.className = "meet-the-team";

const teamEyebrow = document.createElement("p");
teamEyebrow.className = "eyebrow";
teamEyebrow.textContent = "THE PEOPLE";

const teamTitle = document.createElement("p");
teamTitle.className = "title";
teamTitle.textContent = "Meet the team";

const teamCards = document.createElement("div");
teamCards.className = "team-cards";

const teamData = [
  {
    initials: "MC",
    name: "Marco Cienfuego",
    role: "EXECUTIVE CHEF & CO-FOUNDER",
    bio: "Trained in Basque country, spent a decade in open-fire kitchens before bringing it to Utah.",
  },
  {
    initials: "LR",
    name: "Lena Roark",
    role: "BEVERAGE DIRECTOR",
    bio: "Built the cocktail program around char, smoke, and aged spirits to complement the hearth.",
  },
  {
    initials: "DW",
    name: "Diego Walsh",
    role: "GENERAL MANAGER & CO-FOUNDER",
    bio: "Three michelin-recognized restaurants before co-founding Ember & Salt.",
  },
];

teamData.forEach(({ initials, name, role, bio }) => {
  const card = document.createElement("div");
  card.className = "card";

  const pfp = document.createElement("div");
  pfp.className = "pfp";
  pfp.textContent = initials;

  const info = document.createElement("div");
  info.className = "info";
  const cardName = document.createElement("p");
  cardName.className = "card-title";
  cardName.textContent = name;
  const cardRole = document.createElement("p");
  cardRole.className = "card-subtitle";
  cardRole.textContent = role;
  info.append(cardName, cardRole);

  const bioEl = document.createElement("p");
  bioEl.className = "bio";
  bioEl.textContent = bio;

  card.append(pfp, info, bioEl);
  teamCards.append(card);
});

meetTheTeam.append(teamEyebrow, teamTitle, teamCards);

// CTA
const cta = document.createElement("div");
cta.className = "cta";

const ctaContainer = document.createElement("div");
ctaContainer.className = "container";

const ctaText = document.createElement("p");
ctaText.textContent = "Come sit with us.";

const ctaButton = document.createElement("button");
ctaButton.textContent = "RESERVE A TABLE";

ctaContainer.append(ctaText, ctaButton);
cta.append(ctaContainer);

aboutContainer.append(hero, kitchenContainer, stats, meetTheTeam, cta);

export default aboutContainer;

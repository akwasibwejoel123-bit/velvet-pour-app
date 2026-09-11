const cocktails = [
  {
    name: "Sex on the Beach",
    type: "Alcoholic",
    description: "A fruity, refreshing classic cocktail.",
  },
  {
    name: "Tequila Sunrise",
    type: "Alcoholic",
    description: "Tequila, citrus and a beautiful sunrise finish.",
  },
  {
    name: "Black Russian",
    type: "Alcoholic",
    description: "A smooth vodka and coffee liqueur classic.",
  },
  {
    name: "White Russian",
    type: "Alcoholic",
    description: "Creamy, smooth and indulgent.",
  },
  {
    name: "Classic Martini",
    type: "Alcoholic",
    description: "Elegant, clean and timeless.",
  },
  {
    name: "Shirley Temple",
    type: "Non-Alcoholic",
    description: "A refreshing fruity mocktail.",
  },
  {
    name: "Blue Lagoon",
    type: "Non-Alcoholic",
    description: "Bright, refreshing and tropical.",
  },
  {
    name: "Pink Sprite",
    type: "Non-Alcoholic",
    description: "Sweet, fizzy and refreshing.",
  },
];

export default function Home() {
  return (
    <main className="home">
      <nav className="navbar">
        <h2>VELVET POUR</h2>

        <button className="cartButton">
          Cart 🛒
        </button>
      </nav>

      <section className="hero">
        <p className="smallText">WELCOME TO</p>

        <h1>
          VELVET
          <br />
          POUR
        </h1>

        <p>
          Premium cocktails, crafted for unforgettable moments.
        </p>

        <button className="orderButton">
          Explore Cocktails
        </button>
      </section>

      <section className="menu">
        <div className="sectionTitle">
          <p className="smallText">OUR MENU</p>
          <h2>Choose Your Pour</h2>
        </div>

        <div className="cocktailGrid">
          {cocktails.map((cocktail) => (
            <div className="cocktailCard" key={cocktail.name}>
              <div className="cocktailImage">
                🍸
              </div>

              <p className="cocktailType">
                {cocktail.type}
              </p>

              <h3>{cocktail.name}</h3>

              <p>{cocktail.description}</p>

              <button className="addButton">
                Add to Order
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="delivery">
        <p className="smallText">VELVET POUR DELIVERY</p>

        <h2>
          Your favorite pour,
          <br />
          delivered to you.
        </h2>

        <p>
          Order your cocktails and we'll handle the rest.
        </p>

        <button className="orderButton">
          Start an Order
        </button>
      </section>

      <footer>
        <h3>VELVET POUR</h3>
        <p>Premium cocktails • Kampala</p>
        <p>© 2026 Velvet Pour</p>
      </footer>
    </main>
  );
}

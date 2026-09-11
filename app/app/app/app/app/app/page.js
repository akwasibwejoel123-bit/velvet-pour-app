"use client";

import { useState } from "react";

const cocktails = [
  {
    name: "Sex on the Beach",
    type: "Alcoholic",
    description: "A fruity, refreshing classic cocktail.",
    price: 15000,
  },
  {
    name: "Tequila Sunrise",
    type: "Alcoholic",
    description: "Tequila, citrus and a beautiful sunrise finish.",
    price: 15000,
  },
  {
    name: "Black Russian",
    type: "Alcoholic",
    description: "A smooth vodka and coffee liqueur classic.",
    price: 15000,
  },
  {
    name: "White Russian",
    type: "Alcoholic",
    description: "Creamy, smooth and indulgent.",
    price: 15000,
  },
  {
    name: "Classic Martini",
    type: "Alcoholic",
    description: "Elegant, clean and timeless.",
    price: 15000,
  },
  {
    name: "Shirley Temple",
    type: "Non-Alcoholic",
    description: "A refreshing fruity mocktail.",
    price: 8000,
  },
  {
    name: "Blue Lagoon",
    type: "Non-Alcoholic",
    description: "Bright, refreshing and tropical.",
    price: 8000,
  },
  {
    name: "Pink Sprite",
    type: "Non-Alcoholic",
    description: "Sweet, fizzy and refreshing.",
    price: 8000,
  },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    location: "",
    notes: "",
  });

  function addToCart(cocktail) {
    setCart([...cart, cocktail]);
  }

  function removeFromCart(index) {
    setCart(cart.filter((_, i) => i !== index));
  }

  function updateCustomer(e) {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  function submitOrder(e) {
    e.preventDefault();

    if (
      !customer.name ||
      !customer.phone ||
      !customer.location
    ) {
      alert("Please complete your name, phone and delivery location.");
      return;
    }

    setOrderSent(true);
  }

  if (orderSent) {
    return (
      <main className="confirmation">

        <div className="confirmationBox">

          <div className="successIcon">
            ✓
          </div>

          <p className="smallText">
            ORDER RECEIVED
          </p>

          <h1>Thank You, {customer.name}!</h1>

          <p>
            Your Velvet Pour order has been received.
          </p>

          <p>
            We will contact you on{" "}
            <strong>{customer.phone}</strong>{" "}
            to confirm your delivery.
          </p>

          <p>
            Delivery location:
            <br />
            <strong>{customer.location}</strong>
          </p>

          <h2>
            UGX {total.toLocaleString()}
          </h2>

          <button
            className="orderButton"
            onClick={() => {
              setOrderSent(false);
              setShowCheckout(false);
              setCart([]);
            }}
          >
            Back to Velvet Pour
          </button>

        </div>

      </main>
    );
  }

  return (
    <main className="home">

      <nav className="navbar">

        <h2>VELVET POUR</h2>

        <button
          className="cartButton"
          onClick={() =>
            document
              .getElementById("cart")
              ?.scrollIntoView()
          }
        >
          🛒 Cart ({cart.length})
        </button>

      </nav>

      <section className="hero">

        <p className="smallText">
          WELCOME TO
        </p>

        <h1>
          VELVET
          <br />
          POUR
        </h1>

        <p>
          Premium cocktails, crafted for
          unforgettable moments.
        </p>

        <button
          className="orderButton"
          onClick={() =>
            document
              .getElementById("menu")
              ?.scrollIntoView()
          }
        >
          Explore Cocktails
        </button>

      </section>

      <section
        className="menu"
        id="menu"
      >

        <div className="sectionTitle">

          <p className="smallText">
            OUR MENU
          </p>

          <h2>
            Choose Your Pour
          </h2>

        </div>

        <div className="cocktailGrid">

          {cocktails.map((cocktail) => (

            <div
              className="cocktailCard"
              key={cocktail.name}
            >

              <div className="cocktailImage">
                🍸
              </div>

              <p className="cocktailType">
                {cocktail.type}
              </p>

              <h3>
                {cocktail.name}
              </h3>

              <p>
                {cocktail.description}
              </p>

              <strong>
                UGX{" "}
                {cocktail.price.toLocaleString()}
              </strong>

              <button
                className="addButton"
                onClick={() =>
                  addToCart(cocktail)
                }
              >
                Add to Order
              </button>

            </div>

          ))}

        </div>

      </section>

      {cart.length > 0 && (

        <section
          className="cartSection"
          id="cart"
        >

          <div className="sectionTitle">

            <p className="smallText">
              YOUR ORDER
            </p>

            <h2>
              Shopping Cart
            </h2>

          </div>

          {cart.map((item, index) => (

            <div
              className="cartItem"
              key={index}
            >

              <div>
                <strong>
                  {item.name}
                </strong>

                <p>
                  UGX{" "}
                  {item.price.toLocaleString()}
                </p>
              </div>

              <button
                onClick={() =>
                  removeFromCart(index)
                }
              >
                Remove
              </button>

            </div>

          ))}

          <div className="cartTotal">

            <h3>
              Total: UGX{" "}
              {total.toLocaleString()}
            </h3>

            <button
              className="orderButton"
              onClick={() =>
                setShowCheckout(true)
              }
            >
              Continue to Delivery
            </button>

          </div>

        </section>

      )}

      {showCheckout && (

        <section className="checkout">

          <div className="checkoutBox">

            <p className="smallText">
              DELIVERY DETAILS
            </p>

            <h2>
              Complete Your Order
            </h2>

            <form onSubmit={submitOrder}>

              <label>
                Full Name
              </label>

              <input
                name="name"
                placeholder="Your name"
                value={customer.name}
                onChange={updateCustomer}
              />

              <label>
                Phone Number
              </label>

              <input
                name="phone"
                placeholder="07XXXXXXXX"
                value={customer.phone}
                onChange={updateCustomer}
              />

              <label>
                Delivery Location
              </label>

              <input
                name="location"
                placeholder="Area / address"
                value={customer.location}
                onChange={updateCustomer}
              />

              <label>
               Order Notes
              </label>

              <textarea
                name="notes"
                placeholder="Anything we should know?"
                value={customer.notes}
                onChange={updateCustomer}
              />

              <div className="checkoutTotal">

                <span>
                  Order total
                </span>

                <strong>
                  UGX{" "}
                  {total.toLocaleString()}
                </strong>

              </div>

              <button
                type="submit"
                className="orderButton"
              >
                Place Order
              </button>

            </form>

          </div>

        </section>

      )}

      <section className="delivery">

        <p className="smallText">
          VELVET POUR DELIVERY
        </p>

        <h2>
          Your favorite pour,
          <br />
          delivered to you.
        </h2>

        <p>
          Order your cocktails and
          we'll handle the rest.
        </p>

      </section>

      <footer>

        <h3>
          VELVET POUR
        </h3>

        <p>
          Premium cocktails • Kampala
        </p>

        <p>
          © 2026 Velvet Pour
        </p>

      </footer>

    </main>
  );
}

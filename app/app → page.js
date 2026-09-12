"use client";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="brand-tag">VELVET POUR</p>

          <h1>
            Pour the
            <br />
            <span>Experience.</span>
          </h1>

          <p className="hero-text">
            Premium cocktails, mobile bar experiences and drink delivery
            made for unforgettable moments.
          </p>

          <div className="buttons">
            <button className="primary-btn">Explore Cocktails</button>
            <button className="secondary-btn">Book an Event</button>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>What We Offer</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>🍸 Cocktails</h3>
            <p>
              Discover classic and signature cocktails prepared by Velvet Pour.
            </p>
          </div>

          <div className="service-card">
            <h3>🎉 Mobile Bar</h3>
            <p>
              Bring the Velvet Pour experience directly to your event.
            </p>
          </div>

          <div className="service-card">
            <h3>🛵 Delivery</h3>
            <p>
              Order your favourite drinks and have them delivered to you.
            </p>
          </div>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Drinks</h2>

        <div className="drink-grid">
          <div className="drink-card">
            <div className="drink-image">🍹</div>
            <h3>Sex on the Beach</h3>
            <p>Signature cocktail</p>
            <button>View Drink</button>
          </div>

          <div className="drink-card">
            <div className="drink-image">🍸</div>
            <h3>Classic Martini</h3>
            <p>Classic collection</p>
            <button>View Drink</button>
          </div>

          <div className="drink-card">
            <div className="drink-image">🥃</div>
            <h3>Black Russian</h3>
            <p>Premium collection</p>
            <button>View Drink</button>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Make Your Event Different.</h2>
        <p>
          Weddings, birthdays, parties, corporate events and private
          experiences.
        </p>
        <button className="primary-btn">Book Velvet Pour</button>
      </section>

      <footer>
        <h3>VELVET POUR</h3>
        <p>Premium drinks. Unforgettable experiences.</p>
        <p>📞 0791696326</p>
      </footer>
    </main>
  );
}


export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#100d0b",
      color: "#f8e7c5",
      fontFamily: "Arial, sans-serif",
      padding: "30px 20px"
    }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #66502d",
        paddingBottom: "20px"
      }}>
        <h2 style={{ color: "#d9ad62" }}>VELVET POUR</h2>
        <span>☰</span>
      </header>

      <section style={{
        textAlign: "center",
        padding: "70px 10px 50px"
      }}>
        <p style={{ letterSpacing: "4px", color: "#d9ad62" }}>
          PREMIUM DRINKS & EXPERIENCES
        </p>

        <h1 style={{
          fontSize: "clamp(38px, 8vw, 65px)",
          marginBottom: "20px"
        }}>
          Pour Something<br />Extraordinary.
        </h1>

        <p style={{
          color: "#c7bca9",
          lineHeight: 1.8,
          maxWidth: "500px",
          margin: "0 auto 30px"
        }}>
          Discover Velvet Pour, your destination for premium drinks,
          signature cocktails and unforgettable experiences.
        </p>

        <a href="#products" style={{
          display: "inline-block",
          background: "#d9ad62",
          color: "#100d0b",
          padding: "15px 28px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          EXPLORE OUR COLLECTION
        </a>
      </section>

      <section id="products" style={{ padding: "25px 0" }}>
        <h2 style={{ textAlign: "center", color: "#d9ad62" }}>
          Welcome to Velvet Pour
        </h2>
        <p style={{
          textAlign: "center",
          color: "#c7bca9",
          lineHeight: 1.8
        }}>
          Premium selections. Elegant service. Memorable moments.
        </p>
      </section>

      <footer style={{
        textAlign: "center",
        borderTop: "1px solid #66502d",
        marginTop: "40px",
        paddingTop: "25px",
        color: "#c7bca9"
      }}>
        <p>VELVET POUR</p>
        <p>© 2026 Velvet Pour. All rights reserved.</p>
      </footer>
    </main>
  );
}

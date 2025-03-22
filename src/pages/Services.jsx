function Services() {
    const styles = {
      servicesContainer: {
        fontFamily: "'Inter', sans-serif",
        textAlign: "center",
        padding: "50px",
        background: "#f9f9f9",
        color: "#333",
      },
      heroSection: {
        background: "#0C9359",
        color: "white",
        padding: "60px 20px",
        borderRadius: "10px",
      },
      title: {
        fontSize: "3rem",
        fontWeight: "600",
      },
      subtitle: {
        fontSize: "1.2rem",
        marginTop: "10px",
      },
      content: {
        maxWidth: "800px",
        margin: "auto",
        padding: "40px 20px",
      },
      sectionTitle: {
        fontSize: "2rem",
        fontWeight: "600",
        marginTop: "30px",
      },
      text: {
        fontSize: "1.1rem",
        lineHeight: "1.6",
      },
      serviceList: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "30px",
      },
      serviceItem: {
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    };
  
    return (
      <div style={styles.servicesContainer}>
        <div style={styles.heroSection}>
          <h1 style={styles.title}>Our Services</h1>
          <p style={styles.subtitle}>
            Smart gardening solutions tailored for you.
          </p>
        </div>
  
        <div style={styles.content}>
          <h2 style={styles.sectionTitle}>What We Offer</h2>
          <p style={styles.text}>
            Our smart gardening services are designed to make plant care
            efficient, automated, and hassle-free.
          </p>
  
          <div style={styles.serviceList}>
            <div style={styles.serviceItem}>
              <h3>🌱 Smart Plant Monitoring</h3>
              <p>Track soil moisture, temperature, and light levels in real time.</p>
            </div>
            <div style={styles.serviceItem}>
              <h3>💧 Automated Irrigation</h3>
              <p>Ensure plants get the right amount of water with AI-powered irrigation.</p>
            </div>
            <div style={styles.serviceItem}>
              <h3>💡 Intelligent Lighting</h3>
              <p>Optimize plant growth with automated lighting control.</p>
            </div>
            <div style={styles.serviceItem}>
              <h3>📊 Data Analytics</h3>
              <p>Get insights on your plants health and growth trends.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  
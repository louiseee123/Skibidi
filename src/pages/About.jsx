function About() {
    const styles = {
      aboutContainer: {
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
      benefitsList: {
        listStyle: "none",
        padding: "0",
      },
      benefitItem: {
        fontSize: "1.2rem",
        padding: "10px 0",
      },
    };
  
    return (
      <div style={styles.aboutContainer}>
        <div style={styles.heroSection}>
          <h1 style={styles.title}>About EcoTech</h1>
          <p style={styles.subtitle}>
            Revolutionizing gardening with smart, sustainable technology.
          </p>
        </div>
  
        <div style={styles.content}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.text}>
            At EcoTech, we strive to bridge technology and sustainability by
            providing smart gardening solutions. Our goal is to make plant care
            effortless, helping you grow greener and healthier plants.
          </p>
  
          <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
          <ul style={styles.benefitsList}>
            <li style={styles.benefitItem}>🌱 Smart Gardening Made Simple</li>
            <li style={styles.benefitItem}>⚡ AI-Powered Plant Monitoring</li>
            <li style={styles.benefitItem}>💡 Automated Irrigation & Lighting</li>
            <li style={styles.benefitItem}>🌍 Environmentally Friendly Solutions</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default About;
  
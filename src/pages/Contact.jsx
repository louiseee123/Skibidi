function Contact() {
    const styles = {
      contactContainer: {
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
      contactInfo: {
        fontSize: "1.2rem",
        marginTop: "20px",
      },
      form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "20px",
      },
      input: {
        padding: "10px",
        fontSize: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
      },
      button: {
        background: "#0C9359",
        color: "white",
        padding: "10px",
        fontSize: "1.2rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      },
    };
  
    return (
      <div style={styles.contactContainer}>
        <div style={styles.heroSection}>
          <h1 style={styles.title}>Contact Us</h1>
          <p style={styles.subtitle}>
            We are here to help! Get in touch with our EcoTech team.
          </p>
        </div>
  
        <div style={styles.content}>
          <h2 style={styles.sectionTitle}>Get in Touch</h2>
          <p style={styles.text}>
            Have questions about our smart gardening solutions? Reach out to us!
          </p>
  
          <div style={styles.contactInfo}>
            📧 Email: support@ecotech.com <br />
            📞 Phone: +123 456 7890 <br />
            📍 Address: 123 Greenway St, Eco City
          </div>
  
          <h2 style={styles.sectionTitle}>Send Us a Message</h2>
          <form style={styles.form}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <textarea placeholder="Your Message" style={styles.input}></textarea>
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Contact;
  

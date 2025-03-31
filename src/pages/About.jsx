import React from 'react';

function About() {
  const styles = {
    aboutContainer: {
      fontFamily: "'Inter', sans-serif",
      padding: "20px",
      background: "#f5f5f5",
      color: "#333",
      minHeight: "100vh",
    },
    heroSection: {
      background: "#2C3E50",
      color: "white",
      padding: "60px 20px",
      borderRadius: "8px",
      marginBottom: "30px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "1.1rem",
      opacity: "0.9",
    },
    content: {
      maxWidth: "800px",
      margin: "auto",
      padding: "40px 20px",
      background: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    },
    sectionTitle: {
      fontSize: "1.8rem",
      fontWeight: "600",
      margin: "30px 0 15px",
      color: "#2C3E50",
    },
    text: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      marginBottom: "20px",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      margin: "30px 0",
    },
    featureCard: {
      background: "#f9f9f9",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
    },
    featureIcon: {
      fontSize: "2rem",
      marginBottom: "15px",
      color: "#3498DB",
    },
    teamGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "25px",
      margin: "40px 0",
    },
    teamMember: {
      textAlign: "center",
    },
    memberPhoto: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "15px",
      border: "3px solid #3498DB",
    },
  };

  const features = [
    { icon: "📚", title: "Vast Collection", description: "Over 50,000 books across all genres" },
    { icon: "🔍", title: "Smart Search", description: "Find exactly what you're looking for" },
    { icon: "📱", title: "Mobile Access", description: "Read anywhere with our app" },
    { icon: "💡", title: "Personalized", description: "Recommendations tailored for you" },
  ];

  const teamMembers = [
    { name: "Sarah Johnson", role: "Founder & CEO", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Michael Chen", role: "CTO", photo: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Emma Wilson", role: "Head Librarian", photo: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "David Miller", role: "UX Designer", photo: "https://randomuser.me/api/portraits/men/75.jpg" },
  ];

  return (
    <div style={styles.aboutContainer}>
      <div style={styles.heroSection}>
        <h1 style={styles.title}>About QuickBooks</h1>
        <p style={styles.subtitle}>
          Your digital gateway to the world of literature
        </p>
      </div>

      <div style={styles.content}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={styles.text}>
          Founded in 2020, QuickBooks began as a small project to make books more accessible.
          Today, we've grown into one of the most comprehensive digital libraries, serving
          readers worldwide with our vast collection and innovative features.
        </p>

        <h2 style={styles.sectionTitle}>Why QuickBooks?</h2>
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.text}>
          We believe everyone should have access to great literature. Our mission is to
          break down barriers to reading by providing an affordable, accessible, and
          enjoyable platform for book lovers everywhere.
        </p>

        <h2 style={styles.sectionTitle}>Meet The Team</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.teamMember}>
              <img 
                src={member.photo} 
                alt={member.name} 
                style={styles.memberPhoto} 
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
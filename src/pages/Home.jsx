import React from 'react';

function Home() {
  const styles = {
    root: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '2rem',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
    },
    heroSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '3rem',
    },
    heroText: {
      maxWidth: '600px',
    },
    header: {
      fontSize: '3.5rem',
      color: '#2C3E50',
      fontWeight: 'bold',
      lineHeight: '1.2',
      marginBottom: '1.5rem',
    },
    headerSpan: {
      color: '#3498DB',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#555',
      marginBottom: '2rem',
      lineHeight: '1.6',
    },
    ctaButton: {
      backgroundColor: '#3498DB',
      color: 'white',
      border: 'none',
      padding: '12px 30px',
      borderRadius: '5px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: '#2980B9',
      },
    },
    heroImage: {
      width: '500px',
      borderRadius: '10px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    },
    featuresSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      margin: '5rem 0',
    },
    featureCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      textAlign: 'center',
    },
    featureIcon: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      color: '#3498DB',
    },
    featureTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#2C3E50',
    },
    featureText: {
      color: '#666',
      lineHeight: '1.6',
    },
  };

  const features = [
    {
      icon: '📚',
      title: 'Extensive Collection',
      text: 'Access thousands of books across all genres'
    },
    {
      icon: '🔍',
      title: 'Smart Search',
      text: 'Find exactly what you need with our powerful search'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      text: 'Read anywhere with our cross-platform app'
    }
  ];

  return (
    <div style={styles.root}>
      <div style={styles.heroSection}>
        <div style={styles.heroText}>
          <h1 style={styles.header}>
            Discover Your Next <span style={styles.headerSpan}>Favorite Book</span>
          </h1>
          <p style={styles.subtitle}>
            QuickBooks gives you unlimited access to the world's best literature.
            Join thousands of readers in exploring our vast digital library.
          </p>
          <button style={styles.ctaButton}>Start Reading Now</button>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
          alt="Person reading a book" 
          style={styles.heroImage}
        />
      </div>

      <div style={styles.featuresSection}>
        {features.map((feature, index) => (
          <div key={index} style={styles.featureCard}>
            <div style={styles.featureIcon}>{feature.icon}</div>
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={styles.featureText}>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
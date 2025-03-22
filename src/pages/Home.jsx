function Home() {
  const styles = {
    root: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '2rem',
    },
    header: {
      position: 'absolute',
      bottom: '29rem',
      left: '7rem',
      fontSize: '400%',
      color: 'black',
      fontWeight: 'bold',
    },
    headerSpan: {
      color: 'white',
    },
    shape: {
      position: 'absolute',
      backgroundColor: '#0C9359',
      width: '25rem',
      height: '40rem',
      borderRadius: '20rem',
      bottom: '21rem',
      right: '30.5rem',
      zIndex: -1,
    },
  };

  return (
    <div style={styles.root}>
      <div style={styles.shape} />
      <h1 style={styles.header}>
        Beautify your <span style={styles.headerSpan}>Home</span>
        <br />
        with EcoStore
      </h1>
    </div>
  );
}

export default Home;

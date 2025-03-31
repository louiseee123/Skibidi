import { useState } from "react";


function Browse() {
  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      padding: "20px",
      background: "#f5f5f5",
      color: "#333",
      minHeight: "100vh",
    },
    header: {
      background: "#2C3E50",
      color: "white",
      padding: "40px 20px",
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
    searchBar: {
      display: "flex",
      margin: "30px auto",
      maxWidth: "800px",
    },
    searchInput: {
      flex: "1",
      padding: "12px 15px",
      fontSize: "1rem",
      border: "1px solid #ddd",
      borderRadius: "4px 0 0 4px",
      outline: "none",
    },
    searchButton: {
      background: "#3498DB",
      color: "white",
      border: "none",
      padding: "0 20px",
      borderRadius: "0 4px 4px 0",
      cursor: "pointer",
      fontSize: "1rem",
    },
    filters: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginBottom: "30px",
      flexWrap: "wrap",
    },
    filterButton: {
      padding: "8px 16px",
      background: "white",
      border: "1px solid #ddd",
      borderRadius: "20px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    filterButtonActive: {
      background: "#3498DB",
      color: "white",
      borderColor: "#3498DB",
    },
    booksGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "25px",
      padding: "20px",
    },
    bookCard: {
      background: "white",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
      cursor: "pointer",
      ":hover": {
        transform: "translateY(-5px)",
      },
    },
    bookCover: {
      height: "300px",
      background: "#eee",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    bookInfo: {
      padding: "15px",
    },
    bookTitle: {
      fontSize: "1.1rem",
      fontWeight: "600",
      marginBottom: "5px",
    },
    bookAuthor: {
      color: "#666",
      fontSize: "0.9rem",
      marginBottom: "10px",
    },
    bookMeta: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "0.8rem",
      color: "#888",
    },
    pagination: {
      display: "flex",
      justifyContent: "center",
      marginTop: "40px",
      gap: "10px",
    },
    pageButton: {
      padding: "8px 12px",
      background: "white",
      border: "1px solid #ddd",
      borderRadius: "4px",
      cursor: "pointer",
    },
    pageButtonActive: {
      background: "#3498DB",
      color: "white",
      borderColor: "#3498DB",
    },
  };

  // Sample book data
  const books = [
    {
      id: 1,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "Thriller",
      year: 2019,
      rating: 4.5,
      coverColor: "#8E44AD",
    },
    {
      id: 2,
      title: "Educated",
      author: "Tara Westover",
      genre: "Memoir",
      year: 2018,
      rating: 4.7,
      coverColor: "#E74C3C",
    },
    {
      id: 3,
      title: "Project Hail Mary",
      author: "Andy Weir",
      genre: "Sci-Fi",
      year: 2021,
      rating: 4.8,
      coverColor: "#3498DB",
    },
    {
      id: 4,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      genre: "Fiction",
      year: 2018,
      rating: 4.6,
      coverColor: "#16A085",
    },
    {
      id: 5,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      year: 2018,
      rating: 4.9,
      coverColor: "#F39C12",
    },
    {
      id: 6,
      title: "The Midnight Library",
      author: "Matt Haig",
      genre: "Fantasy",
      year: 2020,
      rating: 4.2,
      coverColor: "#2C3E50",
    },
  ];

  const genres = ["All", "Fiction", "Thriller", "Sci-Fi", "Memoir", "Fantasy", "Self-Help"];
  const [activeGenre, setActiveGenre] = useState("All");

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>QuickBooks Library</h1>
        <p style={styles.subtitle}>Discover your next favorite read from our extensive collection</p>
        
        <div style={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search by title, author, or ISBN..." 
            style={styles.searchInput}
          />
          <button style={styles.searchButton}>Search</button>
        </div>
      </div>

      <div style={styles.filters}>
        {genres.map(genre => (
          <button 
            key={genre}
            style={{
              ...styles.filterButton,
              ...(activeGenre === genre ? styles.filterButtonActive : {})
            }}
            onClick={() => setActiveGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div style={styles.booksGrid}>
        {books.filter(book => activeGenre === "All" || book.genre === activeGenre).map(book => (
          <div key={book.id} style={styles.bookCard}>
            <div style={{...styles.bookCover, backgroundColor: book.coverColor}}></div>
            <div style={styles.bookInfo}>
              <h3 style={styles.bookTitle}>{book.title}</h3>
              <p style={styles.bookAuthor}>{book.author}</p>
              <div style={styles.bookMeta}>
                <span>{book.year}</span>
                <span>★ {book.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.pagination}>
        <button style={styles.pageButton}>Previous</button>
        <button style={{...styles.pageButton, ...styles.pageButtonActive}}>1</button>
        <button style={styles.pageButton}>2</button>
        <button style={styles.pageButton}>3</button>
        <button style={styles.pageButton}>Next</button>
      </div>
    </div>
  );
}

export default Browse;
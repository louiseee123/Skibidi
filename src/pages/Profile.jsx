import React, { useState } from 'react';
import './Profile.css';
import { FaBookOpen, FaBookmark, FaEye, FaRegBookmark } from 'react-icons/fa';
import { RiBookReadLine } from 'react-icons/ri';

const Profile = () => {
  // Sample user data
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    joinDate: "Member since June 2022",
    booksRead: 47,
    currentlyReading: 3,
    wishlist: 12,
    avatar: "",
    readingGoal: 52,
    favoriteGenres: ["Mystery", "Science Fiction", "Biography"]
  };

  // Sample books data
  const currentlyReading = [
    { 
      id: 1, 
      title: "The Silent Patient", 
      author: "Alex Michaelides", 
      cover: "#8E44AD",
      progress: 65,
      lastRead: "2 days ago"
    },
    { 
      id: 2, 
      title: "Atomic Habits", 
      author: "James Clear", 
      cover: "#F39C12",
      progress: 30,
      lastRead: "1 week ago"
    },
    { 
      id: 3, 
      title: "Project Hail Mary", 
      author: "Andy Weir", 
      cover: "#3498DB",
      progress: 15,
      lastRead: "Yesterday"
    },
  ];

  const wishlist = [
    { 
      id: 4, 
      title: "Where the Crawdads Sing", 
      author: "Delia Owens", 
      cover: "#16A085",
      addedDate: "3 weeks ago"
    },
    { 
      id: 5, 
      title: "Educated", 
      author: "Tara Westover", 
      cover: "#E74C3C",
      addedDate: "1 month ago"
    },
    { 
      id: 6, 
      title: "The Midnight Library", 
      author: "Matt Haig", 
      cover: "#2C3E50",
      addedDate: "2 weeks ago"
    },
  ];

  const [activeTab, setActiveTab] = useState('reading');
  const [readingGoal, setReadingGoal] = useState(user.readingGoal);

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1 className="profile-title">My Reading Profile</h1>
        <p className="profile-subtitle">Track your reading journey</p>
      </header>

      <div className="profile-content">
        <aside className="profile-sidebar">
          <div className="profile-card">
            <img src={user.avatar} alt="Profile" className="profile-picture" />
            <h2 className="profile-username">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
            <p className="profile-joindate">{user.joinDate}</p>
            
            <div className="profile-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <RiBookReadLine />
                </div>
                <div className="stat-value">{user.booksRead}</div>
                <div className="stat-label">Books Read</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <FaBookOpen />
                </div>
                <div className="stat-value">{user.currentlyReading}</div>
                <div className="stat-label">Reading Now</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <FaBookmark />
                </div>
                <div className="stat-value">{user.wishlist}</div>
                <div className="stat-label">Wishlist</div>
              </div>
            </div>

            <div className="reading-goal">
              <h3>Reading Goal</h3>
              <div className="goal-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${Math.min(100, (user.booksRead / readingGoal) * 100)}%` }}
                ></div>
              </div>
              <div className="goal-text">
                <span>{user.booksRead} of {readingGoal} books</span>
                <span>{Math.round((user.booksRead / readingGoal) * 100)}%</span>
              </div>
            </div>

            <div className="favorite-genres">
              <h3>Favorite Genres</h3>
              <div className="genre-tags">
                {user.favoriteGenres.map((genre, index) => (
                  <span key={index} className="genre-tag">{genre}</span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="profile-main">
          <div className="profile-tabs">
            <button 
              className={`tab-button ${activeTab === 'reading' ? 'active' : ''}`}
              onClick={() => setActiveTab('reading')}
            >
              <FaBookOpen className="tab-icon" />
              Currently Reading
            </button>
            <button 
              className={`tab-button ${activeTab === 'wishlist' ? 'active' : ''}`}
              onClick={() => setActiveTab('wishlist')}
            >
              <FaRegBookmark className="tab-icon" />
              My Wishlist
            </button>
          </div>

          {activeTab === 'reading' && (
            <section className="books-section">
              <h2 className="section-title">
                <FaBookOpen className="section-icon" />
                Currently Reading
              </h2>
              <div className="books-grid">
                {currentlyReading.map(book => (
                  <div key={book.id} className="book-card">
                    <div className="book-cover" style={{ backgroundColor: book.cover }}>
                      <div className="reading-progress">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${book.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="book-info">
                      <h3 className="book-title">{book.title}</h3>
                      <p className="book-author">{book.author}</p>
                      <div className="book-meta">
                        <span className="progress-text">{book.progress}% read</span>
                        <span className="last-read">{book.lastRead}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'wishlist' && (
            <section className="books-section">
              <h2 className="section-title">
                <FaRegBookmark className="section-icon" />
                My Wishlist
              </h2>
              <div className="books-grid">
                {wishlist.map(book => (
                  <div key={book.id} className="book-card">
                    <div className="book-cover" style={{ backgroundColor: book.cover }}></div>
                    <div className="book-info">
                      <h3 className="book-title">{book.title}</h3>
                      <p className="book-author">{book.author}</p>
                      <div className="book-meta">
                        <span className="added-date">Added {book.addedDate}</span>
                        <button className="wishlist-remove">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default Profile;
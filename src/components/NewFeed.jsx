import React from "react";
import "./NewFeed.css";

function NewFeed() {
  const posts = [
    {
      id: 1,
      user: "Sophia Walker",
      location: "Bali, Indonesia",
      image: 
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beautiful sunset at the beach. One of the best travel moments ever!",
      likes: 245,
      comments: 32,
    },

    {
      id: 2,
      user: "David Kim",
      location: "Paris, France",
      image:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop",
      description:
        "Walking around Paris at night was magical ✨",
      likes: 188,
      comments: 14,
    },

    {
      id: 3,
      user: "Emily Chen",
      location: "Tokyo, Japan",
      image:
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200&auto=format&fit=crop",
      description:
        "Tokyo streets are full of life and amazing food spots.",
      likes: 421,
      comments: 53,
    },
    {
        id: 4,
        user: "Fushiii",
        location: "New York, USA",
        image:
          "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop",
        description:
          "Exploring the vibrant streets of New York City!",
        likes: 312,
        comments: 28,
      }
  ];

  return (
    <section className="feed">

      <div className="feed-top">

        <h1 className="feed-title">
          Travel NewsFeed
        </h1>

        <input
          type="text"
          placeholder="Search destination..."
          className="search-input"
        />

      </div>

      <div className="posts-grid">

        {posts.map((post) => (
          <div className="post-card" key={post.id}>

            <img
              src={post.image}
              alt={post.location}
              className="post-image"
            />

            <div className="post-content">

              <div className="post-header">

                <div>
                  <h2>{post.user}</h2>
                  <p>{post.location}</p>
                </div>

                <button className="follow-btn">
                  Follow
                </button>

              </div>

              <p className="post-description">
                {post.description}
              </p>

              <div className="post-actions">

                <button>❤️ {post.likes}</button>

                <button>💬 {post.comments}</button>

                <button>📤 Share</button>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default NewFeed;
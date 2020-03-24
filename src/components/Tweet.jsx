import React, { useState } from "react";

const Tweet = ({ tweet, upVote, downVote }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{tweet.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{tweet.handle}</h6>
        <p className="card-text">{tweet.tweet}</p>
        <a href="#" className="card-link">
          {tweet.phoneNumber}
        </a>
        <a href="#" className="card-link">
          {tweet.email}
        </a>
        <button
          onClick={() => downVote(tweet.id)}
          className="card-link btn btn-danger"
        >
          <i className="fas fa-arrow-down"></i>
        </button>
        <button
          onClick={() => upVote(tweet.id)}
          className="card-link btn btn-primary"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
        <span className="card-link badge badge-info">{tweet.likes}</span>
      </div>
    </div>
  );
};

export default Tweet;

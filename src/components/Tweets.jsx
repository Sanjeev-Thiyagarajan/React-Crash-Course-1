import React, { useState } from "react";
import Tweet from "./Tweet";

const Tweets = () => {
  const [tweets, changeTweets] = useState([
    {
      id: 1,
      name: "john Johnson",
      handle: "@jballa",
      tweet: "Who wants to watch some football",
      phoneNumber: "919-123-8976",
      email: "jjson@gmail.com",
      likes: 0
    },
    {
      id: 2,
      name: "mark markybunch",
      handle: "@mkk234",
      tweet: "you'r not you when your hungry",
      phoneNumber: "432-123-8976",
      email: "marymark@gmail.com",
      likes: 0
    },
    {
      id: 3,
      name: "janice officen",
      handle: "@jangirl",
      tweet: "Pappa johns is the best",
      phoneNumber: "772-123-8976",
      email: "jofficen@gmail.com",
      likes: 0
    },
    {
      id: 4,
      name: "janice officen",
      handle: "@jangirl",
      tweet: "Pappa johns is the best",
      phoneNumber: "772-123-8976",
      email: "jofficen@gmail.com",
      likes: 0
    }
  ]);

  const handleIncrement = id => {
    const newstate = [...tweets];

    const index = tweets.findIndex(el => el.id === id);
    newstate[index].likes += 1;
    changeTweets(newstate);
  };

  const handleDecrement = id => {
    const newstate = [...tweets];

    const index = tweets.findIndex(el => el.id === id);
    if (newstate[index].likes > 0) {
      newstate[index].likes -= 1;
      changeTweets(newstate);
    }
  };

  return (
    <div>
      {tweets.map((el, ind) => {
        return (
          <Tweet
            upVote={handleIncrement}
            downVote={handleDecrement}
            key={tweets[ind].id}
            tweet={tweets[ind]}
          />
        );
      })}
    </div>
  );
};

export default Tweets;

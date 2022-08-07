import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
//componentを使うためには必ずimportしなければいけない

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice blog post!"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Hikari"
        timeAgo="Today at 2:00PM"
        content="Hey JK!"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="JungKook"
        timeAgo="Yesterday at 4:45PM"
        content="Hey HK!"
        avatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

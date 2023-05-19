import React from "react";

function Greet(props) {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} aka {props.nickname}
      </h1>
      {props.children}
    </div>
  );
}

const Greet2 = ({ name, nickname}) => {
  return (
    <h1>
      Hello {name} aka {nickname}
    </h1>
  );
};

const Greet3 = ({ name, nickname}) => {
  return (
    <h1>
     Hello {name} aka {nickname}
    </h1>
  );
};

export { Greet, Greet2, Greet3 };
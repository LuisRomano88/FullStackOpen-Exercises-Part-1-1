const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Header = () => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    );
  };

  const Content = () => {
    return(
    <ul>
      <li>{part1}</li>
      <li>{part2}</li>
      <li>{part3}</li>
    </ul>
    );
  };

  const Total = () => {
    return(
    <div>
      <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>
    </div>
    );
  };

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
};


export default App
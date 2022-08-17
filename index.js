const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="bgContainer">
    <h1 className="mainHeading">Social Buttons</h1>
    <div className="button-container">
      <Button className="button button1" buttonText="Like" />
      <Button className="button2" buttonText="Comment" />
      <Button className="button button3" buttonText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

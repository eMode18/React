import { useState } from "react";
import PropTypes from "prop-types";

const StyledCard = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} />
    </div>
  );
};

const ComponentOne = ({ count, onClickHandler }) => {
  const handleClick = () => onClickHandler();
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

// Add PropTypes for ComponentOne
ComponentOne.propTypes = {
  count: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

const ComponentTwo = ({ count, onClickHandler }) => {
  const handleClick = () => onClickHandler();
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

// Add PropTypes for ComponentTwo
ComponentTwo.propTypes = {
  count: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default StyledCard;

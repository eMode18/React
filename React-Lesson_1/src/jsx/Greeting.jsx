const Greeting = () => {
  let currentDate = new Date();
  let time = currentDate.getHours();
  let message = "";

  if (time > 6 && time < 12) {
    message = "Good Morning";
  } else if (time > 12 && time < 16) {
    message = "Good Afternoon";
  } else if (time > 16 && time < 20) {
    message = "Good Evening";
  } else {
    message = "Good Night";
  }

  return (
    <div>
      <h1>{message}</h1>
      <h2>{time.toLocaleString()}</h2>
      <p>{currentDate.toUTCString()}</p>
    </div>
  );
};

export default Greeting;

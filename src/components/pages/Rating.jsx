const Rating = ({ rating }) => {
  let rate = [];
  for (let i = 0; i < 5; i++) {
    if (i <= rating) {
      rate.push(<i key={i} className="star fitted small icon"></i>);
    } else {
      rate.push(<i key={i} className="star outline fitted small icon"></i>);
    }
  }
  return <>{rate}</>;
};

export default Rating;

import React ,{useState} from 'react' ;
import './App.css';


const Star = ({ ratingValue,starId,rating,onMouseEnter,onMouseLeave,onClick}) =>
{
  
  let styleClass = "star-rating-blank";

  if(ratingValue <= rating){
    styleClass = "star-rating-filled";
  }
  else{
    styleClass = "star-rating-blank";
  }

  return(
      <div
      className={styleClass}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
       >
      <svg
      height="55px"
      width="53px"
      viewBox="0 0 25 23"
      data-rating="1"
      >
      <polygon
        strokewidth="0" 
        points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
      />
    </svg>

    </div>
  )

}


function App() {
  const [rating, setRating] = useState(-1);
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];
  {console.log(rating)};

  const onclicks= function(input){
     setRating(input);
  }

  return (
  
    <div className="App">
      <div class="flex-container">
       { stars.map((star, i) => {
          const ratingValue = i+1;
          <Star
            key={i}
            starId={i}
            ratingValue = {ratingValue}
            rating={rating}
            // onMouseEnter={() => onclicks(i+1)}
            // onMouseLeave={() => onclicks(-1)}
            onClick={() => onclicks(ratingValue)}
          />
        })
      }
      </div>
    </div>
  );
}

export default App;

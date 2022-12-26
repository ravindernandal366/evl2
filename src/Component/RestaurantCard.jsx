import styles from "./RestaurantCard.module.css"
function RestaurantCard(props) {
  var obj = props.obj;
  
  var name = obj.name;
  var type = obj.type;
  var rating = obj.rating;
  var price = obj.price_starts_from;
  var votes = obj.number_of_votes;
  var image = obj.image;
  
  return (
  <div data-testid="restaurant-card" className={styles.container}>
   {/* display the props */}
   <img src={image}/>
   <h3>{name}</h3>
   <p>{type}</p>
   <p> {rating} </p>
   <p> {price} </p>
   <p> Number of votes : {votes} </p>
    </div>
  );
}

export default RestaurantCard;

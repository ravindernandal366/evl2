import LoadingIndicator from "./LoadingIndicator";
import RestaurantCard from "./RestaurantCard";
import {useRef, useEffect, useState} from "react";

function Restaurants(props) {
  const loadingIndicatorRef = useRef(null);
  const[dataFetched, setDataFetched] = useState([]);
  
  var pageNumber = props.pageNumber;
  
  useEffect(()=>{
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=" + pageNumber).then((response)=>{
    let ssssk = response.json();
    ssssk.then((res)=>{
      console.log(res.data);
      loadingIndicatorRef.current.style.display="none";
      let restaurantsArray = res.data;
      setDataFetched(restaurantsArray.map((ele)=><RestaurantCard obj={ele}/>))
    })
  });
  }, []);
  

  return <>
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
     <div ref={loadingIndicatorRef} > <LoadingIndicator /> </div>
      <div data-testid="restaurants-container">
       {/* Restaurant Card */}
       {dataFetched}
      </div>
      <div>
        {/* Pagination Component */}
      </div>
    </div>
    </>
  ;
}

export default Restaurants;

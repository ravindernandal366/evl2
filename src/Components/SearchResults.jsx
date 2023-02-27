
export default function SearchResults() {
  
  return (
    <div>
        <h3>Top headlines for **Enter your search key here ** </h3>
        <div className = "news_cont" >
            {/* Map the below div against your data */}

            <div style = {{textAlign: "left", marginBottom: "30px"}}  >
            <h5 className = "name" > </h5>
            <div className = "description" > </div>
            </div>
        </div>
    </div>
  )
}

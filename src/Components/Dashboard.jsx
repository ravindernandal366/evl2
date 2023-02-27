
export default function Dashboard() {
  return (
    <div>
      <h3>Top headlines </h3>
      <div className = "dashboard_news" >
        {/* Map the below div against your data */}

        <div style = {{textAlign: "left", marginBottom: "30px"}}  >
          <h5 className = "name" > </h5>
          <div className = "description" > </div>
        </div>
      </div>
    </div>
  )
}
import { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [displayListings , setDisplayListing] = useState([])
  const [searchQuery, setsearchQuery] = useState('')
  const [error, setError] = useState('')


  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((resp) => resp.json())
    .then(data => setDisplayListing(data))
    .catch(err => {
      setError(err.message)
    })
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    setsearchQuery(e.target.value)
  }

  return (
    <div className="app">
      {error ? <p className='error-message red'>{error}</p> : null}
      <Header 
      handleSubmit={handleSubmit}
      />
      <ListingsContainer 
      displayListings={displayListings}
      searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;

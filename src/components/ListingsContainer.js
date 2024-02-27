import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({displayListings, searchQuery}) {


  const RenderListingList = () => {
    return listingListFiltered.map((displayListing) => (
      <ListingCard 
      {...displayListing} 
      key={displayListing.id}
      />
      ))
    }

  const listingListFiltered = displayListings
  .filter(displayListing => {
    return (displayListing.description.toLowerCase()
    .includes(searchQuery.toLowerCase()))
  })


  return (
    <main>
      <ul className="cards">
        {RenderListingList()}
      </ul>
    </main>
  );
}

export default ListingsContainer;

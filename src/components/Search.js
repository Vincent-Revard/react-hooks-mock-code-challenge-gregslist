
function Search( {handleSubmit , searchQuery} ) {


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchQuery}
        onChange={handleSubmit}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

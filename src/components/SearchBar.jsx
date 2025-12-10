import styles from "./SearchBar.module.css";
import searchIcon from "../assets/Search.svg";
function SearchBar({ username, setUsername, onSearch }) {
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  return (
    <div className={styles.wrapper}>
      <button className={styles.searchButton} onClick={onSearch}>
        <img className={styles.img} src={searchIcon} alt="Search"></img>
      </button>
      <input
        placeholder="username"
        value={username}
        type="text"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
    </div>
  );
}

export default SearchBar;

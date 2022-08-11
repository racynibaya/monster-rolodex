import './search-box.styles.css';

const SearchBox = ({ onChangeHandler, placeHolder, className }) => {
  return (
    <input
      type='search'
      placeholder={placeHolder}
      className={`search-box ${className}`}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;

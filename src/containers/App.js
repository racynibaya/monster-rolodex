import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/header.components.jsx';
import CardList from '../components/card-list/card-list.component.jsx';
import SearchBox from '../components/search-box/search-box.component.jsx';

import './App.css';
import Footer from '../components/footer/footer.components.jsx';

import { setSearchField } from '../actions.js';

const mapStateToProps = state => ({
  searchField: state.searchField,
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
});

const App = ({ searchField, onSearchChange }) => {
  // const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // const onSearchChange = event => {
  //   setSearchField(event.target.value);
  // };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setMonsters(users);
      });
  }, []);

  return (
    <div className='App'>
      <Header title='Monster Rolodex' />
      <SearchBox
        className='monsters-search-box'
        placeHolder='search monster'
        onChangeHandler={onSearchChange}
      />

      <br />

      <div className='scroll-box'>
        <CardList monsters={filteredMonsters} />
      </div>
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/header.components.jsx';
import CardList from '../components/card-list/card-list.component.jsx';
import SearchBox from '../components/search-box/search-box.component.jsx';

import './App.css';
import Footer from '../components/footer/footer.components.jsx';

import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

const App = ({ searchField, onSearchChange, onRequestRobots, robots }) => {
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

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
        <CardList monsters={robots} />
      </div>
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

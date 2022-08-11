import { useEffect, useState } from 'react';

import Header from './components/header/header.components.jsx';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

import './App.css';
import Footer from './components/footer/footer.components.jsx';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // const [stringField, setStringField] = useState('');

  const onSearchChange = event => {
    setSearchField(event.target.value);
  };

  // const onStringChange = event => {
  //   setStringField(event.target.value);
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
      <Header />
      <SearchBox
        className='monsters-search-box'
        placeHolder='search monster'
        onChangeHandler={onSearchChange}
      />
      <div className='scroll-box'>
        <CardList monsters={filteredMonsters} />
      </div>
      <Footer />
    </div>
  );
};

// class App extends Component {
//   // order of running

//   //runs first before anything - to initialize
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchInput: '',
//     };
//   }

//   //3rd to get the data
//   componentDidMount = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => {
//         this.setState(
//           () => {
//             return {
//               monsters: users,
//             };
//           },
//           () => {
//             const { monsters } = this.state;
//             console.log(monsters);
//           }
//         );
//       });
//   };

//   onSearchChange = e => {
//     this.setState(
//       () => {
//         return { searchInput: e.target.value };
//       }
//       // () => {
//       //   console.log(this.state);
//       // }
//     );
//   };

//   //2nd determines what to show
//   render() {
//     console.log('render app ');
//     const { monsters, searchInput } = this.state;
//     const { onSearchChange } = this;

//     const filteredUser = monsters.filter(monster =>
//       monster.name.toLowerCase().includes(searchInput.toLowerCase())
//     );

//     return (
//       <div className='App'>
//         <Header />
//         <SearchBox
//           className='monsters-search-box'
//           placeHolder='search monster'
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredUser} />
//       </div>
//     );
//   }
// }

export default App;

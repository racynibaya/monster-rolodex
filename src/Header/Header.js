import './Header.css';

const Header = () => {
  return (
    <div>
      <h1>Racyn Mundina Ibaya</h1>
      <input
        type='text'
        placeholder='username'
        style={{
          outline: 'none',
          padding: '40px',
          borderRadius: '10px',
          border: '1px solid red',
          textAlign: 'center',
          fontSize: '2rem',
        }}
      />
    </div>
  );
};

export default Header;

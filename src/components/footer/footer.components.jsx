import {
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

import './footer.styles.css';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='social-media'>
          <a
            href='https://github.com/racynibaya'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithubSquare className='icon github-icon' />
          </a>

          <a
            href='https://www.facebook.com/profile.php?id=100075458500109'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebookSquare className='icon facebook-icon' />
          </a>

          <a
            href='https://www.instagram.com/racynmundina/'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagramSquare className='icon insta-icon' />
          </a>

          <a
            href='https://twitter.com/racynmundina'
            target='_blank'
            rel='noreferrer'
          >
            <FaTwitterSquare className='icon twitter-icon' />
          </a>
        </div>
      </div>
      <div className='owner'>
        <p>&copy; Racyn Ibaya</p>
      </div>
    </>
  );
};

export default Footer;

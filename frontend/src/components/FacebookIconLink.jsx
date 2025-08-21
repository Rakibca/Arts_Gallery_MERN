import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const FacebookIconLink = () => {
  return (
    <a
      href="https://www.facebook.com/rony.khan.906638"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      style={{ color: '#1877F2', textDecoration: 'none', fontSize: '32px' }}
    >
      <FontAwesomeIcon icon={faFacebook} />
    </a>
  );
};

export default FacebookIconLink;

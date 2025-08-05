import '../styles/Landing.css'
import spotifyLogo from '../assets/spotify-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGoogle, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';


function Landing(){

return(
	<>
		<header className='landing-header'>
			<img src={spotifyLogo} alt="spotify-logo" className='spotify-logo' />
		</header>
		<main className='landing-main'>
			<h1 className='landing-title'>LIFE IS WASTED ON THE LIVING</h1>
			<p className='landing-text'>Sign in<br/> with</p>

			<div className='singin-buttons'>
				<button className='singin-button'>
					<FontAwesomeIcon icon={faApple} size="6x" color='#1E1E1E'/>
					</button>
				<button className='singin-button'>
					<FontAwesomeIcon icon={faGoogle} size="6x" color='#1E1E1E'/>
				</button>
				<button className='singin-button'>
					<FontAwesomeIcon icon={faXTwitter} size="6x" color='#1E1E1E'/>
				</button>
			</div>
		</main>
	</>
);
}

export default Landing;
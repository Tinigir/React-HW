import React, { useState } from "react";

function Rating() {
	const [ratingValue, setRatingValue] = useState(0);
	
	
	const ratingList = [
		'https://www.clipartmax.com/png/middle/448-4489878_1-out-of-5-stars-1-star-rating-png.png',
		"https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",
		'https://sun9-28.userapi.com/impf/c855436/v855436801/d69a5/8TdLk-8oMHA.jpg?size=1161x913&quality=96&sign=fc8537d8437b1421872208ca5e29fc8a&c_uniq_tag=3sdCGa_KUxOtSRVS5RNDFGr77OoKVRi8MwqGagANG1E&type=album',
		'https://banner2.kisspng.com/20181128/uct/kisspng-galatasaray-s-k-dream-league-soccer-uefa-champion-yldz-clipart-ourclipart-5bff31fccd2c99.8288298815434511328404.jpg'
	  ]


	return(

		<div>
				<img
				src={ratingList[ratingValue]}
				alt="Рейтинг"
				style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
				/>
			<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
				<button onClick={() => setRatingValue(0)}style={{borderRadius: '10px',border:'none', background: 'darkred',padding: '20px 30px'}}>Плохо</button>
				<button onClick={() => setRatingValue(1)}style={{borderRadius: '10px',border:'none', background: 'yellow',padding: '20px 30px'}}>Приемлемо</button>
				<button onClick={() => setRatingValue(2)}style={{borderRadius: '10px',border:'none', background: 'violet',padding: '20px 30px'}}>Хорошо</button>
				<button onClick={() => setRatingValue(3)}style={{borderRadius: '10px',border:'none', background: 'lightgreen',padding: '20px 30px'}}>Отлично</button>
			</div>
		</div>
	);
}

export default Rating;

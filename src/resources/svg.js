import React from 'react'


////////// BOTCHAN //////////

export const Botchan_Mobile = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 667'>
    <g fill='#ffaa3a'>
			<path d='M 0 0 H 346 l 30 15 Z' 
			transform='translate(500 190) rotate(-145)' />
			<path d='M 0 0 H 718 l 45 40 Z' 
			transform='translate(-240 -30) rotate(35)' />
    </g>
	</svg>
);


export const Botchan_Tablet = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 500'>
		<g fill='#ffaa3a'>
			<path d='M 0 0 L 510 0 l 40 15 L 0 0 Z'
			transform='translate(340 0) rotate(135)' />
			<path d='M 0 0 L 630 5 l 40 30 L 0 0 Z'
			transform='translate(-150 280) rotate(15)' />
		</g>
	</svg>
);

export const Botchan_Desktop = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 155 250'>
		<g fill='#ffaa3a'>
			<path d='M 0 0 L 170 0 l 20 10 L 0 0 Z'
			transform='translate(0 75) rotate(28)' />
		</g>
	</svg>
);

////////// BOTCHAN //////////




////////// SANSHIRO //////////

export const Sanshiro_Mobile = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 667'>
    <defs>
			<linearGradient id='s_m_1' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'>
				<stop offset='0' stopColor='#feaef8' />
				<stop offset='1' stopColor='#e800d8' />
			</linearGradient>
			<linearGradient id='s_m_2' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'>
				<stop offset='0' stopColor='#e800d8' />
				<stop offset='1' stopColor='#feaef8' />
			</linearGradient>
			<radialGradient id='s_m_3' cx='0.5' cy='0.5' r='0.5'>
				<stop offset='0' stopColor='#e800d8' />
				<stop offset='1' stopColor='#feaef8' />
			</radialGradient>
    </defs>

		{/* Missing SVG here */}

		<path d='M-1012,48a72,72,0,0,1-72-72,72,72,0,0,1,72-72,72,72,0,0,1,72,72,72,72,0,0,1,72,72,72,72,0,0,1-72,72A72,72,0,0,1-1012,48Z'
		transform='rotate(34 -950 1650)' fill='url(#s_m_2)' />
		<circle cx='34.5' cy='34.5' r='34.5' transform='translate(250 30)' fill='url(#s_m_3)' />
	</svg>
);

export const Sanshiro_Tablet = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 500'>
    <defs>
			<linearGradient id='s_t_1' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'>
				<stop offset='0' stopColor='#feaef8' />
				<stop offset='1' stopColor='#e800d8' />
			</linearGradient>
			<linearGradient id='s_t_2' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'>
				<stop offset='0' stopColor='#e800d8' />
				<stop offset='1' stopColor='#feaef8' />
			</linearGradient>
			<radialGradient id='s_t_3' cx='0.5' cy='0.5' r='0.5'>
				<stop offset='0' stopColor='#e800d8' />
				<stop offset='1' stopColor='#feaef8' />
			</radialGradient>
    </defs>
    <g>
			<path d='M 46 204.5 C 43.52915954589844 204.5 40.93270874023438 204.0784149169922 38.28276443481445 203.2469787597656 C 35.60018539428711 202.4052581787109 32.92989349365234 201.1641845703125 30.3460521697998 199.5581817626953 C 24.83134269714355 196.1304931640625 20.00192070007324 191.2215728759766 16.37986755371094 185.3621368408203 C 10.96405220031738 176.6015472412109 6.864315986633301 164.6568145751953 4.194552421569824 149.8596801757813 C 1.743026256561279 136.2721099853516 0.5 120.3379974365234 0.5 102.5 C 0.5 88.02297210693359 0.7116578817367554 72.76118469238281 2.247210502624512 59.23086929321289 C 3.035789489746094 52.28231430053711 4.107500076293945 46.24373626708984 5.523605346679688 40.77008056640625 C 7.069631576538086 34.7940788269043 8.97886848449707 29.6623420715332 11.3603687286377 25.08165740966797 C 13.25894737243652 21.42952537536621 15.66281604766846 17.98963165283203 18.5052375793457 14.85750007629395 C 21.17852592468262 11.91171073913574 24.17513084411621 9.304737091064453 27.41178894042969 7.109000205993652 C 30.52731513977051 4.995473861694336 33.73905181884766 3.345657825469971 36.95781707763672 2.205420970916748 C 40.15229034423828 1.073789477348328 43.19452667236328 0.5 46 0.5 C 51.74663162231445 0.5 57.83239364624023 3.027052640914917 63.59939575195313 7.807973861694336 C 69.41347503662109 12.62792110443115 74.61331939697266 19.49931526184082 78.63678741455078 27.6793155670166 C 83.01468658447266 36.57928848266602 86.32347106933594 47.71123504638672 88.47129058837891 60.76594924926758 C 90.48100280761719 72.98120880126953 91.5 87.02255249023438 91.5 102.5 C 91.5 112.5574188232422 91.27955627441406 121.3752136230469 90.8260498046875 129.4572601318359 C 90.30681610107422 138.7108612060547 89.49747467041016 146.7902374267578 88.35179138183594 154.1570587158203 C 87.10620880126953 162.1660766601563 85.44189453125 169.2863464355469 83.40510559082031 175.3200225830078 C 81.20852661132813 181.8271636962891 78.49407958984375 187.3258361816406 75.33718109130859 191.6633758544922 C 73.74026489257813 193.8577880859375 71.65933990478516 195.8454742431641 69.15223693847656 197.5712432861328 C 66.89341735839844 199.1260833740234 64.29497528076172 200.4667358398438 61.42905426025391 201.5559692382813 C 56.50621032714844 203.4269409179688 50.88255310058594 204.5 46 204.5 Z' 
			transform='translate(80 90) rotate(-20)' fill='url(#s_t_1)' />

			{/* Not Showing */}
			<path d='M-1012,48a72,72,0,0,1-72-72,72,72,0,0,1,72-72,72,72,0,0,1,72,72,72,72,0,0,1,72,72,72,72,0,0,1-72,72A72,72,0,0,1-1012,48Z'
			transform='translate(100 200) rotate(0)' fill='url(#s_t_2)' />

			<circle cx='450' cy='100' r='35' fill='url(#s_t_3)' />
    </g>
	</svg>
);

export const Sanshiro_Desktop = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 269 307'>
    <defs>
			<radialGradient id='s_d_1' cx='0.5' cy='0.5' r='0.5'>
				<stop offset='0' stopColor='#e800d8' />
				<stop offset='1' stopColor='#feaef8' />
			</radialGradient>
    </defs>
    <g fill='url(#s_d_1)'>
			<circle cx='65' cy='55' r='35' />
			<circle cx='205' cy='250' r='35' />
    </g>
	</svg>
);

////////// SANSHIRO //////////




////////// KOKORO //////////

export const Kokoro_Mobile = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 667'>
    <defs>
			<linearGradient id='k_m_1' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'>
				<stop offset='0' stopColor='#414141' />
				<stop offset='1' />
			</linearGradient>
    </defs>
    <g fill='url(#k_m_1)'>
			<rect width='530' height='49' transform='translate(-200 180)' />
			<rect width='200' height='20' transform='translate(-200 250)' />
			<rect width='480' height='49' transform='translate(20 320)' />
    </g>
	</svg>
);

export const Kokoro_Tablet = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 500'>
    <defs>
			<linearGradient id='k_t_1' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'>
				<stop offset='0' stopColor='#414141' />
				<stop offset='1' />
			</linearGradient>
    </defs>
    <g fill='url(#k_t_1)'>
			<rect width='420' height='49' transform='translate(-200 180)' />
			<rect width='180' height='20' transform='translate(-200 250)' />
			<rect width='150' height='40' transform='translate(650 310)' />
			<rect width='550' height='49' transform='translate(280 400)' />
    </g>
	</svg>
);

export const Kokoro_Desktop = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 318 161'>
    <defs>
			<linearGradient id='k_d_1' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'>
				<stop offset='0' stopColor='#414141' />
				<stop offset='1' />
			</linearGradient>
    </defs>
    <g fill='url(#k_d_1)'>
        <rect width='240' height='45' transform='translate(26 20)' />
        <rect width='260' height='26' transform='translate(45 120)' />
    </g>
	</svg>
);

////////// KOKORO //////////




////////// NEKO //////////

export const Neko_Mobile = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 375 667'>
	</svg>
);

export const Neko_Tablet = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 768 392'>
	</svg>
);

export const Neko_Desktop = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 95.888 181.773'>
	</svg>
);

////////// NEKO //////////

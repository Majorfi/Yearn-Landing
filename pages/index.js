import	React				from	'react';
import	Flicking			from	'@egjs/react-flicking';
import	{AutoPlay, Fade} 	from	'@egjs/flicking-plugins';
import	useScroll			from	'hooks/useScroll';
import	Comp				from	'components/icons/comp';

const plugins = [
	new AutoPlay({duration: 1200, direction: 'NEXT', stopOnHover: false}),
	new Fade('', 1)
];

function	YearnIsBusiness() {
	return (
		<svg width={'389'} height={'120'} viewBox={'0 0 389 120'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
			<path d={'M51.5156 68.0625C51.5156 76.375 49.7969 82.7656 46.3594 87.2344C42.9219 91.7031 38.0781 93.9375 31.8281 93.9375C26.6719 93.9375 22.5156 91.8906 19.3594 87.7969L18.7031 93H4.54688V21H20.3438V46.3594C23.2812 43.0156 27.0781 41.3438 31.7344 41.3438C38.0469 41.3438 42.9219 43.6094 46.3594 48.1406C49.7969 52.6719 51.5156 59.0469 51.5156 67.2656V68.0625ZM35.6719 67.0781C35.6719 62.2031 35.0156 58.7344 33.7031 56.6719C32.4219 54.5781 30.4375 53.5312 27.75 53.5312C24.1875 53.5312 21.7188 54.8906 20.3438 57.6094V77.7656C21.6875 80.4531 24.1875 81.7969 27.8438 81.7969C31.5625 81.7969 33.9219 79.9844 34.9219 76.3594C35.4219 74.5781 35.6719 71.4844 35.6719 67.0781ZM88.7344 87.5156C85.3906 91.7969 80.875 93.9375 75.1875 93.9375C69.625 93.9375 65.4062 92.3281 62.5312 89.1094C59.6875 85.8594 58.2656 81.2031 58.2656 75.1406V42.2812H74.0625V75.2344C74.0625 79.5781 76.1719 81.75 80.3906 81.75C84.0156 81.75 86.5938 80.4531 88.125 77.8594V42.2812H104.016V93H89.2031L88.7344 87.5156ZM139.266 78.75C139.266 77.4062 138.562 76.3281 137.156 75.5156C135.75 74.7031 133.078 73.8594 129.141 72.9844C125.203 72.1094 121.953 70.9688 119.391 69.5625C116.828 68.125 114.875 66.3906 113.531 64.3594C112.188 62.3281 111.516 60 111.516 57.375C111.516 52.7188 113.438 48.8906 117.281 45.8906C121.125 42.8594 126.156 41.3438 132.375 41.3438C139.062 41.3438 144.438 42.8594 148.5 45.8906C152.562 48.9219 154.594 52.9062 154.594 57.8438H138.75C138.75 53.7812 136.609 51.75 132.328 51.75C130.672 51.75 129.281 52.2188 128.156 53.1562C127.031 54.0625 126.469 55.2031 126.469 56.5781C126.469 57.9844 127.156 59.125 128.531 60C129.906 60.875 132.094 61.5938 135.094 62.1562C138.125 62.7188 140.781 63.3906 143.062 64.1719C150.688 66.7969 154.5 71.5 154.5 78.2812C154.5 82.9062 152.438 86.6719 148.312 89.5781C144.219 92.4844 138.906 93.9375 132.375 93.9375C128.031 93.9375 124.156 93.1562 120.75 91.5938C117.344 90.0312 114.688 87.9062 112.781 85.2188C110.875 82.5312 109.922 79.7031 109.922 76.7344H124.688C124.75 79.0781 125.531 80.7969 127.031 81.8906C128.531 82.9531 130.453 83.4844 132.797 83.4844C134.953 83.4844 136.562 83.0469 137.625 82.1719C138.719 81.2969 139.266 80.1562 139.266 78.75ZM178.594 93H162.75V42.2812H178.594V93ZM161.812 29.2031C161.812 26.9531 162.625 25.1094 164.25 23.6719C165.875 22.2344 167.984 21.5156 170.578 21.5156C173.172 21.5156 175.281 22.2344 176.906 23.6719C178.531 25.1094 179.344 26.9531 179.344 29.2031C179.344 31.4531 178.531 33.2969 176.906 34.7344C175.281 36.1719 173.172 36.8906 170.578 36.8906C167.984 36.8906 165.875 36.1719 164.25 34.7344C162.625 33.2969 161.812 31.4531 161.812 29.2031ZM202.875 42.2812L203.391 48.2344C206.891 43.6406 211.719 41.3438 217.875 41.3438C223.156 41.3438 227.094 42.9219 229.688 46.0781C232.312 49.2344 233.672 53.9844 233.766 60.3281V93H217.922V60.9844C217.922 58.4219 217.406 56.5469 216.375 55.3594C215.344 54.1406 213.469 53.5312 210.75 53.5312C207.656 53.5312 205.359 54.75 203.859 57.1875V93H188.062V42.2812H202.875ZM267.094 93.9375C259.312 93.9375 253.016 91.625 248.203 87C243.391 82.3438 240.984 76.2969 240.984 68.8594V67.5469C240.984 62.3594 241.938 57.7812 243.844 53.8125C245.781 49.8438 248.594 46.7812 252.281 44.625C255.969 42.4375 260.344 41.3438 265.406 41.3438C272.531 41.3438 278.156 43.5625 282.281 48C286.406 52.4062 288.469 58.5625 288.469 66.4688V72.6094H257.062C257.625 75.4531 258.859 77.6875 260.766 79.3125C262.672 80.9375 265.141 81.75 268.172 81.75C273.172 81.75 277.078 80 279.891 76.5L287.109 85.0312C285.141 87.75 282.344 89.9219 278.719 91.5469C275.125 93.1406 271.25 93.9375 267.094 93.9375ZM265.312 53.5312C260.688 53.5312 257.938 56.5938 257.062 62.7188H273V61.5C273.062 58.9688 272.422 57.0156 271.078 55.6406C269.734 54.2344 267.812 53.5312 265.312 53.5312ZM321.422 78.75C321.422 77.4062 320.719 76.3281 319.312 75.5156C317.906 74.7031 315.234 73.8594 311.297 72.9844C307.359 72.1094 304.109 70.9688 301.547 69.5625C298.984 68.125 297.031 66.3906 295.688 64.3594C294.344 62.3281 293.672 60 293.672 57.375C293.672 52.7188 295.594 48.8906 299.438 45.8906C303.281 42.8594 308.312 41.3438 314.531 41.3438C321.219 41.3438 326.594 42.8594 330.656 45.8906C334.719 48.9219 336.75 52.9062 336.75 57.8438H320.906C320.906 53.7812 318.766 51.75 314.484 51.75C312.828 51.75 311.438 52.2188 310.312 53.1562C309.188 54.0625 308.625 55.2031 308.625 56.5781C308.625 57.9844 309.312 59.125 310.688 60C312.062 60.875 314.25 61.5938 317.25 62.1562C320.281 62.7188 322.938 63.3906 325.219 64.1719C332.844 66.7969 336.656 71.5 336.656 78.2812C336.656 82.9062 334.594 86.6719 330.469 89.5781C326.375 92.4844 321.062 93.9375 314.531 93.9375C310.188 93.9375 306.312 93.1562 302.906 91.5938C299.5 90.0312 296.844 87.9062 294.938 85.2188C293.031 82.5312 292.078 79.7031 292.078 76.7344H306.844C306.906 79.0781 307.688 80.7969 309.188 81.8906C310.688 82.9531 312.609 83.4844 314.953 83.4844C317.109 83.4844 318.719 83.0469 319.781 82.1719C320.875 81.2969 321.422 80.1562 321.422 78.75ZM370.641 78.75C370.641 77.4062 369.938 76.3281 368.531 75.5156C367.125 74.7031 364.453 73.8594 360.516 72.9844C356.578 72.1094 353.328 70.9688 350.766 69.5625C348.203 68.125 346.25 66.3906 344.906 64.3594C343.562 62.3281 342.891 60 342.891 57.375C342.891 52.7188 344.812 48.8906 348.656 45.8906C352.5 42.8594 357.531 41.3438 363.75 41.3438C370.438 41.3438 375.812 42.8594 379.875 45.8906C383.938 48.9219 385.969 52.9062 385.969 57.8438H370.125C370.125 53.7812 367.984 51.75 363.703 51.75C362.047 51.75 360.656 52.2188 359.531 53.1562C358.406 54.0625 357.844 55.2031 357.844 56.5781C357.844 57.9844 358.531 59.125 359.906 60C361.281 60.875 363.469 61.5938 366.469 62.1562C369.5 62.7188 372.156 63.3906 374.438 64.1719C382.062 66.7969 385.875 71.5 385.875 78.2812C385.875 82.9062 383.812 86.6719 379.688 89.5781C375.594 92.4844 370.281 93.9375 363.75 93.9375C359.406 93.9375 355.531 93.1562 352.125 91.5938C348.719 90.0312 346.062 87.9062 344.156 85.2188C342.25 82.5312 341.297 79.7031 341.297 76.7344H356.062C356.125 79.0781 356.906 80.7969 358.406 81.8906C359.906 82.9531 361.828 83.4844 364.172 83.4844C366.328 83.4844 367.938 83.0469 369 82.1719C370.094 81.2969 370.641 80.1562 370.641 78.75Z'} fill={'#0657F9'}/>
		</svg>

	);
}
function	YearnIsYou() {
	return (
		<svg width={'159'} height={'120'} viewBox={'0 0 159 120'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
			<path d={'M25.7031 70.875L34.1406 42.2812H51.0625L30.3906 101.484L29.5 103.641C26.5625 110.203 21.375 113.484 13.9375 113.484C11.875 113.484 9.70312 113.172 7.42188 112.547V101.25H9.48438C11.7031 101.25 13.3906 100.922 14.5469 100.266C15.7344 99.6406 16.6094 98.5 17.1719 96.8438L18.4375 93.4688L0.8125 42.2812H17.6875L25.7031 70.875ZM52.4688 67.1719C52.4688 62.1094 53.4531 57.6094 55.4219 53.6719C57.3906 49.7031 60.2188 46.6562 63.9062 44.5312C67.5938 42.4062 71.9219 41.3438 76.8906 41.3438C84.4844 41.3438 90.4688 43.7031 94.8438 48.4219C99.2188 53.1094 101.406 59.5 101.406 67.5938V68.1562C101.406 76.0625 99.2031 82.3438 94.7969 87C90.4219 91.625 84.4844 93.9375 76.9844 93.9375C69.7656 93.9375 63.9688 91.7812 59.5938 87.4688C55.2188 83.125 52.8594 77.25 52.5156 69.8438L52.4688 67.1719ZM68.2656 68.1562C68.2656 72.8438 69 76.2812 70.4688 78.4688C71.9375 80.6562 74.1094 81.75 76.9844 81.75C82.6094 81.75 85.4844 77.4219 85.6094 68.7656V67.1719C85.6094 58.0781 82.7031 53.5312 76.8906 53.5312C71.6094 53.5312 68.75 57.4531 68.3125 65.2969L68.2656 68.1562ZM138.578 87.5156C135.234 91.7969 130.719 93.9375 125.031 93.9375C119.469 93.9375 115.25 92.3281 112.375 89.1094C109.531 85.8594 108.109 81.2031 108.109 75.1406V42.2812H123.906V75.2344C123.906 79.5781 126.016 81.75 130.234 81.75C133.859 81.75 136.438 80.4531 137.969 77.8594V42.2812H153.859V93H139.047L138.578 87.5156Z'} fill={'#0657F9'}/>
		</svg>

	);
}
function	YearnIsPeople() {
	return (
		<svg width={'294'} height={'120'} viewBox={'0 0 294 120'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
			<path d={'M51.5156 68.0156C51.5156 75.8906 49.7344 82.1875 46.1719 86.9062C42.6406 91.5938 37.8594 93.9375 31.8281 93.9375C27.1719 93.9375 23.3438 92.2344 20.3438 88.8281V112.5H4.54688V42.2812H19.3125L19.7812 46.9688C22.8125 43.2188 26.7969 41.3438 31.7344 41.3438C37.9844 41.3438 42.8438 43.6562 46.3125 48.2812C49.7812 52.875 51.5156 59.2031 51.5156 67.2656V68.0156ZM35.7188 67.0312C35.7188 58.0312 33.0938 53.5312 27.8438 53.5312C24.0938 53.5312 21.5938 54.875 20.3438 57.5625V77.5312C21.7188 80.3438 24.25 81.75 27.9375 81.75C32.9688 81.75 35.5625 77.4062 35.7188 68.7188V67.0312ZM83.0625 93.9375C75.2812 93.9375 68.9844 91.625 64.1719 87C59.3594 82.3438 56.9531 76.2969 56.9531 68.8594V67.5469C56.9531 62.3594 57.9062 57.7812 59.8125 53.8125C61.75 49.8438 64.5625 46.7812 68.25 44.625C71.9375 42.4375 76.3125 41.3438 81.375 41.3438C88.5 41.3438 94.125 43.5625 98.25 48C102.375 52.4062 104.438 58.5625 104.438 66.4688V72.6094H73.0312C73.5938 75.4531 74.8281 77.6875 76.7344 79.3125C78.6406 80.9375 81.1094 81.75 84.1406 81.75C89.1406 81.75 93.0469 80 95.8594 76.5L103.078 85.0312C101.109 87.75 98.3125 89.9219 94.6875 91.5469C91.0938 93.1406 87.2188 93.9375 83.0625 93.9375ZM81.2812 53.5312C76.6562 53.5312 73.9062 56.5938 73.0312 62.7188H88.9688V61.5C89.0312 58.9688 88.3906 57.0156 87.0469 55.6406C85.7031 54.2344 83.7812 53.5312 81.2812 53.5312ZM108.844 67.1719C108.844 62.1094 109.828 57.6094 111.797 53.6719C113.766 49.7031 116.594 46.6562 120.281 44.5312C123.969 42.4062 128.297 41.3438 133.266 41.3438C140.859 41.3438 146.844 43.7031 151.219 48.4219C155.594 53.1094 157.781 59.5 157.781 67.5938V68.1562C157.781 76.0625 155.578 82.3438 151.172 87C146.797 91.625 140.859 93.9375 133.359 93.9375C126.141 93.9375 120.344 91.7812 115.969 87.4688C111.594 83.125 109.234 77.25 108.891 69.8438L108.844 67.1719ZM124.641 68.1562C124.641 72.8438 125.375 76.2812 126.844 78.4688C128.312 80.6562 130.484 81.75 133.359 81.75C138.984 81.75 141.859 77.4219 141.984 68.7656V67.1719C141.984 58.0781 139.078 53.5312 133.266 53.5312C127.984 53.5312 125.125 57.4531 124.688 65.2969L124.641 68.1562ZM211.828 68.0156C211.828 75.8906 210.047 82.1875 206.484 86.9062C202.953 91.5938 198.172 93.9375 192.141 93.9375C187.484 93.9375 183.656 92.2344 180.656 88.8281V112.5H164.859V42.2812H179.625L180.094 46.9688C183.125 43.2188 187.109 41.3438 192.047 41.3438C198.297 41.3438 203.156 43.6562 206.625 48.2812C210.094 52.875 211.828 59.2031 211.828 67.2656V68.0156ZM196.031 67.0312C196.031 58.0312 193.406 53.5312 188.156 53.5312C184.406 53.5312 181.906 54.875 180.656 57.5625V77.5312C182.031 80.3438 184.562 81.75 188.25 81.75C193.281 81.75 195.875 77.4062 196.031 68.7188V67.0312ZM235.5 93H219.656V21H235.5V93ZM269.812 93.9375C262.031 93.9375 255.734 91.625 250.922 87C246.109 82.3438 243.703 76.2969 243.703 68.8594V67.5469C243.703 62.3594 244.656 57.7812 246.562 53.8125C248.5 49.8438 251.312 46.7812 255 44.625C258.688 42.4375 263.062 41.3438 268.125 41.3438C275.25 41.3438 280.875 43.5625 285 48C289.125 52.4062 291.188 58.5625 291.188 66.4688V72.6094H259.781C260.344 75.4531 261.578 77.6875 263.484 79.3125C265.391 80.9375 267.859 81.75 270.891 81.75C275.891 81.75 279.797 80 282.609 76.5L289.828 85.0312C287.859 87.75 285.062 89.9219 281.438 91.5469C277.844 93.1406 273.969 93.9375 269.812 93.9375ZM268.031 53.5312C263.406 53.5312 260.656 56.5938 259.781 62.7188H275.719V61.5C275.781 58.9688 275.141 57.0156 273.797 55.6406C272.453 54.2344 270.531 53.5312 268.031 53.5312Z'} fill={'#0657F9'}/>
		</svg>

	);
}
function	YearnIsContributors() {
	return (
		<svg width={'534'} height={'120'} viewBox={'0 0 534 120'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
			<path d={'M25.875 81.75C28.0938 81.75 29.8125 81.1562 31.0312 79.9688C32.25 78.75 32.8438 77.0625 32.8125 74.9062H47.625C47.625 80.4688 45.625 85.0312 41.625 88.5938C37.6562 92.1562 32.5312 93.9375 26.25 93.9375C18.875 93.9375 13.0625 91.625 8.8125 87C4.5625 82.375 2.4375 75.9688 2.4375 67.7812V67.125C2.4375 62 3.375 57.4844 5.25 53.5781C7.15625 49.6406 9.89062 46.625 13.4531 44.5312C17.0156 42.4062 21.2344 41.3438 26.1094 41.3438C32.7031 41.3438 37.9375 43.1719 41.8125 46.8281C45.6875 50.4844 47.625 55.4375 47.625 61.6875H32.8125C32.8125 59.0625 32.1719 57.0469 30.8906 55.6406C29.6094 54.2344 27.8906 53.5312 25.7344 53.5312C21.6406 53.5312 19.25 56.1406 18.5625 61.3594C18.3438 63.0156 18.2344 65.2969 18.2344 68.2031C18.2344 73.2969 18.8438 76.8281 20.0625 78.7969C21.2812 80.7656 23.2188 81.75 25.875 81.75ZM52.3125 67.1719C52.3125 62.1094 53.2969 57.6094 55.2656 53.6719C57.2344 49.7031 60.0625 46.6562 63.75 44.5312C67.4375 42.4062 71.7656 41.3438 76.7344 41.3438C84.3281 41.3438 90.3125 43.7031 94.6875 48.4219C99.0625 53.1094 101.25 59.5 101.25 67.5938V68.1562C101.25 76.0625 99.0469 82.3438 94.6406 87C90.2656 91.625 84.3281 93.9375 76.8281 93.9375C69.6094 93.9375 63.8125 91.7812 59.4375 87.4688C55.0625 83.125 52.7031 77.25 52.3594 69.8438L52.3125 67.1719ZM68.1094 68.1562C68.1094 72.8438 68.8438 76.2812 70.3125 78.4688C71.7812 80.6562 73.9531 81.75 76.8281 81.75C82.4531 81.75 85.3281 77.4219 85.4531 68.7656V67.1719C85.4531 58.0781 82.5469 53.5312 76.7344 53.5312C71.4531 53.5312 68.5938 57.4531 68.1562 65.2969L68.1094 68.1562ZM122.719 42.2812L123.234 48.2344C126.734 43.6406 131.562 41.3438 137.719 41.3438C143 41.3438 146.938 42.9219 149.531 46.0781C152.156 49.2344 153.516 53.9844 153.609 60.3281V93H137.766V60.9844C137.766 58.4219 137.25 56.5469 136.219 55.3594C135.188 54.1406 133.312 53.5312 130.594 53.5312C127.5 53.5312 125.203 54.75 123.703 57.1875V93H107.906V42.2812H122.719ZM180.797 29.6719V42.2812H189.141V53.25H180.797V76.4531C180.797 78.3594 181.141 79.6875 181.828 80.4375C182.516 81.1875 183.875 81.5625 185.906 81.5625C187.469 81.5625 188.781 81.4688 189.844 81.2812V92.5781C187 93.4844 184.031 93.9375 180.938 93.9375C175.5 93.9375 171.484 92.6562 168.891 90.0938C166.297 87.5312 165 83.6406 165 78.4219V53.25H158.531V42.2812H165V29.6719H180.797ZM226.078 56.5781L220.875 56.2031C215.906 56.2031 212.719 57.7656 211.312 60.8906V93H195.516V42.2812H210.328L210.844 48.7969C213.5 43.8281 217.203 41.3438 221.953 41.3438C223.641 41.3438 225.109 41.5312 226.359 41.9062L226.078 56.5781ZM248.438 93H232.594V42.2812H248.438V93ZM231.656 29.2031C231.656 26.9531 232.469 25.1094 234.094 23.6719C235.719 22.2344 237.828 21.5156 240.422 21.5156C243.016 21.5156 245.125 22.2344 246.75 23.6719C248.375 25.1094 249.188 26.9531 249.188 29.2031C249.188 31.4531 248.375 33.2969 246.75 34.7344C245.125 36.1719 243.016 36.8906 240.422 36.8906C237.828 36.8906 235.719 36.1719 234.094 34.7344C232.469 33.2969 231.656 31.4531 231.656 29.2031ZM305.297 68.0625C305.297 76.375 303.578 82.7656 300.141 87.2344C296.703 91.7031 291.859 93.9375 285.609 93.9375C280.453 93.9375 276.297 91.8906 273.141 87.7969L272.484 93H258.328V21H274.125V46.3594C277.062 43.0156 280.859 41.3438 285.516 41.3438C291.828 41.3438 296.703 43.6094 300.141 48.1406C303.578 52.6719 305.297 59.0469 305.297 67.2656V68.0625ZM289.453 67.0781C289.453 62.2031 288.797 58.7344 287.484 56.6719C286.203 54.5781 284.219 53.5312 281.531 53.5312C277.969 53.5312 275.5 54.8906 274.125 57.6094V77.7656C275.469 80.4531 277.969 81.7969 281.625 81.7969C285.344 81.7969 287.703 79.9844 288.703 76.3594C289.203 74.5781 289.453 71.4844 289.453 67.0781ZM342.516 87.5156C339.172 91.7969 334.656 93.9375 328.969 93.9375C323.406 93.9375 319.188 92.3281 316.312 89.1094C313.469 85.8594 312.047 81.2031 312.047 75.1406V42.2812H327.844V75.2344C327.844 79.5781 329.953 81.75 334.172 81.75C337.797 81.75 340.375 80.4531 341.906 77.8594V42.2812H357.797V93H342.984L342.516 87.5156ZM384.891 29.6719V42.2812H393.234V53.25H384.891V76.4531C384.891 78.3594 385.234 79.6875 385.922 80.4375C386.609 81.1875 387.969 81.5625 390 81.5625C391.562 81.5625 392.875 81.4688 393.938 81.2812V92.5781C391.094 93.4844 388.125 93.9375 385.031 93.9375C379.594 93.9375 375.578 92.6562 372.984 90.0938C370.391 87.5312 369.094 83.6406 369.094 78.4219V53.25H362.625V42.2812H369.094V29.6719H384.891ZM396.094 67.1719C396.094 62.1094 397.078 57.6094 399.047 53.6719C401.016 49.7031 403.844 46.6562 407.531 44.5312C411.219 42.4062 415.547 41.3438 420.516 41.3438C428.109 41.3438 434.094 43.7031 438.469 48.4219C442.844 53.1094 445.031 59.5 445.031 67.5938V68.1562C445.031 76.0625 442.828 82.3438 438.422 87C434.047 91.625 428.109 93.9375 420.609 93.9375C413.391 93.9375 407.594 91.7812 403.219 87.4688C398.844 83.125 396.484 77.25 396.141 69.8438L396.094 67.1719ZM411.891 68.1562C411.891 72.8438 412.625 76.2812 414.094 78.4688C415.562 80.6562 417.734 81.75 420.609 81.75C426.234 81.75 429.109 77.4219 429.234 68.7656V67.1719C429.234 58.0781 426.328 53.5312 420.516 53.5312C415.234 53.5312 412.375 57.4531 411.938 65.2969L411.891 68.1562ZM482.672 56.5781L477.469 56.2031C472.5 56.2031 469.312 57.7656 467.906 60.8906V93H452.109V42.2812H466.922L467.438 48.7969C470.094 43.8281 473.797 41.3438 478.547 41.3438C480.234 41.3438 481.703 41.5312 482.953 41.9062L482.672 56.5781ZM514.922 78.75C514.922 77.4062 514.219 76.3281 512.812 75.5156C511.406 74.7031 508.734 73.8594 504.797 72.9844C500.859 72.1094 497.609 70.9688 495.047 69.5625C492.484 68.125 490.531 66.3906 489.188 64.3594C487.844 62.3281 487.172 60 487.172 57.375C487.172 52.7188 489.094 48.8906 492.938 45.8906C496.781 42.8594 501.812 41.3438 508.031 41.3438C514.719 41.3438 520.094 42.8594 524.156 45.8906C528.219 48.9219 530.25 52.9062 530.25 57.8438H514.406C514.406 53.7812 512.266 51.75 507.984 51.75C506.328 51.75 504.938 52.2188 503.812 53.1562C502.688 54.0625 502.125 55.2031 502.125 56.5781C502.125 57.9844 502.812 59.125 504.188 60C505.562 60.875 507.75 61.5938 510.75 62.1562C513.781 62.7188 516.438 63.3906 518.719 64.1719C526.344 66.7969 530.156 71.5 530.156 78.2812C530.156 82.9062 528.094 86.6719 523.969 89.5781C519.875 92.4844 514.562 93.9375 508.031 93.9375C503.688 93.9375 499.812 93.1562 496.406 91.5938C493 90.0312 490.344 87.9062 488.438 85.2188C486.531 82.5312 485.578 79.7031 485.578 76.7344H500.344C500.406 79.0781 501.188 80.7969 502.688 81.8906C504.188 82.9531 506.109 83.4844 508.453 83.4844C510.609 83.4844 512.219 83.0469 513.281 82.1719C514.375 81.2969 514.922 80.1562 514.922 78.75Z'} fill={'#0657F9'}/>
		</svg>
	);
}

function	Header({currentPage, onClick}) {
	return (
		<header className={'fixed top-0 inset-x-0 h-40 w-full with-top-gradient z-20'}>
			<div className={'max-w-6xl w-full mx-auto py-6 md:py-10 items-center justify-between flex flex-row'}>
				<div className={'flex flex-row items-center justify-center cursor-pointer'} onClick={() => onClick(0)}>
					<svg width={'40'} height={'40'} viewBox={'0 0 40 40'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
						<path d={'M0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20Z'} fill={'#0657F9'}/>
						<path d={'M19.1719 28.4321V11.7921H20.9837V28.4321H19.1719Z'} fill={'white'}/>
						<path d={'M28.3977 17.3362L22.8022 18.8202L21.5544 13.0122L23.2182 12.6362L23.8741 15.3882C23.8741 15.3882 25.386 12.9082 23.3702 10.3402C22.1823 9.02016 21.6184 8.96416 20.2865 8.75616C19.1146 8.58816 16.3909 8.98416 15.579 12.1642C15.235 14.2122 15.623 15.7282 18.2627 17.7122L18.1147 19.9202C18.1147 19.9202 15.167 17.8442 14.4071 16.3882C13.8191 15.2362 12.8112 12.9602 14.6311 9.79216C15.611 8.20816 17.5428 6.68816 20.9464 6.84816C22.6583 6.92016 26.8378 9.01216 26.1899 13.9002C26.0779 14.8162 25.602 16.0362 25.602 16.0362L27.8977 15.5242L28.3977 17.3362Z'} fill={'white'}/>
						<path d={'M25.2033 30.3562C24.1794 31.9122 22.2076 33.3802 18.8119 33.1322C17.1001 33.0162 12.9805 30.8122 13.7564 25.9442C13.8924 25.0322 14.4003 23.8282 14.4003 23.8282L12.0926 24.2762L11.6406 22.4562L17.2761 21.1202L18.3719 26.9602L16.6961 27.2922L16.1122 24.5202C16.1122 24.5202 14.5363 26.9562 16.4801 29.5802C17.632 30.9322 18.192 31.0002 19.5238 31.2442C20.6877 31.4442 23.4234 31.1162 24.3194 27.9602C24.7153 25.9242 24.3673 24.3962 21.7836 22.3402L21.9916 20.1362C21.9916 20.1362 24.8833 22.2882 25.6032 23.7642C26.1552 24.9362 27.1031 27.2402 25.2033 30.3562Z'} fill={'white'}/>
					</svg>
				</div>
				<div className={'flex flex-row space-x-10'}>
					<p
						onClick={() => onClick(currentPage <= 1 ? 1 : 0)}
						className={`${currentPage <= 2 ? 'text-yblue-regular border-b border-yblue' : 'text-ygray-50 hover:text-ygray-100 transition-colors'} cursor-pointer transition-colors`}>
						{'About'}
					</p>
					<p
						onClick={() => onClick(2)}
						className={`${currentPage === 3 ? 'text-yblue-regular border-b border-yblue' : 'text-ygray-50 hover:text-ygray-100 transition-colors'} cursor-pointer transition-colors`}>
						{'People'}
					</p>
					<p
						onClick={() => onClick(3)}
						className={`${currentPage === 4 ? 'text-yblue-regular border-b border-yblue' : 'text-ygray-50 hover:text-ygray-100 transition-colors'} cursor-pointer transition-colors`}>
						{'Business'}
					</p>
					<p
						onClick={() => onClick(4)}
						className={`${currentPage === 5 ? 'text-yblue-regular border-b border-yblue' : 'text-ygray-50 hover:text-ygray-100 transition-colors'} cursor-pointer transition-colors`}>
						{'Contributors'}
					</p>
					<p
						onClick={() => onClick(5)}
						className={`${currentPage === 6 ? 'text-yblue-regular border-b border-yblue' : 'text-ygray-50 hover:text-ygray-100 transition-colors'} cursor-pointer transition-colors`}>
						{'Docs'}
					</p>
				</div>
				<div className={'flex flex-row items-center justify-end'}>
					<a href={'https://yearn.finance'} target={'_blank'} className={'text-yblue-regular font-bold cursor-pointer'} rel={'noreferrer'}>{'Go to app'}</a>
				</div>
			</div>
		</header>
	);
}

function	Footer({onClick, className}) {
	return (
		<div className={'max-w-6xl mx-auto mt-auto mb-6 md:mb-10'}>
			<svg onClick={onClick} width={'40'} height={'40'} className={`animate animate-bounce cursor-pointer ${className}`} viewBox={'0 0 40 40'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
				<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M29.5731 20.3093C30.0927 20.7639 30.1453 21.5536 29.6907 22.0731L20.9407 32.0731C20.7034 32.3444 20.3605 32.5 20 32.5C19.6395 32.5 19.2966 32.3444 19.0593 32.0731L10.3093 22.0731C9.85469 21.5536 9.90734 20.7639 10.4269 20.3093C10.9464 19.8547 11.7361 19.9073 12.1907 20.4269L20 29.3518L27.8093 20.4269C28.2639 19.9073 29.0536 19.8547 29.5731 20.3093Z'} fill={'#0657F9'}/>
				<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M29.5731 11.9759C30.0927 12.4305 30.1453 13.2202 29.6907 13.7398L20.9407 23.7398C20.7034 24.011 20.3605 24.1666 20 24.1666C19.6395 24.1666 19.2966 24.011 19.0593 23.7398L10.3093 13.7398C9.85469 13.2202 9.90734 12.4305 10.4269 11.9759C10.9464 11.5213 11.7361 11.574 12.1907 12.0935L20 21.0184L27.8093 12.0935C28.2639 11.574 29.0536 11.5213 29.5731 11.9759Z'} fill={'#0657F9'}/>
			</svg>
		</div>
	);
}


function	Index({moveSectionDown}) {
	const	[display, set_display] = React.useState(false);

	React.useEffect(() => {
		if (typeof(window) !== 'undefined')
			set_display(true);
	}, [typeof(window) !== 'undefined']);

	return (
		<div className={'h-full max-w-6xl mx-auto flex flex-col w-full'}>
			<section className={'h-screen w-full flex flex-col justify-center items-center text-center'}>
				<h1 className={'font-bold text-ygray-100 text-8xl'}>{'Yearn is'}</h1>

				<div className={`max-w-full relative -mt-5 transition-opacity duration-700 ${display ? 'opacity-100' : 'opacity-0'}`}>
					<div className={'absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-fadeWhite to-transparent z-10'} />
					<div className={'absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-fadeWhite to-transparent z-10'} />
					<Flicking
						className={'max-w-4xl'}
						plugins={plugins}
						align={'center'}
						horizontal
						circular>
						<div className={'h-32'}>
							<h1 className={'font-bold text-yblue-regular text-8xl text-center px-10'}>
								<YearnIsYou />
							</h1>	
						</div>
						<div className={'h-32'}>
							<h1 className={'font-bold text-yblue-regular text-8xl text-center px-10'}>
								<YearnIsPeople />
							</h1>
						</div>
						<div className={'h-32'}>
							<h1  className={'font-bold text-yblue-regular text-8xl text-center px-10'}>
								<YearnIsBusiness />
							</h1>
						</div>
						<div className={'h-32'}>
							<h1  className={'font-bold text-yblue-regular text-8xl text-center px-10'}>
								<YearnIsContributors />
							</h1>
						</div>
					</Flicking>
				</div>

				<div className={'text-ygray-70 text-center text-2xl my-10'}>
					<p>{'Yearn is a protocol made by people for people.'}</p>
					<p>{'We make Decentralized Finance simple. We let your money work for you.'}</p>
				</div>
				<div className={'flex flex-row items-center space-x-4'}>
					<button onClick={moveSectionDown} className={'bg-yblue-regular border border-yblue-regular hover:bg-yblue-hover transition-colors text-white font-bold py-2 px-4 rounded-lg w-53 text-sm'}>{'Go to app'}</button>
					<button onClick={moveSectionDown} className={'bg-none border border-yblue-regular text-yblue-regular hover:bg-yblue-light transition-colors font-bold py-2 px-4 rounded-lg w-53 text-sm'}>{'How it works?'}</button>
				</div>
			</section>
			<Footer className={'text-yblue'} onClick={() => moveSectionDown()} />
		</div>
	);
}


function	Numbers({moveSectionDown}) {
	return (
		<>
			<div className={'h-full max-w-6xl mx-auto flex flex-col w-full'}>
				<div className={'max-w-6xl w-full h-full mx-auto flex flex-col justify-center items-center'}>
					<div className={'mb-10'}>
						<h2 className={'text-6xl text-yblue-regular text-center font-black'}>{'3.79861364 ETH'}</h2>
						<p className={'text-base text-ygray-50 text-center'}>{'our users earned since you opened this page'}</p>
					</div>
					<div className={'flex flex-col md:flex-row justify-center w-full space-x-0 md:space-x-20 space-y-8 md:space-y-0'}>
						<div>
							<h3 className={'text-yblue-regular text-3xl font-black'}>{'$ 4 810 338 346'}</h3>
							<p className={'text-base text-ygray-50 text-center'}>{'total value locked'}</p>
						</div>
						<div>
							<h3 className={'text-yblue-regular text-3xl font-black'}>{'56879'}</h3>
							<p className={'text-base text-ygray-50 text-center'}>{'users'}</p>
						</div>
						<div>
							<h3 className={'text-yblue-regular text-3xl font-black'}>{'25823 ETH'}</h3>
							<p className={'text-base text-ygray-50 text-center'}>{'saved on gas fees'}</p>
						</div>
						<div>
							<h3 className={'text-yblue-regular text-3xl font-black'}>{'53%'}</h3>
							<p className={'text-base text-ygray-50 text-center'}>{'max APY'}</p>
						</div>
					</div>
				</div>
				<Footer className={'text-yblue'} onClick={() => moveSectionDown()} />
			</div>
		</>
	);
}

function	How({moveSectionDown}) {
	return (
		<div className={'h-full max-w-6xl mx-auto flex flex-col w-full'}>
			<div className={'max-w-6xl w-full h-full mx-auto flex flex-row justify-center items-center'}>
				<div className={'mr-28'}>
					<div>
						<h2 className={'text-6xl text-ygray-100 font-black'}>{'How'}</h2>
						<h2 className={'text-6xl text-ygray-100 font-black'}>
							{'Yearn '}
							<span className={'text-yblue'}>{'Vaults'}</span>
							{' Work'}
						</h2>
					</div>
					<div className={'my-8'}>
						<p className={'text-base text-ygray-50'}>{'Vaults are a passive-investing strategy, enabling people to put their capital to work via automation. Yearn strategists and systems identify the optimal opportunities for yield in the market.'}</p>
						<p className={'mt-8 text-base text-ygray-50'}>{'Users benefit from socializing gas costs and automation which shifts capital, auto-compounds, and rebalances to maximize yield. End users need not be experts in DeFi or the underlying protocols to utilize Yearn Vaults.'}</p>
					</div>
					<div className={'flex flex-row space-x-4'}>
						<button className={'text-base px-14 py-2 button-gradient rounded-lg text-white font-bold border border-yblue'}>{'Get me to vaults'}</button>
						<button className={'text-base px-14 py-2 rounded-lg text-yblue-regular font-bold border border-yblue'}>{'Learn more'}</button>
					</div>
				</div>
				<div className={'w-full mr-10 mt-10'}>
					<Comp />
				</div>
			</div>
			<Footer className={'text-yblue'} onClick={() => moveSectionDown()} />
		</div>
	);
}

function	Business({moveSectionDown}) {
	return (
		<div className={'h-full max-w-6xl mx-auto flex flex-col w-full'}>
			<div className={'max-w-6xl w-full h-full mx-auto flex flex-row justify-center items-center'}>
				<div className={'mr-28'}>
					<div>
						<h2 className={'text-6xl text-ygray-100 font-black'}>{'Some info'}</h2>
						<h2 className={'text-6xl text-ygray-100 font-black'}>{'for business'}</h2>
					</div>
					<div className={'my-8'}>
						<p className={'text-base text-ygray-50'}>{'Vaults are a passive-investing strategy, enabling people to put their capital to work via automation. Yearn strategists and systems identify the optimal opportunities for yield in the market.'}</p>
						<p className={'mt-8 text-base text-ygray-50'}>{'Users benefit from socializing gas costs and automation which shifts capital, auto-compounds, and rebalances to maximize yield. End users need not be experts in DeFi or the underlying protocols to utilize Yearn Vaults.'}</p>
					</div>
					<div className={'flex flex-row space-x-4'}>
						<button className={'text-base px-14 py-2 button-gradient rounded-lg text-white font-bold border border-yblue'}>{'Sign me in'}</button>
						<button className={'text-base px-14 py-2 rounded-lg text-yblue-regular font-bold border border-yblue'}>{'Learn more'}</button>
					</div>
				</div>
				<div className={'w-full mr-10 mt-10'}>
				</div>
			</div>
			<Footer className={'text-yblue'} onClick={() => moveSectionDown()} />
		</div>
	);
}

function	Contributors() {
	return (
		<div className={'h-full max-w-6xl mx-auto flex flex-col w-full'}>
			<div className={'max-w-6xl w-full h-full mx-auto flex flex-row justify-center items-center'}>
				<div className={'mr-28'}>
					<div>
						<h2 className={'text-6xl text-ygray-100 font-black'}>{'Some info'}</h2>
						<h2 className={'text-6xl text-ygray-100 font-black'}>{'for contributors'}</h2>
					</div>
					<div className={'my-8'}>
						<p className={'text-base text-ygray-50'}>{'Vaults are a passive-investing strategy, enabling people to put their capital to work via automation. Yearn strategists and systems identify the optimal opportunities for yield in the market.'}</p>
						<p className={'mt-8 text-base text-ygray-50'}>{'Users benefit from socializing gas costs and automation which shifts capital, auto-compounds, and rebalances to maximize yield. End users need not be experts in DeFi or the underlying protocols to utilize Yearn Vaults.'}</p>
					</div>
					<div className={'flex flex-row space-x-4'}>
						<button className={'text-base px-14 py-2 button-gradient rounded-lg text-white font-bold border border-yblue'}>{'Sign me up'}</button>
						<button className={'text-base px-14 py-2 rounded-lg text-yblue-regular font-bold border border-yblue'}>{'Learn more'}</button>
					</div>
				</div>
				<div className={'w-full mr-10 mt-10'}>
				</div>
			</div>
		</div>
	);
}

function Wrapper() {
	const	[slideSize, set_slideSize] = React.useState(0);
	const	[currentPage, set_currentPage] = React.useState(0);

	const	ref = React.useRef();
	const	slideRef = React.useRef();
	const	{y} = useScroll();

	React.useEffect(() => {
		const	sectionHeight = slideRef?.current?.getBoundingClientRect()?.height || 0;
		const	positionFromTop = ref?.current?.getBoundingClientRect()?.top || 0;
		set_currentPage(positionFromTop > 0 ? 0 : Math.round((Math.abs(positionFromTop / sectionHeight) + 1)));
		set_slideSize(sectionHeight);
	}, [y, slideRef, ref]);

	function	scrollTo(page) {
		window.scroll({top: (slideSize * page), behavior: 'smooth'});
	}

	return (
		<>
			<Header currentPage={currentPage} onClick={scrollTo} />
			<div ref={ref} className={'section-wrapper'}>
				<section ref={slideRef} className={'section flex w-full h-screen'}>
					<div className={'w-full h-full'}>
						<Index moveSectionDown={() => scrollTo(1)} />
					</div>
				</section>

				<section className={'section flex w-full h-screen'}>
					<div className={'w-full h-full'}>
						<Numbers moveSectionDown={() => scrollTo(2)} />
					</div>
				</section>

				<section className={'section flex w-full h-screen'}>
					<div className={'w-full h-full'}>
						<How moveSectionDown={() => scrollTo(3)} />
					</div>
				</section>
				<section className={'section flex w-full h-screen'}>
					<div className={'w-full h-full'}>
						<Business moveSectionDown={() => scrollTo(4)} />
					</div>
				</section>
				<section className={'section flex w-full h-screen'}>
					<div className={'w-full h-full'}>
						<Contributors />
					</div>
				</section>

			</div>
		</>
	);
}

export default Wrapper;

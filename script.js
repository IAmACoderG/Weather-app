const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be514e3fbfmsh64017188bc9adfap12eba3jsn082abdc747bb',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const updateweather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			{
				cloud_pct.innerHTML = response.cloud_pct,
					temp.innerHTML = response.temp,
					temp2.innerHTML = response.temp,
					feels_like.innerHTML = response.feels_like,
					humidity.innerHTML = response.humidity,
					humidity2.innerHTML = response.humidity,
					min_temp.innerHTML = response.min_temp,
					max_temp.innerHTML = response.max_temp,
					wind_speed.innerHTML = response.wind_speed,
					wind_speed2.innerHTML = response.wind_speed,
					sunrise.innerHTML = response.sunrise,
					sunset.innerHTML = response.sunset
			}
			console.log(response)

		})
		.catch(err => console.error(err));
}

const onClick = (e) => {
	console.log('click')
	// e.preventDefault()
	updateweather(city.value)
}
const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b261a51bf3msh1c6665804e3570fp1e2f03jsn8084a2e3f2a3',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export  async function fetchCars () {
    const headers = {
        'X-RapidAPI-Key': 'b261a51bf3msh1c6665804e3570fp1e2f03jsn8084a2e3f2a3',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
}
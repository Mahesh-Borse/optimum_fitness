export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY_FOR_EXERCISEDB,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const exerciseYotubeOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY_FOR_EXERCISEDB,
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, options, limit = 50) => {

    try {
        const response = await fetch(url + `?limit=${limit}&offset=0`, options);
        const data = await response.json();
        // console.error("result size:", data.length);
        return data;

    } catch (error) {
        console.log(error);

        return [];
    }
};
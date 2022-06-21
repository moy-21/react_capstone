


const getFreeSalvage = async (vin) => {
    const result = await fetch(`https://vindecoder.p.rapidapi.com/decode_vin?vin=${vin}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9253c20a12msh1dc9c4e157bcad3p1827f0jsn807af09f9e58',
            'X-RapidAPI-Host': 'vindecoder.p.rapidapi.com'
        },
    });

    const response = await result.json();
    console.log(response)
    return response.data;
}
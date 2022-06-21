const authKey = "Basic MWQ1OWMxZTMtOGMzNS00NTU5LTk1NWYtNzRiZWY2NGQyOGQw"
const partnerToken = "d6e6e3641d8b47e6ac2ae71ebc558efc"


const getVinDecoder = async (vin, cancelToken) => {
    let car;
    let carError;
    const result = await fetch(`http://api.carmd.com/v3.0/decode?vin=${vin}`, cancelToken, {
        method: 'GET',
        headers:{
            "content-type":"application/json",
            "authorization": "Basic MWQ1OWMxZTMtOGMzNS00NTU5LTk1NWYtNzRiZWY2NGQyOGQw",
            "partner-token": "d6e6e3641d8b47e6ac2ae71ebc558efc"
        },
    });

    const response = await result.json();
    if(response.ok){
        car = response.data
    }else{
        carError = "An Unexpected Error has Occured. Please Try again Later."
    }
    console.log(response)
    return{
        car,
        carError
    }
}

const getVinDecoderPremium = async (vin, cancelToken) => {
    let car;
    let carError;
    const result = await fetch(`http://api.carmd.com/v3.0/decode_more?vin=${vin}`, cancelToken, {
        method: 'GET',
        headers:{
            "content-type":"application/json",
            "authorization": "Basic MWQ1OWMxZTMtOGMzNS00NTU5LTk1NWYtNzRiZWY2NGQyOGQw",
            "partner-token": "d6e6e3641d8b47e6ac2ae71ebc558efc"
        },
    });

    const response = await result.json();
    if(response.ok){
        car = response.data
    }else{
        carError = "An Unexpected Error has Occured. Please Try again Later."
    }
    console.log(response)
    return{
        car,
        carError
    }
}

const getDiagnostics = async (vin, mileage, dtc, cancelToken) => {
    let car;
    let carError;
    const result = await fetch(`http://api.carmd.com/v3.0/diag?vin=${vin}&mileage=${mileage}&dtc=${dtc}`, cancelToken, {
        method: 'GET',
        headers:{
            "content-type":"application/json",
            "authorization": "Basic MWQ1OWMxZTMtOGMzNS00NTU5LTk1NWYtNzRiZWY2NGQyOGQw",
            "partner-token": "d6e6e3641d8b47e6ac2ae71ebc558efc"
        },
    });

    const response = await result.json();
    if(response.ok){
        car = response.data
    }else{
        carError = "An Unexpected Error has Occured. Please Try again Later."
    }
    console.log(response)
    return{
        car,
        carError
    }
}

const getMaintance = async (vin, mileage, cancelToken) => {
    let maint;
    let maintError;
    const result = await fetch(`http://api.carmd.com/v3.0/maint?vin=${vin}&mileage=${mileage}`, cancelToken, {
        method: 'GET',
        headers:{
            "content-type":"application/json",
            "authorization": "Basic MWQ1OWMxZTMtOGMzNS00NTU5LTk1NWYtNzRiZWY2NGQyOGQw",
            "partner-token": "d6e6e3641d8b47e6ac2ae71ebc558efc"
        },
    });

    const response = await result.json();
    if(response.ok){
        maint = response.data
    }else{
        maintError = "An Unexpected Error has Occured. Please Try again Later."
    }
    console.log(response)
    return{
        maint,
        maintError
    }
}

const getRepairList = async (vin, cancelToken) => {
    let repair;
    let repairError;
    const result = await fetch(`http://api.carmd.com/v3.0/repairlist?vin=${vin}`, cancelToken, {
        method: 'GET',
        headers:{
            "content-type":"application/json",
            "authorization": "Basic MWQ1OWMxZTMtOGMzNS00NTU5LTk1NWYtNzRiZWY2NGQyOGQw",
            "partner-token": "d6e6e3641d8b47e6ac2ae71ebc558efc"
        },
    });

    const response = await result.json();
    if(response.ok){
        repair = response.data
    }else{
        repairError = "An Unexpected Error has Occured. Please Try again Later."
    }
    console.log(response)
    return{
        repair,
        repairError
    }
}

const getWarranty = async (vin, cancelToken) => {
    let warranty;
    let warrantyError;
    const result = await fetch(`http://api.carmd.com/v3.0/warranty?vin=${vin}`, cancelToken, {
        method: 'GET',
        headers:{
            "content-type":"application/json",
            "authorization": "Basic MWQ1OWMxZTMtOGMzNS00NTU5LTk1NWYtNzRiZWY2NGQyOGQw",
            "partner-token": "d6e6e3641d8b47e6ac2ae71ebc558efc"
        },
    });

    const response = await result.json();
    if(response.ok){
        warranty = response.data
    }else{
        warrantyError = "An Unexpected Error has Occured. Please Try again Later."
    }
    console.log(response)
    return{
        warranty,
        warrantyError
    }
}

const getVehicleHistory = async (vin) => {
    const result = await fetch(`http://api.carmd.com/v3.0/decode?vin=${vin}`, {
        method: 'GET',
        headers: {
            "content-type":"application/json",
            "authorization": authKey,
            "partner-token": partnerToken
        },
    });

    const response = await result.json();
    console.log(response)
    return response.data[0].pdf;
}

const getVehicleImage = async (vin, cancelToken) => {
    let img;
    let imgError;
    const result = await fetch(`http://api.carmd.com/v3.0/image?vin=${vin}`, cancelToken, {
        method: 'GET',
        headers:{
            "content-type":"application/json",
            "authorization": "Basic MWQ1OWMxZTMtOGMzNS00NTU5LTk1NWYtNzRiZWY2NGQyOGQw",
            "partner-token": "d6e6e3641d8b47e6ac2ae71ebc558efc"
        },
    });

    const response = await result.json();
    if(response.ok){
        let img = response.data[0].image
    }else{
        let error = "An Unexpected Error has Occured. Please Try again Later."
    }
    console.log(response)
    return{
        img,
        imgError
    }
}

export default {
    getVinDecoder,
    getVehicleImage,
    getVehicleHistory
}

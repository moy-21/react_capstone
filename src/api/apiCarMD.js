import {create} from "apisauce";

const authKey = "Basic MWQ1OWMxZTMtOGMzNS00NTU5LTk1NWYtNzRiZWY2NGQyOGQw"
const partnerToken = "d6e6e3641d8b47e6ac2ae71ebc558efc"
const carApi = (cancelToken) => create({
    baseURL:`http://api.carmd.com/v3.0`,
    cancelToken,
    headers:{
        "content-type":"application/json",
        "authorization": "Basic MWQ1OWMxZTMtOGMzNS00NTU5LTk1NWYtNzRiZWY2NGQyOGQw",
        "partner-token": "d6e6e3641d8b47e6ac2ae71ebc558efc"
    }
});


const getVinDecoder = async (vin, cancelToken) => {
    let car;
    let carError;
    
    
    const response = await carApi(cancelToken).get(`/decode?vin=${vin}`);
    if(response.ok){
        car = response.data.data
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

    const response = await carApi(cancelToken).get(`/decode_more?vin=${vin}`);
    if(response.ok){
        car = response.data.data
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
    let diag;
    let diagError;

    const response = await carApi(cancelToken).get(`/diag?vin=${vin}&mileage=${mileage}&dtc=${dtc}`)
    if(response.ok){
        diag = response.data.data
    }else{
        diagError = "An Unexpected Error has Occured. Please Try again Later."
    }
    console.log(response)
    return{
        diag,
        diagError
    }
}

const getMaintance = async (vin, mileage, cancelToken) => {
    let maint;
    let maintError;

    const response = await carApi(cancelToken).get(`/maint?vin=${vin}&mileage=${mileage}`)
    if(response.ok){
        maint = response.data.data
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


    const response = await carApi(cancelToken).get(`/repairlist?vin=${vin}`)
    if(response.ok){
        repair = response.data.data
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

    const response = await carApi(cancelToken).get(`/warranty?vin=${vin}`)
    if(response.ok){
        warranty = response.data.data
    }else{
        warrantyError = "An Unexpected Error has Occured. Please Try again Later."
    }
    console.log(response)
    return{
        warranty,
        warrantyError
    }
}

const getVehicleHistory = async (vin, cancelToken) => {
    let report;
    let reportError;
    
    
    const response = await carApi(cancelToken).get(`/vhr?vin=${vin}`);
    if(response.ok){
        report = response.data.data.pdf
    }else{
        reportError = "An Unexpected Error has Occured. Please Try again Later."
    }
    console.log(response)
    return{
        report,
        reportError
    }
}

const getVehicleImage = async (vin, cancelToken) => {
    let img;
    let imgError;
    
    const response = await carApi(cancelToken).get(`/image?vin=${vin}`);
    if(response.ok){
        console.log(response)
        img = response.data.data.image
    }else{
        imgError = "An Unexpected Error has Occured. Please Try again Later."
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
    getVehicleHistory,
    getWarranty,
    getRepairList,
    getVinDecoderPremium,
    getMaintance,
    getDiagnostics
}

import {API_HOST} from '../utils/const'

export async function getCoffeApi(){
    try{
        const url = `${API_HOST}/coffe`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }catch(error){
        throw error;
    }
}

export async function getCoffeByIdApi(id){
    try {
        const url = `${API_HOST}/coffe/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        
    }
}
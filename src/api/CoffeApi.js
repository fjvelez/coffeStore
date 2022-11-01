import {API_HOST} from '../utils/const'

export async function getCoffeApi(path){
    try{
        const url = `${API_HOST}/${path}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }catch(error){
        throw error;
    }
}

export async function getCoffeByIdApi(path, id){
    try {
        const url = `${API_HOST}/${path}/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        
    }
}
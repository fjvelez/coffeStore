export var idUser = null

export function setIduser(id){
    idUser = id
}

export function reloadIdUser(){
    idUser = null
}

export function getIdUser(){
    return idUser
}
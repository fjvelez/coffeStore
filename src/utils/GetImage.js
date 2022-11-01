import { COFFE_IMAGES } from './const'

const getImages = (type) => COFFE_IMAGES[type.toLowerCase()]

export default getImages;
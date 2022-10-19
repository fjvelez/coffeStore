import { COFFE_IMAGES } from './const'

const getColor = (type) => COFFE_IMAGES[type.toLowerCase()]

export default getColor;
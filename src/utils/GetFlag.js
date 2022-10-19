import { COFFE_FLAGS } from './const'

const getFlag = (type) => COFFE_FLAGS[type.toLowerCase()]

export default getFlag;
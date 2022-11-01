import { SUBSCRIPTION_IMAGE } from './const'

const getSubs = (img) => SUBSCRIPTION_IMAGE[img.toLowerCase()]

export default getSubs;
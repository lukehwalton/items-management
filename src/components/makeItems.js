import lamp from '../assets/lamp.jpg'
import table from '../assets/table.jpg'
import lavaLamp from '../assets/lavaLamp.jpg'

const makeItems = () => {
  return [
    { id: 1, name: 'Lamp', price: '10', imageUrl: lamp },
    { id: 2, name: 'Table', price: '20', imageUrl: table },
    { id: 3, name: 'Lava Lamp', price: '30', imageUrl: lavaLamp },
  ]
}

export default makeItems;
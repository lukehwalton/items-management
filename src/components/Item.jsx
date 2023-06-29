const Item = ({id, name, price, imageURL, select}) => {

  return(
    <li key={id}>
      {name} - ${price}
    </li>
  )
}

export default Item;
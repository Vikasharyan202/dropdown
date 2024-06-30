
const Item = (props) => {
    const {item} = props;
  return (
    <div className="item">
        <p>{item}</p>
    </div>
  )
}

export default Item;
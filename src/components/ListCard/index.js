import './index.css'

export const ListCard = (props) => {
  const { item } = props

  return (
    <div className="list-card-container">
      <img
        className="checkbox"
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        alt="checked-item"
      />
      <span>{item.name}</span>
    </div>
  )
}

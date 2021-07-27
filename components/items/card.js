const Card = ({ title, number, description }) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{description}</p>
      <span id='number'>{number}</span>
    </div>
  )
}
export default Card

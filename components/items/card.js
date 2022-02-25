import style from '../../styles/home.module.scss'
const Card = ({ title, number, description }) => {
  return (
    <div className={style.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <span id={style.number}>{number}</span>
    </div>
  )
}
export default Card

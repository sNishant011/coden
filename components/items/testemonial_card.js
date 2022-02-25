import Image from 'next/image'
import style from '../../styles/home.module.scss'
const TestemonialCard = ({ imgsrc, name, post, review }) => {
  return (
    <div className={style.card}>
      <Image src={require(`../../public/${imgsrc}`)} alt={name} />
      <h3>Nishant Shrestha</h3>
      <p>{review}</p>
      <h5>{post}</h5>
    </div>
  )
}
export default TestemonialCard

import Image from 'next/image'
import style from '../../styles/home.module.scss'
const TestemonialCard = ({ imgsrc, name, post, review }) => {
  return (
    <div className={style.card}>
      <Image src={require(`../../public/${imgsrc}`)} alt={name} />
      <h2>Nishant Shrestha</h2>
      <p>{review}</p>
      <h3>{post}</h3>
    </div>
  )
}
export default TestemonialCard

import TestemonialCard from './items/testemonial_card'
import style from '../styles/home.module.scss'
const Testemonials = () => {
  return (
    <section className={style.testemonials_section}>
      <h1>Testemonials</h1>
      <div className={style.cards}>
        <TestemonialCard
          imgsrc='illustrations_imgs/person.png'
          name='Nishant Shrestha'
          post='Student, Herald'
          review='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
        maiores?Lorem ipsum dolor sit amet.'
        />
        <TestemonialCard
          imgsrc='illustrations_imgs/person.png'
          name='Nishant Shrestha'
          post='Student, Herald'
          review='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
        maiores?Lorem ipsum dolor sit amet.'
        />
        <TestemonialCard
          imgsrc='illustrations_imgs/person.png'
          name='Nishant Shrestha'
          post='Student, Herald'
          review='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
        maiores?Lorem ipsum dolor sit amet.'
        />
      </div>
    </section>
  )
}
export default Testemonials

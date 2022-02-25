import Card from './items/card'
import CardData from '../data/card_data'
import style from '../styles/home.module.scss'
const Features = () => {
  const datas = CardData()

  return (
    <section className={style.features_section}>
      <h1>Features</h1>
      <div className={style.cards}>
        {datas.map((data) => (
          <Card
            title={data.title}
            description={data.description}
            number={data.number}
            key={data.number}
          />
        ))}
      </div>
    </section>
  )
}
export default Features

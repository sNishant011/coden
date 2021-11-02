import Card from './items/card'
import CardData from './data/card_data'
const Features = () => {
  const datas = CardData()

  return (
    <section className='features-section'>
      <h1>Features</h1>
      <div className='cards'>
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

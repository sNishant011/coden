import style from '../styles/home.module.scss'
const PlatformFeature = () => {
  return (
    <section className={style.platform_feature}>
      <h1>Platforms</h1>
      <div className={style.info}>
        <h2>Learn Anywhere on Web, Android, and IOS</h2>
        <ul>
          <li>Downloadable</li>
          <li>Latesh</li>
          <li>Interactive</li>
          <li>With Notes</li>
        </ul>
      </div>
    </section>
  )
}
export default PlatformFeature

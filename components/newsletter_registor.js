
const NewsletterResistor = () => {
  return (
    <section className='newsletter-registor'>
      <h1>Subscribe to our Newsletter?</h1>
      <form className='form-div' action='https://facebook.com' method='post'>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Your Email Here'
          autoComplete='off'
          required
        />
        <button type='submit'>Subscribe</button>
      </form>
    </section>
  )
}
export default NewsletterResistor

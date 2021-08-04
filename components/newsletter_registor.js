import { useForm } from '@formspree/react'
const Newsletterform = () => {
  const [state, handleSubmit] = useForm('mqkwyqgq')
  if (state.succeeded) {
    return <p>Thanks for subscribing. We will notify for you about offers.!!</p>
  }

  return (
    <form
      className='form-div'
      onSubmit={() => alert('Stopped form submission due to spam!!')}
      method='post'
    >
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Your Email Here'
        autoComplete='off'
        required
      />
      <button type='submit' disabled={state.submitting}>
        Subscribe
      </button>
    </form>
  )
}
const NewsletterResistor = () => {
  return (
    <section className='newsletter-registor'>
      <h1>Subscribe to our Newsletter?</h1>
      <Newsletterform />
    </section>
  )
}
export default NewsletterResistor

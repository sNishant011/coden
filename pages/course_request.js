import Nav from '../components/nav'
import MetaHeading from '../components/meta-heading'
import { useForm } from '@formspree/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const RequestForm = () => {
  const [state, handleSubmit] = useForm('xnqlgdoq')
  if (state.succeeded) {
    return (
      <p>
        We will look for your request.!!
        <br />
        Stay tunned.
      </p>
    )
  }
  return (
    <form
      className='form-container'
      onSubmit={() => alert('Stopped form submission due to spam!!')}
      method='post'
    >
      <input
        type='text'
        name='name'
        id='name'
        placeholder='your name here'
        autoComplete='off'
        required
      />
      <label htmlFor='name' className='field-label'>
        Name
      </label>
      <input
        type='email'
        placeholder='Your Email Here'
        name='email'
        id='email'
        autoComplete='off'
        required
      />
      <label htmlFor='email' className='field-label'>
        Email
      </label>
      <input
        type='text'
        placeholder='Course'
        name='course_name'
        id='course_name'
        autoComplete='off'
        required
      />
      <label htmlFor='course_name' className='field-label'>
        Course/ Book name
      </label>
      <button type='submit' disabled={state.submitting} className='btn warrow'>
        <span id='button-text'>Request Course</span>
        <div className='icon-container'>
          <FontAwesomeIcon icon={faArrowRight} className='icon' />
        </div>
      </button>
    </form>
  )
}
const CourseRequestPage = () => {
  return (
    <>
      <MetaHeading title='Request Couses' />
      <Nav />
      <div className='course-request-page'>
        <h1>Course/ Book Request Form</h1>
        <div className='course-request-form'>
          <RequestForm />
        </div>
      </div>
    </>
  )
}
export default CourseRequestPage

import Nav from '../components/nav'
import MetaHeading from '../components/meta-heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const CourseRequestPage = () => {
  return (
    <>
      <MetaHeading title='Request Couses' />
      <Nav />
      <div className='course-request-page'>
        <h1>Course/ Book Request Form</h1>
        <div className='course-request-form'>
          <form
            className='form-container'
            action='https://send.pageclip.co/P3QlFYBhB51datXAWbvH1U7dg2Ws9GR3/Course_Request_Form'
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
              placeholder='Course Name'
              name='course_name'
              id='course_name'
              autoComplete='off'
              required
            />
            <label htmlFor='course_name' className='field-label'>
              Course/ Book name
            </label>
            <button type='submit' className='btn warrow'>
              <span id='button-text'>Request Course</span>
              <div className='icon-container'>
                <FontAwesomeIcon icon={faArrowRight} className='icon' />
              </div>
            </button>
          </form>
        </div>
        <div id='small-text'>{"Don't worry it's safe"}</div>
      </div>
    </>
  )
}
export default CourseRequestPage

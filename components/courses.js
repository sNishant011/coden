import CoursesCard from './items/course_card'

const Courses = () => {
  return (
    <>
      <section className='featured-courses'>
        <h1>Popular This Month</h1>
        <div className='courses'>
          <CoursesCard
            title='Full on Laravel and Vue'
            src='illustrations_imgs/landing.png'
          />
          <CoursesCard
            title='Build Apps with Flutter'
            src='illustrations_imgs/flutter.png'
            active={true}
          />
          <CoursesCard
            title='Reactify Web'
            src='illustrations_imgs/react.png'
          />
        </div>
      </section>
    </>
  )
}
export default Courses

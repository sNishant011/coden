import CoursesCard from './items/course_card'
import CoursesData from '../data/courses_data'

const Courses = () => {
  const courses = CoursesData()

  return (
    <>
      <section className='featured-courses'>
        <h1>Popular This Month</h1>

        <div className='courses'>
          {courses.map((course, index) => (
            <CoursesCard
              key={index}
              title={course.title}
              src={course.thumbnail_src}
              description={course.course_description}
              course_slug={course.slug}
            />
          ))}
        </div>
      </section>
    </>
  )
}
export default Courses

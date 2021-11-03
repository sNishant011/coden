import CoursesData from '../data/courses_data'
import UserData from '../data/user_data'
import CoursesCard from '../components/items/course_card'

const Dashboard = () => {
  const user_detail = UserData()

  // all_course will contain list of dictionary {course_id: 2, ....}
  const all_courses = CoursesData()
  // user_course will contain list of dictionary {id: 2, ....}
  const user_courses = user_detail.enrolled_courses
  const user_enrolled_courses = []
  user_courses.forEach((u_course) => {
    all_courses.forEach((course) => {
      if (course.course_id === u_course.id) {
        course['completion'] = u_course.completion
        user_enrolled_courses.push(course)
      }
    })
  })
  console.log(user_enrolled_courses)
  return (
    <>
      <div>
        <h1>Hello, {user_detail.f_name}</h1>
        <hr />
        <div className='enrolled-courses'>
          <h2>
            Your Courses <span className='underline'></span>
          </h2>
          <div className='main-courses-pg'>
            <div className='course-container'>
              <div className='courses'>
                {user_enrolled_courses.map((course, index) => (
                  <CoursesCard
                    key={index}
                    title={course.title}
                    src={course.thumbnail_src}
                    description={course.course_description}
                    course_slug={course.slug}
                    completion_percent={course.completion}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Dashboard

import { useRouter } from 'next/router'
import ChapterList from '../../components/chapterList'
import Footer from '../../components/items/footer'
import MetaHeading from '../../components/meta-heading'
import Nav from '../../components/nav'
import NewsletterResistor from '../../components/newsletter_registor'
import CoursesData from '../../courses_data'
import { useState, useEffect } from 'react'
import ChapterDetail from '../../components/chapterDetail'
const CourseDetail = () => {
  const router = useRouter()
  const course_id = router.query.all_chapters
  const courses = CoursesData()
  const currentCourseArray = courses.filter(
    (course) => course.slug === course_id
  )
  const currentCourse = currentCourseArray[0]
  const [currentChapter, setCurrentChapter] = useState(0)
  const [chapterMenuActive, setChapterMenuActive] = useState(false)
  const activeChapter = currentCourse?.chapters[currentChapter]
  return (
    <>
      <MetaHeading title={currentCourse?.title} />
      <Nav />
      <div className='course-chapter-section'>
        <div className='small-nav'>
          <div
            className={`menu-btn ${chapterMenuActive ? 'close-btn' : ''}`}
            onClick={() => setChapterMenuActive(!chapterMenuActive)}
          >
            <span className='burger b1'></span>
            <span className='burger b2'></span>
            <span className='burger b3'></span>
          </div>
          <h1>{`${currentCourse ? currentCourse.title : ''}`}</h1>
        </div>
        <div className='chapter-container'>
          <ChapterList
            chapterMenuActive={chapterMenuActive}
            chapters={currentCourse?.chapters}
            currentChapter={currentChapter}
            setCurrentChapter={setCurrentChapter}
            course={currentCourse}
          />
          <ChapterDetail
            chapter={activeChapter}
            setChapterMenuActive={setChapterMenuActive}
          />
        </div>
      </div>
      <div className='footer-container'>
        <NewsletterResistor />
        <Footer />
      </div>
    </>
  )
}
export default CourseDetail
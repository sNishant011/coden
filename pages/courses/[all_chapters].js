import { useRouter } from 'next/router'
import ChapterList from '../../components/chapterList'

import { useState, useEffect, useRef } from 'react'
import ChapterDetail from '../../components/chapterDetail'
import CoursesData from '../../data/courses_data'
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
  // for sticky nav
  const navRef = useRef(null)
  if (typeof window !== 'undefined') {
    var prevScrollpos = window.pageYOffset
  }
  function onScroll() {
    //navRef.current
    var currentScrollPos = window.pageYOffset
    if (navRef.current !== null) {
      if (prevScrollpos > currentScrollPos) {
        navRef.current.style.top = '80px'
      } else {
        navRef.current.style.top = '-80px'
      }
      prevScrollpos = currentScrollPos
      setChapterMenuActive(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <div className='course-chapter-section'>
        <div className='small-nav' ref={navRef}>
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
    </>
  )
}
export default CourseDetail

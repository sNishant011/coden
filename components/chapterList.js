import { useEffect, useRef } from 'react'
const ChapterList = ({
  course,
  chapters,
  currentChapter,
  setCurrentChapter,
  chapterMenuActive,
}) => {
  const chapterNav = useRef(null)
  useEffect(() => {
    if (chapterMenuActive) {
      chapterNav.current.style.transform = 'translateX(0%)'
    } else {
      chapterNav.current.style.transform = 'translateX(-100%)'
    }
  }, [chapterMenuActive])
  return (
    <>
      <nav className='chapters-nav' ref={chapterNav}>
        <h2 className='course-title'>{course?.title}</h2>
        <div className='chapters-list'>
          {chapters?.map((chapter, index) => (
            <li
              key={index}
              className={`chapter ${
                currentChapter === index ? 'active-chapter' : ''
              }`}
              onClick={() => setCurrentChapter(index)}
            >
              {chapter.title}
            </li>
          ))}
        </div>
      </nav>
    </>
  )
}
export default ChapterList

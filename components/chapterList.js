import { useEffect, useRef } from 'react'
const ChapterList = ({
  course,
  chapters,
  currentChapter,
  setCurrentChapter,
  chapterMenuActive,
}) => {
  return (
    <>
      <nav
        className={`chapters-nav ${chapterMenuActive ? 'small-active' : ''}`}
      >
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

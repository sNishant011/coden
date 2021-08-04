import Image from 'next/image'
import { useEffect, useRef } from 'react'
const ChapterDetail = ({ chapter, setChapterMenuActive }) => {
  const chapterDetails = useRef()
  useEffect(() => {
    chapterDetails.current.innerHTML = chapter?.content
  }, [chapter?.content, chapterDetails])
  return (
    <div className='chapter-detail' onClick={() => setChapterMenuActive(false)}>
      <h1>{chapter?.title}</h1>
      <div className='image-container'></div>

      <div className='details' ref={chapterDetails}></div>
    </div>
  )
}
export default ChapterDetail

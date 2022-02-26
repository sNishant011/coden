import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAward } from '@fortawesome/free-solid-svg-icons'
import BookCard from '../components/items/book_card'
import RequestCourseSection from '../components/items/course_request'
import { useState, useEffect } from 'react'
import style from '../styles/course.module.scss'
import axios from 'axios'
const Books = () => {
  const [books, setBooks] = useState(null)
  const [filteredBooks, setFilteredBooks] = useState(null)
  const [query, setQuery] = useState('')
  useEffect(() => {
    axios
      .get(
        'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=7tB3Zlp1psYYQofxY9esapE9WtgiF1A7'
      )
      .then((response) => {
        setBooks(response.data.results.books)
        setFilteredBooks(response.data.results.books)
      })
      .catch((err) => console.log(err))
  }, [])

  const filterBook = (title1) => {

    setFilteredBooks(
      books.filter((b1) =>
        b1.title.toLocaleLowerCase().includes(title1.toLocaleLowerCase())
      )
    )
  }
  return (
    <>
      <div className={style.main_courses_pg}>
        <h1>Our Books</h1>
        <div className={style.search_container}>
          <input
            type='text'
            placeholder='Type to Search...'
            name='search-query'
            id='search-query'
            autoComplete='off'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              filterBook(e.target.value)
            }}
            required
          />
          <button
            className={`btn ${style.round_rect}`}
            onClick={() => filterBook(query)}
          >
            <FontAwesomeIcon icon={faSearch} className={style.icon} />
            <div className='text'>Search</div>
          </button>
        </div>
        <h2>
          <div className={style.icon_container}>
            <FontAwesomeIcon icon={faAward} className={style.icon} />
          </div>
          Certifable Course
        </h2>
        <div className={style.course_container}>
          <div className='courses'>
            {filteredBooks ? '' : <h2>Loading</h2>}
            {filteredBooks?.map((book, index) => (
              <BookCard
                key={index}
                title={book.title}
                src={book.book_image}
                description={book.description}
                course_slug={book.primaryisbn10}
              />
            ))}
          </div>
        </div>
        <RequestCourseSection />
      </div>
    </>
  )
}
export default Books

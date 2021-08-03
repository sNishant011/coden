import MetaHeading from '../components/meta-heading'
import Nav from '../components/nav'
import NewsletterResistor from '../components/newsletter_registor'
import Footer from '../components/items/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faSearch, faAward } from '@fortawesome/free-solid-svg-icons'
import BookCard from '../components/items/book_card'
import RequestCourseSection from '../components/items/course_request'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Books = () => {
  const [books, setBooks] = useState(null)
  useEffect(() => {
    axios
      .get(
        'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=7tB3Zlp1psYYQofxY9esapE9WtgiF1A7'
      )
      .then((response) => setBooks(response.data.results.books))
      .catch((err) => console.log(err))
  }, [])
  console.log(books)
  return (
    <>
      <MetaHeading title='Courses' />
      <Nav />
      <div className='main-courses-pg'>
        <h1>Our Books</h1>
        <div className='search-container'>
          <input
            type='text'
            placeholder='Type to Search...'
            name='search-query'
            id='search-query'
            autoComplete='off'
            required
          />
          <Link href='/courses'>
            <a>
              <button className='btn round-rect'>
                <FontAwesomeIcon icon={faSearch} className='icon' />
                <div className='text'>Search</div>
              </button>
            </a>
          </Link>
        </div>
        <h2>
          <div className='icon-container'>
            <FontAwesomeIcon icon={faAward} className='icon' />
          </div>
          Certifable Course
        </h2>
        <div className='course-container'>
          <div className='courses'>
            {books ? '' : <h2>Loading</h2>}
            {books?.map((book, index) => (
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
      <div className='footer-container'>
        <NewsletterResistor />
        <Footer />
      </div>
    </>
  )
}
export default Books

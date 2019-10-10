  
import React, { useState } from 'react'
import { MdExpandMore, MdExpandLess} from 'react-icons/md'
import { Link } from '../routes'
import { MdArrowForward } from 'react-icons/md'

export function CardsWrapper({
  name,
  origin,
  children
}) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }
  return (
    <>
    <style jsx>
    {`
    ul {
      display: grid;
      align-items: center;
      justify-items: center;
      grid-template-columns: repeat(auto-fill , minmax(300px, 1fr))
      grid-template-rows: 1fr;
      box-shadow: 0 0 3px rgba(0,0,0,.3);
      border-radius: 20px 20px 0 0;
    }
    h2 {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 700;
      font-size: 34px;
      text-align: initial;
    }
    a, a:hover, a:active {
      text-decoration: none;
      color: #222;
    }
    .header_wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      
    }
    `}
    </style>
      <div className='header_wrapper'>
        <Link route="origin" params={{ origin: origin }}>
          <a>
            <MdArrowForward
              style={{
                margin: 'auto'
              }}
              size="50px"
            />
          </a>
        </Link>
        <h2>{name} ({origin})</h2>
      </div>
      <ul>
        {
          isOpen ? 
          <MdExpandLess size='30px'onClick={handleOpen} /> 
          : 
          <MdExpandMore size='30px' onClick={handleOpen} />
        }
        {isOpen ? children : null}
      </ul>
    </>
  )
}
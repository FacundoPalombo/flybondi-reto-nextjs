import React from 'react'
import GlobalStyles from './GlobalStyles'

export function Card({
  code,
  origin,
  destination,
  name,
  children
}) {
  return(
    <div>
      <GlobalStyles/>
      <style jsx>
        {
          `
          h2 {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 700;
            font-size: 28px;
            text-align: initial;
            margin-top: 12px;
          }
          div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 0 4px rgba(0,0,0,0.4);
            border-radius: 20px;
            width: 320px;
            height: 440px;
          }
          img {
            width: 97%;
            height: auto;
            margin: 3% 0;
          }
          span {
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-weight: normal;
            font-size: 22px;
            text-align: initial;
            line-height: 24px;
            letter-spacing: 1.2px;
          }
          .bottom-span {
            position: relative;
            bottom: 0;
          }
          `
        }
      </style>
      <h2>{name} ({origin})</h2>
      <img src='/assets/airplane.jpg' alt={`${origin && origin}${destination && ` to ${destination}`}`}/>
      <span>Destination: {destination}</span>
      {children}
      <span className="bottom-span">{code}</span>
    </div>
  )
}


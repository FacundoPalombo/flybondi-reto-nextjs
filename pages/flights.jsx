import React from 'react';
import * as routes from '../routes.json'
import Card from '../components/Card'
import Link from 'next/link'

function Flights(props) {
  const origin = 'EPA', destination = 'MDZ'
  console.log(props)
  return (
    <>
    <style jsx>
      {`
      ul {
        list-style: none;
        margin: 0;
      }
      `}
    </style>
    <main>
      <article>
        <h2>Choose your outbound flight to Mendoza</h2>
        <section>
          <p>
            Here it should be a flight list with all available outbound flights
            for the selected trip. Each list item should have:
          </p>
          <ul>
            <li>
              <Link 
              href='/flight' 
              
              prefetch>
                <a>
                  <Card name="asd" code="vsd" origin="EPA" destination="MDZ" ></Card>
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </article>
      <article>
        <h2>Choose your inbound flight to Buenos Aires</h2>
        <section>
          <p>
            Here it should be a flight list with all available inbound flights
            for the selected trip.
          </p>
          <ul>
            <li>A dummy image</li>
            <li>Should be selectable by clicking the whole card</li>
            <li>Display the airport code</li>
            <li>Display the location city name</li>
            <li>Display the flight times and duration</li>
            <li>Display the price for the leg</li>
          </ul>
        </section>
      </article>
    </main>
    </>
  );
}
Flights.getInitialProps = async (props) => {
  console.log(props)
  return routes
}

export default Flights
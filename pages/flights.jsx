import React from 'react';
import * as corData from '../epa-cor.json'
import * as mdzData from '../epa-mdz.json'
import Card from '../components/Card'
import { Link } from '../routes'

function Flights(props) {
  const origin = 'EPA', destination = 'MDZ'
  console.log(props)
  return (
    <>
    <style jsx>
      {`
      ul {
        display: grid;
        grid-template-columns: repeat(3, minmax(180px, 1fr));
        grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 30px;
        margin-top: 30px;
        padding: 0 30px;
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
          {
            props.mdz.filter(item => item.origin === 'MDZ').map((item,key) => {
              const {origin, destination, flightNo} = item
              return(
                <li key={key}>
                  <Link 
                  route='flight'
                  params={
                    {
                      origin,
                      destination
                    }
                  }
                  prefetch>
                    <a>
                      <Card name={`Flight N° ${flightNo}`} code={`${origin}.${destination}-${flightNo}`} origin={origin} destination={destination} ></Card>
                    </a>
                  </Link>
                </li>
              )
            })
          }
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
  const { default: { flights: cor }} = corData;
  const { default: { flights: mdz }} = mdzData;
  const flights = {cor,mdz}
  return flights;
}

export default Flights
import React from 'react';
import { Card } from '../components/Card';
import { Link } from '../routes';
import * as mdzData from '../epa-mdz.json';
import * as corData from '../epa-cor.json';
import { formatPrice, formatFlyTime } from '../utils/formatters'
import Layout from '../components/Layout';

function Flights(props) {
  console.log(props)
  const {flights} = props
  return (
    <Layout>
      <style jsx>
        {`
          h2{
            font-weight: bolder;
            font-size: 32px;
            font-family: -apple-system-ui, Roboto, sans-serif;
            margin-top: 30px;
          }
          ul {
            display: grid;
            grid-gap: 30px;
            margin-top: 30px;
            padding: 0 30px;
          }
          a, a:hover, a:active{
            text-decoration: none;
            color: #222;

          }
          a:active {
            color: #777;
          }
        `}
      </style>
      <main>
        <article>
          <h2>Choose your outbound flight to Mendoza</h2>
          <section>
            <ul>
              {flights
                .filter(item => item.origin === 'MDZ')
                .map((item, key) => {
                  const { origin, destination, flightNo, arrivalDate, departureDate, currency } = item;
                  return (
                    <li key={key}>
                      <Link
                        route="flight"
                        params={{
                          origin,
                          destination
                        }}
                        prefetch
                      >
                      <a>
                        <Card
                          name={`Flight N° ${flightNo}`}
                          code={`${origin}.${destination}-${flightNo}`}
                          origin={origin}
                          destination={destination}
                        >
                        <h4>{formatFlyTime(arrivalDate,departureDate)}de vuelo</h4>
                        <h4>{formatPrice(item.fares[0].prices.afterTax, currency)}</h4></Card>
                      </a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </section>
        </article>
        <article>
          <h2>Choose your inbound flight to Buenos Aires</h2>
          <section>
            <ul>
              {flights
                .filter(item => item.destination === 'EPA')
                .map((item, key) => {
                  const { origin, destination, flightNo, arrivalDate, departureDate, currency } = item;
                  return (
                    <li key={key}>
                      <Link
                        route="flight"
                        params={{
                          origin,
                          destination
                        }}
                        prefetch
                      >
                        <a>
                          <Card
                            name={`Flight N° ${flightNo}`}
                            code={`${origin}.${destination}-${flightNo}`}
                            origin={origin}
                            destination={destination}
                          >
                          <h4>{formatFlyTime(arrivalDate,departureDate)}de vuelo</h4>
                          <h4>{formatPrice(item.fares[0].prices.afterTax, currency)}</h4></Card>
                        </a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </section>
        </article>
      </main>
    </Layout>
  );
}

Flights.getInitialProps = props => {
  const {
    default: { flights: cor }
  } = corData;
  const {
    default: { flights: mdz }
  } = mdzData;
  const flights = {flights: cor.concat(mdz)}
  return flights;
};

export default Flights;

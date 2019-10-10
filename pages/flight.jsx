import React from 'react'
import GlobalStyles from '../components/GlobalStyles'
import * as mdzData from '../epa-mdz.json';
import * as corData from '../epa-cor.json';
import { formatFlyTime } from '../utils/formatters'
import Layout from '../components/Layout';


function Flight({
  mdz,
  cor
}) {
  const flight = mdz.concat(cor)[0];
  const {
    arrivalDate,
    flightNo,
    international,
    origin,
    destination,
    departureDate
  } = flight
  const date = formatFlyTime(arrivalDate,departureDate)
  return(
    <Layout>
      <style jsx>
        {`
        header{
          width: 100%;
          height: 300px;
          display: block;
          top: 0;
        }
        main {
          overflow: hidden;
          border-radius: 6%;
          box-shadow: 0 0 3px rgba(0,0,0,0.6);
          padding-bottom: 20px

        }
        picture {
          overflow: hidden;
          height: auto;
        }
        img {
          width: 100%;
          height: auto;
          vertical-align: middle;
        }
        h3 {
        }
        section {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          grid-gap: 15px;
          justify-items: center;
          align-items: center;
        }
        .hero-container {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        `}
      </style>
      <main>
        <header>
          <div className="hero-container">
            <picture>
              <source srcSet='/assets/airplane.jpg'/>
              <img src='/assets/airplane.jpg' alt={`${origin}-${destination}-${flightNo} flight`}/>
            </picture>
          </div>
        </header>
        <section>
        <h3>{date} de vuelo</h3>
            <h4>Salida: {new Date(departureDate).toLocaleTimeString()}</h4>
            <h4>Llegada:{new Date(arrivalDate).toLocaleTimeString()}</h4>
            <h4>Internacional: {international ? 'si' : 'no'}</h4>
        </section>
      </main>
    </Layout>
  )
}

Flight.getInitialProps = async (props) => {
  const getItem = (props) => {
    const {
      default: { flights: _cor }
    } = corData;
    const {
      default: { flights: _mdz }
    } = mdzData;
    const cor = _cor.filter(item => item.origin === props.query.origin)
    const mdz = _mdz.filter(item => item.origin === props.query.origin)
    return {cor, mdz}
  }
  const item = getItem(props)
  return item;
}

export default Flight;
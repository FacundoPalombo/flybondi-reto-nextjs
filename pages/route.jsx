import React from 'react'
import * as routesData from '../routes.json';
import Layout from '../components/Layout';


function Route(props) {
  const {
    children,
    origin,
    destination
  } = props
  console.log(props)
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
        span {
          font-family: -apple-system-ui, Roboto Helvetica, Arial, sans-serif;
          font-weight: 600;
          font-size: 21px;
          margin: 6px;
        }
        `}
      </style>
      <main>
        <header>
          <div className="hero-container">
            <picture>
              <source srcSet='/assets/airplane.jpg'/>
              <img src='/assets/airplane.jpg' alt={`${origin.code}-${destination.code} route`}/>
            </picture>
          </div>
        </header>
        <section>
          <span>Destino: {destination.location.cityName} ({destination.code})</span>
        </section>
      </main>
    </Layout>
  )
}

Route.getInitialProps = async (props) => {
  const routes = {
    origin: routesData.default.routes
    .filter(item => item.code === props.query.origin)[0],
    destination: routesData.default.routes
    .filter(item => item.code === props.query.origin)[0].destinations
    .filter(item => item.code === props.query.destination)[0]
  }
  return routes;
}

export default Route;
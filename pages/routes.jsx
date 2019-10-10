import React from 'react';
import { Card } from '../components/Card';
import { CardsWrapper } from '../components/CardsWrapper';
import { MdArrowForward } from 'react-icons/md';
import { Link } from '../routes';
import * as routes from '../routes.json'
import Layout from '../components/Layout';

function Routes(props) {
  const handleOrigin = e => {
    e.preventDefault();
  };
  console.log(props)
  return (
    <Layout>
      <style jsx>
        {`
        `}
      </style>
      <ul> 
        {props.default.routes.map((origin, key) => {
          return (
            <li key={key}>
              <CardsWrapper
                name={origin.description}
                origin={origin.code}
              >
                {
                  origin.destinations.map((destination, key) => (
                    <li  key={key}>
                      <Link
                        route="route"
                        params={
                          {
                            origin: origin.code,
                            destination: destination.code
                          }
                        }
                      prefetch>
                      <a>
                        <Card
                          name={destination.description}
                          origin={origin.code}
                          destination={destination.code}
                        />
                      </a>
                      </Link>
                    </li>
                  ))
                }
              </CardsWrapper>
            </li>
          );
        })}
      </ul>
      {props.children}
    </Layout>
  );
}

Routes.getInitialProps = props => {
  return routes
};

export default Routes;

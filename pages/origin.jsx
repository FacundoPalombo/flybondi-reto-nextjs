import React from 'react';
import { Card } from '../components/Card';
import { CardsWrapper } from '../components/CardsWrapper';
import { MdArrowForward } from 'react-icons/md';
import { Link } from '../routes';
import * as routesData from '../routes.json'
import Layout from '../components/Layout';

function Routes(props) {
  return (
    <Layout>
      <style jsx>
        {`
        `}
      </style>
      <ul> 
      {
        props.routes.destinations.map((destination, key) => (
          <li  key={key}>
            <Link
              route="route"
              params={
                {
                  origin: props.routes.code,
                  destination: destination.code
                }
              }
            prefetch>
            <a>
              <Card
                name={destination.description}
                origin={props.routes.code}
                destination={destination.code}
              />
            </a>
            </Link>
          </li>
        ))
      }
      </ul>
      {props.children}
    </Layout>
  );
}

Routes.getInitialProps = props => {
  const routes = {routes: routesData.default.routes.filter(item => item.code === props.query.origin)[0]}
  return {...routes}
};

export default Routes;

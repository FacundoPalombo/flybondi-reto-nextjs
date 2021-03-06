import React, { useState } from 'react';
import { Link } from '../routes';
import Layout from '../components/Layout';

export default function Search() {
  const isOrigin = true;
  return (
    <Layout>
      <article>
        <h1>Select your {isOrigin ? 'origin' : 'destination'}</h1>
        <section>
          <p>
            Here should be a card approach list of all available origin
            airports. When an origin airport is selected, the list should
            display all available destination for given selection. The card
            should have:
          </p>
          <ul>
            <li>A dummy image</li>
            <li>Should be selectable by clicking the whole card</li>
            <li>Display the airport code</li>
            <li>Display the location city name</li>
          </ul>
        </section>
        <Link route="flights">
          <a>Start your journey!</a>
        </Link>
      </article>
    </Layout>
  );
}

import React from 'react';
import { Link } from '../routes';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <article>
        <section>
          <h2>Promotions</h2>
        </section>
        <section>
          <Link route="search">
            <a>Search</a>
          </Link>
        </section>
      </article>
    </Layout>
  );
}

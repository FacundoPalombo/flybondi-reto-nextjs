import React from 'react';
import { Link } from '../routes';
import Layout from '../components/Layout';
import { MdArrowForward } from 'react-icons/md'
export default function Home() {
  return (
    <Layout>
      <style jsx>
      {`
        h1 {
          font-size: 50px;
          font-weight: bolder;
          font-family: Helvetica-neue, sans-serif;
        }
        .promotions {
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 35px;
        }
      `}
      </style>
      <h1>Flybondi vuelos</h1>
      <article>
        <section className="promotions">
          <ul>
            <li>
              <Link route='flights'>
                <a>        
                  <h2><MdArrowForward /> Promotions</h2>
                </a>
              </Link>
            </li>
            <li>              
              <Link route="search">
                <a><MdArrowForward /> Search</a>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  );
}

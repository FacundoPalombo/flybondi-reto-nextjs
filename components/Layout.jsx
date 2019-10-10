import React from 'react'
import { Link } from '../routes'
import Head from 'next/head'
import GlobalStyles from './GlobalStyles'
import { MdHome, MdAirplanemodeActive, MdSearch } from 'react-icons/md'

export default function Layout (props) {
  const { 
    children, 
    title = 'Flybondi, tu app de vuelos', 
    description = 'Con flybondi podés buscar tus vuelos más baratos a donde vos quieras' 
  } = props;
    return (
      <>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name="description" content={description}/>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <style jsx>
          {`
          footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 40px;
            background-color: #333;
            color: #EEE;
            text-align: center;
            padding: 10px;
          }
          h3{
            font-weight: 600;
            font-family: -apple-system-ui, Roboto, Helvetica, Arial sans-serif;
          }
          nav {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3,1fr);
            grid-template-rows: 1fr;
            align-items: center;
            justify-items: center;
          }
          a, a:hover, a:active{
            text-decoration: none;
            color: #FA3;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .main_layout {
            margin-bottom: 80px;
          }
          `}
        </style>
        <header>
          <nav>
            <Link route='index'><a><MdHome size='32px'/></a></Link>
            <Link route='search'><a><MdSearch size='32px'/></a></Link>
            <Link route='flights'><a><MdAirplanemodeActive size='32px'/></a></Link>
          </nav>
        </header>
        <GlobalStyles />
        <div className='main_layout'>
          { children }
        </div>
        <footer>
          <h3>Flybondi. Tu app de vuelos.</h3>
        </footer>
      </>
    );
}

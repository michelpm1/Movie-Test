import React from 'react';
import { Router } from '@reach/router';
import Layout from './components/Layout/Layout';
import MoviePage from './containers/MoviesPage/MovieContainer.js';
import Styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Layout className={Styles.General} path="/">
        <MoviePage default />
      </Layout>
    </Router >
  )
}

export default App

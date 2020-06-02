import React from 'react';
import { Router } from '@reach/router';
import Layout from './components/Layout/Layout';
import MoviePage from './containers/MoviesPage/MovieContainer.js';
import Styles from './App.module.css';
const NoneSelected = () => {
  return (
    <div>
      No CV selected
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Layout className={Styles.General} path="/">
        {/* <NoneSelected default /> */}
        <MoviePage default />
      </Layout>
    </Router >
  )
}

export default App

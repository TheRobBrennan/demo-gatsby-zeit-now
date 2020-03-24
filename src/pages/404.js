import React from 'react';
import { Link } from 'gatsby';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultBackgroundSlideShow from 'components/DefaultBackgroundSlideShow'

const NotFoundPage = () => {
  const url =
    typeof window !== 'undefined'
      ? window.location.href
      : 'the page you requested';

  return (
    <Layout>
      <Header displaySubheading={true} />
      <p>
        Sorry - <strong>{url}</strong> does not exist.
        <br />
        Please click <Link to='/'>here</Link> to return to the{' '}
        <Link to='/'>main site</Link>.
      </p>
      <Footer />
      <DefaultBackgroundSlideShow />
    </Layout>
  );
};

export default NotFoundPage;

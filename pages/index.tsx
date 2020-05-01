import Head from 'next/head';

import classes from './index.module.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={classes.title}>Welcome!</h1>
    </>
  );
};

export default Home;

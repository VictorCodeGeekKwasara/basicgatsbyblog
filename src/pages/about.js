import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const About = () => {
	return <Layout pageTitle="About Me"> 
          <h1>Hie I am victor , I like talking about myself.</h1>
         </Layout> ;
};
export const Head = () => <Seo title='About'/>;
export default About;


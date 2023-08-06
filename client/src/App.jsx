import './App.css';
import './index.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import 'tailwindcss/tailwind.css';
import IncrementalImages from './components/IncrementalImages';
import Footer from './components/Footer';
import CatsPage from './components/CatsPage';
import DogsPage from './components/DogsPage';
import RabbitsPage from './components/RabbitsPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

import Favorites from "./components/Favorites";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar />
        <Carousel />
        <IncrementalImages />
        <Footer />
        <CatsPage />
        <DogsPage />
        <RabbitsPage />
        <Outlet />
        <Favorites />
        <AboutUs />
        <ContactUs />
        
      </div>
    </ApolloProvider>
  );
}

export default App;

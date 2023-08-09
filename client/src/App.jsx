import './App.css';
import './index.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import 'tailwindcss/tailwind.css';
import IncrementalImages from './components/IncrementalImages';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

import Footer from './components/Footer';
import Favorites from "./components/Favorites";


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      
      <Navbar />
      <Outlet />
      <Footer />
      
    </ApolloProvider>
  );
}

export default App;

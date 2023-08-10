import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import 'tailwindcss/tailwind.css';
import IncrementalImages from './components/IncrementalImages';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

import Footer from './components/Footer';
import Favorites from "./components/Favorites";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((parent, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
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

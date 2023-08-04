import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import 'tailwindcss/tailwind.css';
import IncrementalImages from './components/IncrementalImages';

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
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;

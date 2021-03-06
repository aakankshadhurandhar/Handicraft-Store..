import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Homescreen from './components/screens/Homescreen';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import ProductScreen from './components/screens/ProductScreen'


function App() {
  return (
    <Router>
    <Header />
      <main className="py-3">
        <Container>
        <Route path="/" component={Homescreen} exact />
        <Route path="/product/:id" component={ProductScreen}  />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

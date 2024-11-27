npx create-react-app car-rental-app
cd car-rental-app
npm install react-router-dom
npm install [tailwindcss/bootstrap/other framework]

npx tailwindcss init

//css
@tailwind base;
@tailwind components;
@tailwind utilities;

[
    {
      "id": 1,
      "name": "Toyota Corolla",
      "price": 50,
      "image": "url-to-image",
      "description": "Comfortable and fuel-efficient car."
    },
    {
      "id": 2,
      "name": "Ford Mustang",
      "price": 100,
      "image": "url-to-image",
      "description": "Luxury sports car with top-notch features."
    }
  ]

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { useState, useEffect } from 'react';
import axios from 'axios';

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/cars').then((response) => {
      setCars(response.data);
    });
  }, []);

  return (
    <div>
      {cars.map((car) => (
        <Card key={car.id} car={car} />
      ))}
    </div>
  );
}

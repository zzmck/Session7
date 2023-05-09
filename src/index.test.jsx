import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { DataContext } from './context';
import Home from './pages/Home';
import Accomodation from './pages/Accomodation'
import About from './pages/About'
import Error from './pages/Error'

import './components/Banner/test';
import './components/Cards/test';
import './components/Collapse/test';
import './components/Presentation/test';
import './components/Slideshow/test';

const data=[{
    "id": "c67ab8a7",
    "title": "Appartement cosy",
    "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "pictures": [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
    ],
    "description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
    "host": {
        "name": "Nathalie Jean",
        "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
    },
    "rating": "5",
    "location": "Ile de France - Paris 17e",
    "equipments": [
        "Équipements de base",
        "Micro-Ondes",
        "Douche italienne",
        "Frigo",
        "WIFI"
    ],
    "tags": [
        "Batignolle",
        "Montmartre"
    ]
}];
const links =[{
    name : "Accueil",
    link:"/"
  },
  {
    name : "A propos",
    link : "/about"
  }];
  describe('Page ====> HOME', () => {
    test('Should render without crashing', async () => {
      render(
        <MemoryRouter>
        <DataContext.Provider value={{ data, links }}>
          <Home />
        </DataContext.Provider>
        </MemoryRouter>
      );
    });
  });

  describe('Page ====> ACCOMODATION', () => {
    test('Should render without crashing', async () => {
      render(
        <MemoryRouter>
        <DataContext.Provider value={{ data, links }}>
          <Accomodation />
        </DataContext.Provider>
        </MemoryRouter>
      );
    });
  });

  describe('Page ====> ABOUT', () => {
    test('Should render without crashing', async () => {
      render(
        <MemoryRouter>
        <DataContext.Provider value={{ data, links }}>
          <About />
        </DataContext.Provider>
        </MemoryRouter>
      );
    });
  });

  describe('Page ====> ERROR', () => {
    test('Should render without crashing', async () => {
      render(
        <MemoryRouter>
        <DataContext.Provider value={{ data, links }}>
          <Error />
        </DataContext.Provider>
        </MemoryRouter>
      );
    });
  });
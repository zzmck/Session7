import { render, screen } from '@testing-library/react';
import { Router, MemoryRouter } from 'react-router-dom';
import { DataContext } from '../../context';
import React from 'react';
import Presentation from './index';

const dataPresentation =
	{
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
	};


  describe('Component ====> PRESENTATION', () => {
    test('Should render without crashing', () => {
      render(<Presentation data={dataPresentation} />);
    });
  
    describe('SubComponent ===> Accomodation', () => {
      test('Component ===> TITLE', () => {
        render(<Presentation data={dataPresentation} />);
        const title = screen.getByTestId('testTitle');
        expect(title).toBeInTheDocument();
      });
  
      test('Component ===> LOCATION', () => {
        render(<Presentation data={dataPresentation} />);
        const location = screen.getByTestId('location-text');
        expect(location).toBeInTheDocument();
      });
  
      test('Component ===> TAGS', () => {
        render(<Presentation data={dataPresentation} />);
        const tags = screen.getAllByTestId('tag');
        tags.forEach((tag) => {
          expect(tag).toBeInTheDocument();
        });
      });
    });
  
    describe('SubComponent ===> NameRate', () => {
      test('Component ===> NAME', () => {
        render(<Presentation data={dataPresentation} />);
        const name = screen.getByTestId('hosterName');
        const picture = screen.getByTestId('hosterPicture');
        expect(name).toBeInTheDocument();
        expect(picture).toBeInTheDocument();
      });
  
      test('Component ===> RATE', () => {
        render(<Presentation data={dataPresentation} />);
        const rate = screen.getAllByTestId('testStar');
        rate.forEach((stars) => {
          expect(stars).toBeInTheDocument();
        });
      });
    });
  });
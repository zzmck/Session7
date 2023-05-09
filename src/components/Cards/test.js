import React from 'react';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import Cards from './index.jsx';
import { DataContext } from '../../context';
import database from '../../context/accomodation.json';
import '@testing-library/jest-dom/extend-expect';

export const data = database;
  
describe('Component ====> CARDS', () => {

    it("Mise à jour de l état de isLoaded après le chargement des images Card item", async () => {
      render(
        <MemoryRouter>
          <Cards />
        </MemoryRouter>
      );

      const allCardsPictures = screen.getAllByTestId("cards-picture");
  
      allCardsPictures.forEach((picture) => {
        expect(picture.style.display).toBe("none");
      });
  
      await act(async () => {
        allCardsPictures.forEach((picture) => {
          fireEvent.load(picture);
        });
      });
  
      await waitFor(() => {
        allCardsPictures.forEach((picture) => {
          expect(picture.style.display).toBe("block");
        });
      });
  
      
    });

    it('Cards items', () => {
      render(
        <MemoryRouter>
          <Cards />
        </MemoryRouter>
      );
      const testCardsItems = screen.getAllByTestId('cards-items'); 
      testCardsItems.forEach(title => {
        expect(title).toBeInTheDocument();
      });
    });

    it('Cards title', () => {
      render(
        <MemoryRouter>
          <Cards />
        </MemoryRouter>
      );
      const testCardsTitle = screen.getAllByTestId('testTitle'); 
  
      testCardsTitle.forEach(title => {
        expect(title).toBeInTheDocument();
      });
    });

    test('Final : Should render without crashing', async () => {
      render(
        <MemoryRouter>
          <DataContext.Provider value={{ data }}>
            <Cards /> 
          </DataContext.Provider>
        </MemoryRouter>
      );

    });
});
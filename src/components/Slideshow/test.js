import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Slideshow from './index';

const dataSlide = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150"
];

describe('Component ====> SLIDESHOW', () => {
  test('Should render without crashing', () => {
    render(<Slideshow data={dataSlide} />);
  });

  it('Should update slider index on next button click', async () => {
    render(<Slideshow data={dataSlide} />);
    const paginationCurrent = screen.getByTestId('paginationCurrent');
    expect(paginationCurrent.textContent).toBe('1');
    const nextButton = screen.getByTestId('nextBtn');
    fireEvent.click(nextButton);
    expect(paginationCurrent.textContent).toBe('2');

  });


    it('Should update slider index on prev button click', async () => {
      render(<Slideshow data={dataSlide} />);
      const paginationCurrent = screen.getByTestId('paginationCurrent');
      expect(paginationCurrent.textContent).toBe('1');
    const prevButton = screen.getByTestId('prevBtn');
    fireEvent.click(prevButton);
    expect(paginationCurrent.textContent).toBe('3');
  });
});
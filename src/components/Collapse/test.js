import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Collapse from './index';

const dataCollapse = [{
  title:"Description",
  text:"Description de la premiere collapse"
}];

describe("Component ====> COLLAPSE", () => {


it("Test collapse is close", () => {
    render(<Collapse direction="row" data={dataCollapse} />);
    const content = screen.getByTestId('content');
    expect(content).toHaveClass('hide');
  });
  it("Click on collapse to Open", () => {
    const mockTitle = jest.fn();
    render(<Collapse direction="row" data={dataCollapse} onClick={mockTitle} />);
    const collapse = screen.getByTestId('titleCollapse');
    fireEvent.click(collapse);
    const descriptionText = screen.getByTestId('content');
    expect(descriptionText.outerHTML).not.toContain('hide');
  });
  
  it("Click on collapse to close", () => {
    const mockTitle = jest.fn();
    render(<Collapse direction="row" data={dataCollapse} onClick={mockTitle} />);
    const collapse = screen.getByTestId('titleCollapse');
    fireEvent.click(collapse);
    fireEvent.click(collapse);
  
    const content = screen.getByTestId('content');
    expect(content).toHaveClass('hide');
  });

});
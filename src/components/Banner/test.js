import { screen, render } from '@testing-library/react';
import React from 'react';
import Banner from './index'
import '@testing-library/jest-dom/extend-expect';

const bannerData = [
  {
    "title": "Chez vous, partout et ailleurs",
    "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg",
    "alt": "Description about the picture",
    "overlay": 0.3
  }
];

describe("Component ====> BANNER", () => {
  it('Banner Picture reder without crashing', async () => {
    render(<Banner bannerData={bannerData} />);
    const picture = screen.getByTestId("banner-picture");
    expect(picture).toBeInTheDocument();
  });

  it('Banner Overlay reder without crashing', async () => {
    render(<Banner bannerData={bannerData} />);
    const overlay = screen.getByTestId("banner-overlay");
    expect(overlay).toBeInTheDocument();
  });

  it('Banner Title reder without crashing', async () => {
    render(<Banner bannerData={bannerData} />);
    const title = screen.getByTestId("banner-title");
    expect(title).toBeInTheDocument();
  });
});
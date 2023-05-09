#### Component: Banner
This component is used to display a banner with an optional overlay and title.

### Prerequisites to work:
The component requires the bannerData prop to be provided, which should be an array containing the necessary data for the banner.

### How to use this component
This component is located in the Banner folder.
To call this component in a parent, you need to insert:
`import Banner from 'YOUR_URL/components/Banner'`

Make sure to provide the bannerData prop with the necessary data.

Insert the component wherever you want:
`<Banner bannerData={YOUR_BANNER_DATA} />`
The bannerData prop should be an array with objects representing each banner item. Each item can have the following properties:

`title (string):` The title of the banner.
`picture (string):` The URL of the banner image.
`alt (string):` The alternative text for the banner image.
`overlay (number, optional):` The opacity value for the overlay. If provided, an overlay will be displayed on top of the image.
`overlayClass (string, optional):` Additional CSS classes to be applied to the overlay element.
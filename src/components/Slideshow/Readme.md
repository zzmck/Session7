#### Component: Slider
This component is used to display a slideshow of images.

### Prerequisites to work:
The component requires the data prop to function. It should be an array of image URLs.
You can create a specific style to position the component within the parent.

### How to use this component
This component is located in the Slider folder.
To call this component in a parent, you need to insert:
`import Slider from 'YOUR_URL/components/Slider'`
Make sure that the data prop is present in the parent. 
It should be an array of image URLs.
You can create constants based on your props:
`function FUNCTION_NAME(props) {`
  `const { YOUR_OTHER_PROPS, data } = props;`

Insert the component wherever you want:
`<Slider data={data} />`

The component will render the slideshow using the provided image URLs.

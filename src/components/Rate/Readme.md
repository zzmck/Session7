#### Component: Rate
This component is used to display a rating based on stars.

### Prerequisites to work:
The component requires the data prop to function. It should be a number representing the rating.
You can create a specific style to position the component within the parent.

### How to use this component
This component is located in the Rate folder.
To call this component in a parent, you need to insert:
`import Rate from 'YOUR_URL/components/Rate'`
Make sure that the data prop is present in the parent. 
It should be a number representing the rating.
You can create constants based on your props:
`function FUNCTION_NAME(props) {`
  `const { YOUR_OTHER_PROPS, data } = props;`

Insert the component wherever you want:
`<Rate data={data} />`
The component will render the rating based on the provided data value. 
It uses star icons to represent the rating.

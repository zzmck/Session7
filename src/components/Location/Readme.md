#### Component: Location
This component is used to display the location information.

### Prerequisites to work:
The component requires the data prop to function. This prop should contain the location information.
You can create a specific style to position the component within the parent.

### How to use this component
This component is located in the Location folder.
To call this component in a parent, you need to insert:
`import Location from 'YOUR_URL/components/Location'`

Make sure that the data prop is present in the parent. 
It should contain the location information.
You can create constants based on your props:
`function FUNCTION_NAME(props) {`
  `const { YOUR_OTHER_PROPS, data } = props;`

Insert the component wherever you want:
`<Location data={data} />`

The component will render the location information based on the provided data prop.

If you want to add a special class for this component, you can use the classComponent prop:
`<Location data={data} classComponent={styles.location} />`
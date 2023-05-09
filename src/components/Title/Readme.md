#### Component: Title
This component is used to display title of an accommodation.

### Prerequisites to work:
The component requires the "data" prop to function.
You can create a specific style to position the component within the parent.

### How to use this component
This component is located in the components folder.
To call this component in a parent, you need to insert:
`import Title from 'YOUR_URL/components/Title'`

Make sure that the tags data is present in the parent.
You can create constants based on your props:
`function FUNCTION_NAME(props) {`
  `const { YOUR_OTHER_PROPS, data } = props;`

Insert the component wherever you want:
`<Title data={data} />`

If you want to add a special style for the component, you can send props :
`<Title data={data} classComponent={Your class stylised}/>`
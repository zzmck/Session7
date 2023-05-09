#### Component: Tags
This component is used to display tags of an accommodation.

### Prerequisites to work:
The component requires the "tags" prop to function.
You can create a specific style to position the component within the parent.

### How to use this component
This component is located in the components folder.
To call this component in a parent, you need to insert:
`import Tags from 'YOUR_URL/components/Tags'`

Make sure that the tags data is present in the parent.
You can create constants based on your props:
`function FUNCTION_NAME(props) {`
  `const { YOUR_OTHER_PROPS, tags } = props;`

Insert the component wherever you want:
`<Tags data={tags} />`
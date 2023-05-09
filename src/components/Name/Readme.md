#### Component: Name
This component is used to display the name and picture of a host.

### Prerequisites to work:
The component requires the name and picture props to function. These props should contain the host's name and picture URL respectively.
You can create a specific style to position the component within the parent.

### How to use this component
This component is located in the Name folder.
To call this component in a parent, you need to insert:
`import Name from 'YOUR_URL/components/Name'`

Make sure that the name and picture props are present in the parent. 
They should contain the host's name and picture URL respectively.
You can create constants based on your props:
`function FUNCTION_NAME(props) {`
  `const { YOUR_OTHER_PROPS, name, picture } = props;`

Insert the component wherever you want:
`<Name name={name} picture={picture} />`

The component will render the host's name and picture based on the provided props.

If you want to add a special style for the component, you can use the container class in your CSS module file (name.module.css):
`.container {`
`}`
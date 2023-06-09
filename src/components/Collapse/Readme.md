Component: Collapse
This component is used to display a list of components in a collapsed layout.

#### Prerequisites to work:
The component requires the direction prop and the data prop to function. 
The direction prop determines the layout direction of the components (either "row" or "column"). 
The data prop should contain an array of data objects to be passed to each component.

### How to use this component
This component is located in the Collapse folder.
To call this component in a parent, you need to insert:
`import Collapse from 'YOUR_URL/components/Collapse'`

Make sure that the direction prop and the data prop are present in the parent. 
The direction prop should be set to either "row" or "column" to determine the layout direction. The data prop should contain an array of data objects.

Insert the component wherever you want:
`<Collapse direction={direction} data={data} />`

The component will render a list of components based on the provided data prop. Each component will receive the corresponding data object from the array.



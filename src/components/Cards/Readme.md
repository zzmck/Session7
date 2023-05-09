#### Component: Cards
This component is used to display a list of items based on the data provided by the DataContext.

### Prerequisites to work:
The component requires the DataContext to be set up correctly in a higher-level component. Make sure the DataContext is properly initialized and provides the necessary data to the component.

### How to use this component
This component is located in the Cards folder.
To call this component in a parent, you need to insert:
`import Cards from 'YOUR_URL/components/Cards'`

Make sure that the DataContext is set up correctly in a higher-level component and provides the necessary data.

Insert the component wherever you want:
`<Cards />`
The component will access the data provided by the DataContext and render a list of items based on that data. 
Each item will receive a unique id and the corresponding data object.

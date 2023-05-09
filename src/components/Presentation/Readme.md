#### Component: Presentation
This component is used to display the presentation of an accommodation.

### Prerequisites to work:
The component requires the data prop to function. It should be an object containing the necessary data for presentation.
You can create a specific style to position the component within the parent.

### How to use this component
This component is located in the Presentation folder.
To call this component in a parent, you need to insert:
`import Presentation from 'YOUR_URL/components/Presentation'`

Make sure that the data prop is present in the parent.
It should be an object containing the necessary data for presentation.
You can create constants based on your props:
`function FUNCTION_NAME(props) {`
  `const { YOUR_OTHER_PROPS, data } = props;`

Insert the component wherever you want:
`<Presentation data={data} />`
The component will render the presentation based on the provided data object. 
It uses other components like DescAccomodation and RateName to display the information.

If you want to add a special style for the accommodation container, you can use styled-components and the ContainerAccomodation component:
`import styled from 'styled-components';`

`const ContainerAccomodation = styled.div`
`;`

    `<ContainerAccomodation>`
      `<DescAccomodation data={data} />`
   ` </ContainerAccomodation>`
   
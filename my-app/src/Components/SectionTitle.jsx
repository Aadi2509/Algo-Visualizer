import React from 'react'
import { Header } from 'semantic-ui-react'

const HeaderExamplePage = (props) => (
  <div>
    <Header as='h2'>{props.heading}</Header>
  </div>
)

export default HeaderExamplePage;





// import React, { useState } from 'react';
// import { Header, Segment } from 'semantic-ui-react'

// // const HeaderExampleDividing = () => (
// //   <Header as='h3' dividing>
// //     Dividing Header
// //   </Header>
// // )

// // export default HeaderExampleDividing;

// const HeaderExampleTextAlignment = () => (
//     <Segment>
//       <Header as='h3' textAlign='left'>
//         Float Left
//       </Header>
//     </Segment>
//   )
  
//   export default HeaderExampleTextAlignment;

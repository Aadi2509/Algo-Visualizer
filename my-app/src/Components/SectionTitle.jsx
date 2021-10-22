import React from 'react'
import { Header } from 'semantic-ui-react'

const HeaderExamplePage = (props) => (
  <div>
    <Header style={{ marginLeft:"5%",marginTop:"1%",marginBottom:"5%"}} as='h1'>{props.heading}</Header>
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

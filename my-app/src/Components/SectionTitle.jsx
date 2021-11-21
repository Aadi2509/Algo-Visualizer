import React from 'react'
// import { Header } from 'semantic-ui-react'

const HeaderExamplePage = (props) => {
    //  <Header style={{ marginLeft:"5%",marginTop:"1%",marginBottom:"5%"}} as='h1'>{props.heading}</Header> 
    return (<h1 style={{marginBottom:"2%"}}>{props.heading}</h1>);
}

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

import React from "react"

class H5PPlayerComponent extends React.Component {
 
  componentDidMount() {
    console.log('Component did mount')

    window.addEventListener('message', function (event) {
        if(event.data.action === "xAPI"){
            console.log(event.data.statement.result)
        }
    });
  }

  render(){
   return <div style = {{height:"100%", width:"100%"}}> 
    <iframe style = {{height:"100%", width:"100%"}} src='https://desarrollo.geducar.com/api/h5p-player?cid=6419f7566bfcc2ba72cd2f11'></iframe>
   </div> 
  }

}

export default H5PPlayerComponent;
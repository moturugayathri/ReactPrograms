import React from "react";

const SecondComp = (props) => {
    const {name, city, area} = props.user
    console.log(props);

    
   return(
    <section>
     <div>{name}</div>
     <div>{city}</div>
     <div>{area}</div>
     </section>
   )
}

export default SecondComp
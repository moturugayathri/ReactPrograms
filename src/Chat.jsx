
import React , {useState,useEffect} from "react";


const Resize = () => {
    const [screenSize, setScreenSize] = useState({
         width : window.innerWidth,
         height : window.innerHeight,
    });

const UpdateScreenSize = () =>{
    setScreenSize({
      width : window.innerWidth,
      height : window.innerHeight,
    }) ;
    };

    useEffect(() =>{
     
         window.addEventListener('resize', UpdateScreenSize);
         
         return()=> {
            window.removeEventListener('resize', UpdateScreenSize);
         };
        },[]);

        return (
            <div>
                <h1>Screen Size Sample</h1>
                <p>Resize the window to see the screen size:</p>
                <p style={{color:"red"}}> Width: {screenSize.width}</p>
                <p style={{color:"red"}}>height : {screenSize.height}</p>
            </div>
        );

};

export default Resize;
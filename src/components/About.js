import React from "react";

//object desctructuring
// let test = {name: "Doris", lastName:"M"}
// let { name } = test
//output => name has value "Doris"
function About({image="https://via.placeholder.com/215" , about}) {
    return (
        <div>
            <aside>              
                 <img src= {image} alt="blog logo"/>               
                 <p>{about}</p>           
            </aside>
        </div>
    )
}

export default About
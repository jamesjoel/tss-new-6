import { useState } from "react"

let About = ()=>{

    let [a, setA] = useState(true);

    let show = ()=>{
        // setA(y=> y==true ? false : true);
        setA(y=> !y);
    }

    return(

        <div className="container">
            <br />
            <button onClick={show} className="btn btn-dark">Show</button>
            <br />
            <br />
            <div className="row">

                {
                    a==true
                    ?
                    <div className="col-md-4 bg-primary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo iure ipsum cumque hic possimus dolorum? Blanditiis tempore eius assumenda natus enim exercitationem distinctio optio mollitia nemo labore! Atque, nostrum harum?
                    </div>
                    
                    :
                    <div className="col-md-6 bg-danger">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium atque architecto aperiam nesciunt eum similique fugiat velit? Quia sunt exercitationem quis quibusdam aspernatur eaque reprehenderit necessitatibus voluptatibus ullam. Laudantium, nemo?
                    </div>
                }


                
                
            </div>
        </div>
    )
}
export default About

/*

when we change the state, then we have 2 way

    1. setF(value)

    2. setF((a)=>{


            logic

            return value;

        })

*/
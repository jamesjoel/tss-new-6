import { useState } from "react"

let Home = ()=>{

    let [a, setA] = useState("Indore")

    let [x, setX] = useState("table-dark")

    let clickHandler = ()=>{
        setA("Bhopal")
        setX("table-primary")
    }

    return(
        <>
        <h1>Home Page</h1>
        <button className="btn btn-info" onClick={clickHandler}>OK</button>
        <h2>{a}</h2>
        <table className={"table " + x}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Vijay</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Vijay</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Vijay</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Vijay</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Vijay</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Vijay</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}
export default Home
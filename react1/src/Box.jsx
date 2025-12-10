import './Box.css'
let Box = ()=>{

    let x = {
            backgroundColor : "#CDCD10", 
            width : "400px", 
            padding : "20px", 
            fontSize : "20px", 
            borderRadius : "10px"
        }

    return(
        <>
        <div className='box1'>
            <h3>This is BOX</h3>
            <input type="text" />
        </div>
        <p style={x}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo tempora fuga cumque quas omnis dolore voluptatibus, a ratione. Nesciunt ea tempore provident ut temporibus quasi porro iure quaerat reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat harum asperiores, voluptate nostrum quis quisquam voluptatum officiis sunt distinctio. Omnis temporibus rem amet nobis quae sunt obcaecati aliquid magnam porro.</p>
        </>
    )
}
export default Box;
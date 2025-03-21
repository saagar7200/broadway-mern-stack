

export const MapComponent = () =>{
    return(
        <div >
            <ul>
            {
                ['1',"2"].map((item,index) => <li key={index}>{item}</li>)
            }
            </ul>

        </div>
    )
}
function Buttons ({filteredBakery}){
    return(<div className="cont">
        <button className="change" onClick={() => filteredBakery ("macaron")}>Macaron</button>
        <button className="change" onClick={() => filteredBakery ("tart")}>Tart</button>
        <button className="change" onClick={() => filteredBakery ("cheescake")}>Cheescake</button>
    </div>
        
        
    )
}
export default Buttons;
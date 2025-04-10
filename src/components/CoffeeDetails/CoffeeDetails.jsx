const CoffeeDetails = ({select, capWord, handleFormView}) => {
    if (!select) {
        return(
            <div>
                <h1>No Coffee Selected</h1>
            </div>
        )
    }
    
    return (
        
        <div>
            <h1>{select.name}</h1>
            <h2>Region: {select.region}</h2>
            <h2>Year: {select.year}</h2>
            <h2>Roast: {select.roast}</h2>
            <h2>Inventory: {select.quantity}</h2>
            <p><span style={{fontSize: '1.5em', fontWeight: 'bold'}}>Tasting Notes:</span> <span style={{fontSize: "1.25em"}}>{select.tastingnotes.map((note) => capWord(note) + '  ')}</span></p>
            <div>
                <button onClick={() => handleFormView(select)}>Edit Coffee</button>
            </div>
        </div>
        
    )
}

export default CoffeeDetails
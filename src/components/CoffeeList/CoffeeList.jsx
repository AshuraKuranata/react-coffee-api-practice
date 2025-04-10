const CoffeeList = ({coffees, handleSelect, handleFormView, isFormOpen}) => {
    
    return (
        <div>
            <h1>Coffee List</h1>
            {!coffees.length ? 
                ( 
                <>
                    <h2>No Coffee Included</h2>
                    <p>Add more here</p>
                </>  
                ) 
                :
                coffees.map((coffee) => (
                    <div key={coffee._id}>
                        <h2 style={{cursor: 'pointer', color: '#646CFF'}} onClick={() => handleSelect(coffee)}>{coffee.name}</h2>
                    </div>
                ))
            }
            <button onClick={handleFormView}>{isFormOpen ? 'Close Form' : 'Add New Coffee'}</button>
        </div>
    )
}

export default CoffeeList
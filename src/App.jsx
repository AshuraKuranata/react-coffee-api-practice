import { useState, useEffect } from 'react'
import * as coffeeService from './services/coffeeService' // Imports ALL the exportable functions in coffeeService
import './App.css'
import CoffeeList from './components/CoffeeList/CoffeeList'
import CoffeeDetails from'./components/CoffeeDetails/CoffeeDetails'
import CoffeeForm from './components/CoffeeForm/CoffeeForm'

function App() {
  const [coffees, setCoffees] = useState([])
  const [selectcoffee, setSelectCoffee] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

// Does not work as useEffect() cannot be made into an async function
  // useEffect(async () => {
  //   await something;
  // }, []);

// Instead, use this to get around it:
  // useEffect(() => {
  //   const newFunction = async () => { // newFunction defines what you're doing, in this case this is bringing the API data into the state variable
  //     const data = await service(); // 'data' is the variable to hold the items, 'service()' calls on the exported API function in 'services' to indicate what data to take
  //     setStateFunction(data); // sets the state variable with the pulled API data
  //     };
  //   newFunction() // invokes the function to pull the data
  // }, []) // open bracket here invokes the useEffect function once at the load of the page.
  
  function capitalizeWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        const fetchedCoffees = await coffeeService.index();
        if (fetchedCoffees.err) {
          throw new Error(fetchedCoffees.err);
        }
        setCoffees(fetchedCoffees)
      } catch (err) {
        console.log(err)
      }
    };
    fetchCoffee()
  }, [])

  const handleSelect = (coffee) => {
    setSelectCoffee(coffee)
    setIsFormOpen(false)
  }

  const handleAddCoffee = async (formData) => {
    try {
      const newCoffee = await coffeeService.create(formData);
      setCoffees([newCoffee, ...coffees])
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdateCoffee = async (formData, coffeeId) => {
    try {
      const updateCoffee = await coffeeService.update(formData, coffeeId)
      if (updateCoffee.err) {
        throw new Error(updateCoffee.err);
      }
      const updateCoffeeList = coffees.map((coffee) => 
        coffee._id !== updateCoffee._id ? coffee : updateCoffee 
      );
      setCoffees(updateCoffeeList)
      setSelectCoffee(updateCoffee);
      setIsFormOpen(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleFormView = (coffee) => {
    if (!coffee._id) setSelectCoffee(null);
    setIsFormOpen(!isFormOpen);
  }

  return (
    <>
    <h1>John's Coffee Extravaganza</h1>
    <CoffeeList coffees={coffees} handleSelect={handleSelect} handleFormView={handleFormView} isFormOpen={isFormOpen} />
    {isFormOpen ?(
      <CoffeeForm handleAddCoffee={handleAddCoffee} select={selectcoffee} handleUpdateCoffee={handleUpdateCoffee}/>
    ) :
    <CoffeeDetails handleFormView={handleFormView} select={selectcoffee} capWord={capitalizeWord} />
    }
    </>
  )
}

export default App

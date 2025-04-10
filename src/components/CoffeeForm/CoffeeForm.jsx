import { useState } from 'react'

const CoffeeForm = (props) => {
    const initialState = {
        name: '',
        region: '',
        year: '',
        quantity: '',
        roast: '',
        tastingnotes: [],
    }

    const [formData, setFormData] = useState(
        props.select ? props.select : initialState
    )

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value})
    }

    const handleTastingNotes = (notes) => {
        const selected = Array.from(notes.target.selectedOptions, (option) => option.value);
        setFormData({ ...formData, tastingnotes: selected})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (props.select) {
            props.handleUpdateCoffee(formData, props.select._id)
        } else{
        props.handleAddCoffee(formData)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Coffee Name:</label>
                <input
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required pattern='[A-Z][a-zA-Z ]{1,}'
                />
                <label htmlFor='region'>Select Region:</label>
                <select required id='region' name='region' value={formData.region} onChange={handleChange}>
                    <option value='Ethiopia'>Ethiopia</option>
                    <option value='Colombia'>Colombia</option>
                    <option value='Brazil'>Brazil</option>
                    <option value='Kenya'>Kenya</option>
                    <option value='Guatemala'>Guatemala</option>
                    <option value='Costa Rica'>Costa Rica</option>
                    <option value='Yemen'>Yemen</option>
                    <option value='Panama'>Panama</option>
                    <option value='Rwanda'>Rwanda</option>
                    <option value='Tanzania'>Tanzania</option>
                    <option value='Honduras'>Honduras</option>
                    <option value='Peru'>Peru</option>
                    <option value='Indonesia'>Indonesia</option>
                    <option value='Vietnam'>Vietnam</option>
                    <option value='Mexico'>Mexico</option>
                </select>
                <label htmlFor='year'>Year: </label>
                <input
                    id='year'
                    name='year'
                    type='number'
                    value={formData.year}
                    onChange={handleChange}
                    required pattern='\d{1,4}'
                />
                <label htmlFor='quantity'>Inventory on Hand: </label>
                <input
                    id='quantity'
                    name='quantity'
                    type='number'
                    value={formData.quantity}
                    onChange={handleChange}
                    required pattern='\d{1,}'
                />
                <label htmlFor='roast'>Roast Style:</label>
                <select required id='roast' name='roast' value={formData.roast} onChange={handleChange}>
                    <option value='Dark Roast'>Dark Roast</option>
                    <option value='Medium Roast'>Medium Roast</option>
                    <option value='Light Roast'>Light Roast</option>
                </select>
                <label htmlFor='tastingnotes'>Select tasting notes: </label>
                <select multiple size='20' required id='tastingnotes' name='tastingnotes' onChange={handleTastingNotes}>
                    <option value='Chocolatey'>Chocolatey</option>
                    <option value='Nutty'>Nutty</option>
                    <option value='Fruity'>Fruity</option>
                    <option value='Citrusy'>Citrusy</option>
                    <option value='Floral'>Floral</option>
                    <option value='Spicy'>Spicy</option>
                    <option value='Earthy'>Earthy</option>
                    <option value='Sweet'>Sweet</option>
                    <option value='Berry'>Berry</option>
                    <option value='Caramel'>Caramel</option>
                    <option value='Vanilla'>Vanilla</option>
                    <option value='Stone Fruit'>Stone Fruit</option>
                    <option value='Herbal'>Herbal</option>
                    <option value='Winey'>Winey</option>
                    <option value='Smoky'>Smoky</option>
                    <option value='Molasses'>Molasses</option>
                    <option value='Toffee'>Toffee</option>
                    <option value='Tropical Fruit'>Tropical Fruit</option>
                    <option value='Savory'>Savory</option>
                    <option value='Tea-like'>Tea-like</option>
                </select>
                <button type='submit'>{props.select ? 'Update Coffee' : 'Submit New Coffee'}</button>
            </form>
        </div>
    )
}

export default CoffeeForm
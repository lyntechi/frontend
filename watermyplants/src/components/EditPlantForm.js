import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addPlant } from '../actions/plantsActions';

const initialPlantFormValues = {
    nickname: '',
    species: '',
    h2oFrequency: 1,
    imageURL: ''

}

function formattedPlantValues (plant) {
    return {...plant, h2oFrequency:Number(plant.h2oFrequency)}
    
}

function EditPlantForm(props) {

    const [plantFormValues, setPlantFormValues] = useState(initialPlantFormValues)

    const onSubmit = evt => {
        evt.preventDefault()
        props.addPlant(plantFormValues)
        setPlantFormValues(initialPlantFormValues)
    }

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value

        setPlantFormValues({
            ...plantFormValues,
            [name]: value
        })
    }

    return (
        <div>
        <div className='account-form-container'>
            <h2>Edit a plant</h2>
            <form onSubmit={onSubmit} className='new-plant'>

                <label htmlFor='nickname'>
                    <input
                        placeholder="Nickname"
                        value={plantFormValues.nickname}
                        onChange={onChange}
                        name='nickname'
                    />
                </label>
                <label htmlFor='Species'>
                    <input
                        placeholder="Species"
                        value={plantFormValues.species}
                        onChange={onChange}
                        name='species'
                    />
                </label>
                <label htmlFor='watering frequency'>
                    Water every {' '}
                    <input
                        className='number-input'
                        type='number'
                        min='1'
                        value={plantFormValues.h2oFrequency}
                        onChange={onChange}
                        name='h2oFrequency'
                    />
                    {' '} day(s)
                </label>
                <label htmlFor='imageURL'>
                    <input
                        placeholder="Image URL"
                        value={plantFormValues.imageURL}
                        onChange={onChange}
                        name='imageURL'
                    />
                </label>
                <div className="add-cancel-buttons">
                    <button className='add-btn button'>Add</button>
                    <button className='cancel-btn button'>Cancel</button>
                </div>

            </form>
        </div>
        </div>
    )

}

export default connect(null, { addPlant })(EditPlantForm);
import React, { useState } from 'react'
import './NewEvent.css'

function NewEvent(props) {
    const [event, setEvent] = useState({
        _id: '',
        name: '',
        description: '',
        link: '',
        startDate: '',
        endDate: '',
        oneDayOnly: false,
    })

    function submitForm() {
        props.handleSubmit(event)
        setEvent({
            _id: '',
            name: '',
            description: '',
            link: '',
            date: '',
            oneDayOnly: false,
        })
    }

    function handleChange(event) {
        const { name, value } = event.target
        setEvent((prevEvent) => ({
            ...prevEvent,
            [name]: value,
            oneDayOnly: checked,
        }))
    }

    const [popup, popupState] = useState(false)
    const togglePopup = () => {
        popupState(!popup)
    }

    const [checked, setChecked] = React.useState(false)

    const checkedChange = () => {
        setChecked(!checked)
    }

    return (
        <>
            <button className="popupButton" onClick={togglePopup}>
                Add Event
            </button>

            {popup && (
                <div className="popupWindow">
                    <div className="overlay"></div>
                    <div className="popupContent">
                        <button id="popupClose" onClick={togglePopup}>
                            X
                        </button>
                        <h1>New Event</h1>
                        <form className="popupForm">
                            <label htmlFor="taskName">Name: </label>
                            <br></br>
                            <input
                                id="taskName"
                                name="name"
                                onChange={handleChange}
                            />
                            <br></br> <br></br>
                            <label htmlFor="taskDescription">
                                Description:{' '}
                            </label>
                            <br></br>
                            <input
                                id="taskDescription"
                                name="description"
                                onChange={handleChange}
                            />
                            <br></br> <br></br>
                            <label htmlFor="taskLink">Link (Optional): </label>
                            <br></br>
                            <input
                                id="taskLink"
                                name="link"
                                onChange={handleChange}
                            />
                            <br></br> <br></br>
                            <label htmlFor="taskDate">Event Date: </label>
                            <br></br>
                            <input
                                id="taskDate"
                                type="date"
                                name="startDate"
                                onChange={handleChange}
                            />
                            {!checked && (
                                <input
                                    id="taskDate"
                                    type="date"
                                    name="endDate"
                                    onChange={handleChange}
                                />
                            )}
                            <br></br>
                            <label>
                                One Day Only?
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={checkedChange}
                                />
                            </label>
                            <br></br> <br></br>
                            <input
                                type="submit"
                                value="Submit"
                                id="submitform"
                                onClick={submitForm}
                            />
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default NewEvent
import React from 'react'

const RemoveStudent = () => {

    function handleRemoveStudent()  {

    }
    return (
        <div>
            <h2 className='popup-heading'>Remove a Student</h2>

            <form className='add-form' onSubmit={handleRemoveStudent}>
                <input type="text" placeholder="Roll no" required />

                <button type="submit" className="btn remove">Remove Student</button>
            </form>

        </div>
    )
}

export default RemoveStudent
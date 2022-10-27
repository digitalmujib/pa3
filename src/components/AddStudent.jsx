import React from 'react'

const AddStudent = () => {

    function handleAddStudent(e) {
        e.preventDefault();
        alert("added")
    }

    return (
        <div>
            <h2 className='popup-heading'>Add a new Student</h2>

            <form className='add-form' onSubmit={handleAddStudent}>
                <input type="text" placeholder="Roll no"  required />
                <input type="text" placeholder="Full name" required />
                <input type="email" placeholder="Email" required />

                <button type="submit" className="btn add">Add Student</button>
            </form>

        </div>
    )
}

export default AddStudent
import React from 'react';


function CategoryForm({ handleSubmit, value, setValue, title }) {
    return (
        <form onSubmit={handleSubmit}>
            {/* Category Name Input */}
            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    {title} Category
                </label>
                <input
                    type="text"
                    className="form-control custom-input"
                    id="category"
                    value={value}
                    placeholder="Enter Category Name"
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-dark">
                Submit
            </button>
        </form>
    );
}

export default CategoryForm;

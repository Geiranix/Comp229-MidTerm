
import React, { useState } from 'react';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        quantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(product, null, 2));
        console.log(product);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label> Name</label>
                <input type="text" name="name" value={product.name} onChange={handleChange} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" name="description" value={product.description} onChange={handleChange} />
            </div>
            <div>
                <label>Category</label>
                <input type="number" name="category" value={product.category} onChange={handleChange} />
            </div>
            <div>
                <label>Quantity</label>
                <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" name="price" value={product.price} onChange={handleChange} />
            </div>
           
            <button type="submit">Submit</button>
            <button type="cancel">Cancel</button>
            
        </form>
    );
};

export default AddProduct;

import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'

function AddProduct() {
  //  declaration of variables
  let navigate = useNavigate();
  const [data, setData] = useState({
    action:"add",
    sku:"",
    name:"",
    price:"",
    size:"",
    height:"",
    width:"",
    length:"",
    weight:""
  })

  //  handling changing data in from and allocating them to correct places in an object
  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value});
  }

  // sending data to php
  function handleSubmit(event){
    event.preventDefault();
    axios.post("api/index.php", data);
    window.setTimeout(navigate, 100, "/");
  }

  // handling switching product type and resetting data
  function handleSwitchOption() {
    const option = document.getElementById("productType").value;
    switch (option) {
      case "DVD":
        document.getElementById("DVD").style.visibility = "visible";
        document.getElementById("Book").style.visibility = "hidden";
        document.getElementById("FurnitureH").style.visibility = "hidden";
        document.getElementById("FurnitureW").style.visibility = "hidden";
        document.getElementById("FurnitureL").style.visibility = "hidden";
        data.height = "";
        data.width = "";
        data.length = "";
        data.weight = "";
        document.getElementById("height").value = data.height;
        document.getElementById("width").value = data.width;
        document.getElementById("length").value = data.length;
        document.getElementById("weight").value = data.weight;
        break;
      case "Book":
        document.getElementById("DVD").style.visibility = "hidden";
        document.getElementById("Book").style.visibility = "visible";
        document.getElementById("FurnitureH").style.visibility = "hidden";
        document.getElementById("FurnitureW").style.visibility = "hidden";
        document.getElementById("FurnitureL").style.visibility = "hidden";
        data.height = "";
        data.width = "";
        data.length = "";
        data.size = "";
        document.getElementById("size").value = data.size;
        document.getElementById("height").value = data.height;
        document.getElementById("width").value = data.width;
        document.getElementById("length").value = data.length;
        break;
      case "Furniture":
        document.getElementById("DVD").style.visibility = "hidden";
        document.getElementById("Book").style.visibility = "hidden";
        document.getElementById("FurnitureH").style.visibility = "visible";
        document.getElementById("FurnitureW").style.visibility = "visible";
        document.getElementById("FurnitureL").style.visibility = "visible";
        data.size = "";
        data.weight = "";
        document.getElementById("size").value = data.size;
        document.getElementById("weight").value = data.weight;
        break;
      default:
        break;
    }
  }

  //  generating add product page with form
  return (
    <>
      <main>
        <h2>Product Add</h2>
        <form id="product_form" onSubmit={handleSubmit}>
          <div className="form-btn">
            <button type="submit" className="custom-btn">Save</button>
            <Link to="/">
              <button type="button" className="custom-btn">Cancel</button>
            </Link> 
          </div>
          <div className="form-body"/>
          <table>
            <tbody>
              <tr>
                <td><label>SKU</label></td>
                <td><input type="text" id="sku" name="sku" onChange={handleChange} value={data.sku}/></td>
              </tr>
              <tr>
                <td><label>Name</label></td>
                <td><input type="text" id="name" name="name" onChange={handleChange} value={data.name}/></td>
              </tr>
              <tr>
                <td><label>Price ($)</label></td>
                <td><input type="text" id="price"  name="price" onChange={handleChange} value={data.price}/></td>
              </tr>
              <tr>
                <td><label>Type Switcher</label></td>
                <td className="center-input">
                  <select id="productType" onChange={handleSwitchOption} defaultValue={'DEFAULT'} required>
                    <option value="DEFAULT" disabled></option>
                    <option value="DVD">DVD</option>
                    <option value="Book">Book</option>
                    <option value="Furniture">Furniture</option>
                  </select>
                </td>
              </tr>
              <tr id="DVD">
                <td><label>Size (MB)</label></td>
                <td><input type="text" id="size" name="size" onChange={handleChange} value={data.size}/></td>
              </tr>
              <tr id="FurnitureH">
                <td><label>Height (CM)</label></td>
                <td><input type="text" id="height" name="height" onChange={handleChange} value={data.height}/></td>
              </tr>
              <tr id="FurnitureW">
                <td><label>Width (CM)</label></td>
                <td><input type="text" id="width" name="width" onChange={handleChange} value={data.width}/></td>
              </tr>
              <tr id="FurnitureL">
                <td><label>Length (CM)</label></td>
                <td><input type="text" id="length" name="length" onChange={handleChange} value={data.length}/></td>
              </tr>
              <tr id="Book">
                <td><label>Weight (KG)</label></td>
                <td><input type="text" id="weight" name="weight" onChange={handleChange} value={data.weight}/></td>
              </tr>
            </tbody>
          </table>
        </form>
      </main>
      <footer>
        <h6>&copy; 2022 Dominik Molenda</h6>
      </footer>
    </>
  );
}

export default AddProduct;

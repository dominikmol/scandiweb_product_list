import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'

function Home() {
  //  declaration of variables
  let navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [data, setData] = useState({
    action:"delete"
  })
  let arr = [];

  //  fetching data about items from database
  useEffect(() => {
    fetch("api/index.php?action=getProducts")
    .then(response => {
      return response.json();
    })
    .then(
      result => {
        setItems(result)
      }
    ).catch(error => {
      console.log("There was a problem with reading data: "+error);
    });
  }, [])

  //  adding items to delete list and handling unchecking of items
  const handleChange = (event) => {
    const val = JSON.stringify(event.target.value);
    if (!arr.includes(val)) {
      arr.push(val);
    } else {
      arr.splice(arr.indexOf(val), 1);
    }
    const ob = {
      sku: arr
    }
    setData(Object.assign(data, ob))
  }

  //  sending data to php
  function handleSubmit(event) {
    event.preventDefault();
    
    if (data.sku != null) {
      if (data.sku.length > 0) {
        axios.get("api/index.php?data="+JSON.stringify(data));
        setTimeout(navigate, 200, 0);
      }
    }
  }

  //  generating home page with form for mass delete
  return (
    <>
      <main>
        <h2>Product List</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-btn">
            <Link to="/add-product">
              <button type="button" className="custom-btn">ADD</button>
            </Link>
            <button type="submit" id="delete-product-btn" className="custom-btn">MASS DELETE</button>
          </div>
          <div className="form-body"/>
          {
          items.map(item=> {
            let prodcutatribut;
            if (item.weight != null) {
              prodcutatribut = "Weight: "+item.weight+"KG";
            } else if (item.size != null) {
              prodcutatribut = "Size: "+item.size+" MB";
            } else if (item.dimensions != null) {
              prodcutatribut = "Dimensions: "+item.dimensions;
            }
            return (
            <div className="item-container" key={item.sku}>
              <input type="checkbox" className="delete-checkbox" name="SKU" value={item.sku} onChange={handleChange}/>
              <p>{item.sku}</p>
              <p>{item.name}</p>
              <p>{item.price} $</p>
              <p>{prodcutatribut}</p>
            </div>
              )
            })
          }
        </form>
      </main>
      <footer>
        <h6>&copy; 2022 Dominik Molenda</h6>
      </footer>
    </>
  );
}

export default Home;

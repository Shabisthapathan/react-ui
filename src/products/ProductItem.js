// const CartButton=({product,onAddClick})=>product.inStock?
//         <button disabled={!product.inStock} className='btn btn-danger btn-sm' onClick={onAddClick}>
//             Add to Cart
//         <i className="fa fa-shopping-cart"></i>
//         </button>:null

import IfElse from "../utils/IfElse";
import ShouldRender from "../utils/ShouldRender";

const CartButton=({product,onAddClick})=>product.inStock &&
        <button disabled={!product.inStock} className='btn btn-danger btn-sm' onClick={onAddClick}>
            Add to Cart
        <i className="fa fa-shopping-cart"></i>
        </button>



const ProductItem=({product , onAdd})=>{

    const onAddClick=()=>{
        onAdd(product);
    }
 
  return   <div className="col-md-3">
    <div style={{margin:'10px'}}  className="card">
        <div  className="card-header">
        <span className="card-title" >{product.brand} {product.model}</span>
        </div>
          <img className="card-img-top" src={product.img}/>
          <div className="card-body">
                <hr/>
              <b>${product.price}</b>
              <hr/>
              <h6>
                  <label>In Stock</label>
                  <input disabled type="checkbox" checked={product.inStock}/>
              </h6>
              </div>
                 
              <div className="card-footer">
                  <IfElse cond={product.inStock}>
                  <button  className='btn btn-danger btn-sm' onClick={onAddClick}>
            Add to Cart
        <i className="fa fa-shopping-cart"></i>
        </button>
        <button  className='btn btn-danger btn-sm' onClick={onAddClick}>
           Notify
        <i className="fa fa-bell"></i>
        </button>
        </IfElse>

                  </div>
                 
           </div>
        </div>
}

export default ProductItem;
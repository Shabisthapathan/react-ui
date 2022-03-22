


const ProductList=()=>{
   const products =[
       {id: 1, brand:'Apple', model:'Iphone13', price:120000},
       {id: 2, brand:'Oppo', model:'Reno 7', price:35000},
       {id: 3, brand:'Sumsung', model:'S22 Ultra', price:50000}
   ];

//    const headstyle ={backgroundColor:'red'}

   return <div>
       <table className="table table-border , table-hover">
           <thead >
               <tr>
                <th>Id</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
               </tr>
           </thead>
           <tbody>
               {products.map(product=>{
                  return  <div><tr>
                       <td>{product.id}</td>
                       <td>{product.brand}</td>
                       <td>{product.model}</td>
                       <td>{product.price}</td>
                   </tr>
                   </div>
                   
               })}
           </tbody>
       </table>
   </div>
}

export default ProductList;
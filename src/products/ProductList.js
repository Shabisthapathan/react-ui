import ProductItem from "./ProductItem";



const ProductList=()=>{

    const cart =[];

  const onAddCartClick=(product)=>{
      cart.push(product)
console.log(cart);
  }

   const products =[
       {id: 1, brand:'Apple', model:'Iphone13', inStock:true, price:120000, img:'https://images.macrumors.com/t/mGp5rWHSm5J_GE7SlhoQ5-ns7rw=/1600x0/article-new/2021/09/iphone-13-pro-sierra-blue-the-sun.jpeg'},
       {id: 2, brand:'Oppo', model:'Reno 7',inStock:true, price:35000, img:'https://th.bing.com/th/id/R.54035130f74bb84dbc5a53e53cf06016?rik=vOBCJtPMVhbeuw&riu=http%3a%2f%2f149367133.v2.pressablecdn.com%2fwp-content%2fuploads%2f2019%2f11%2fHer-GadgetMatch-20191119-OPPO-Reno-2F-Nebula-Green.jpg&ehk=ItU5uApvLdCC5jrzxpts6lXGdjugXKr09q59f%2bkmIR0%3d&risl=&pid=ImgRaw&r=0'},
       {id: 3, brand:'Sumsung', model:'S22 Ultra',inStock:false, price:50000, img:'https://www.gizmochina.com/wp-content/uploads/2021/06/Samsung-Galaxy-S22-Ultra-6.jpg'}
   ];

//    const headstyle ={backgroundColor:'red'}

   return <div>
       {products.map(item=><ProductItem key={item.id} product={item} onAdd={onAddCartClick}/>
       )}
       </div>
}
                  
export default ProductList;
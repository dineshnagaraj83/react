import "./products.scss"

const Product = (props) => {
    const {data}= props
  
  return (
    <div className='products'>
      <img className='image' src={data.image}/>
      <h4>{data.title} </h4>
      {/**<span>Rating:{data.rating.rate}</span>*/}
      <h5>Price:{Math.round(data.price)}</h5>
    </div>
  )
}

export default Product
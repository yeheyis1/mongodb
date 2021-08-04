import React from 'react'
import Card from '../body/card'
import Kids from '../Home/kids/kids'
 import  Men from '../Home/man/man'
  import Woman from '../Home/women/women'
  import ReactPlayer from 'react-player'



class Body extends React.Component {


  render(){
    return(
<div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX0mpDdGihm69krvxEKEvi8m9LKR9Jjo5PDSSwEiVbjWAsiF6JxWSGy-FE7DJSxWq77qE&usqp=CAU" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.zero20kids.com/media/images/girls-designer-deux-par-deux-banner-2020-50-off-sale-2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/1592/0041/collections/kids-collection-banners._boys_T-shirts_1903x445.jpg?v=1617013249" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

 <div>
 <div class="container">
  <div class="row">
    <div class="col-sm">
     <Kids/>
    </div>
    
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm">
     <Men/>
    </div>
    
  </div>
</div>

   </div>
   <div class="container">
  <div class="row">
    <div class="col-sm">
     <Woman/>
    </div>
    
  </div>
</div>
<div>
<ReactPlayer url='https://www.youtube.com/watch?v=NrmMk1Myrxc' width="1000" />

</div>

</div>
    )
  

  }

}
export default Body;
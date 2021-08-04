import React from 'react'
import W1 from '../women/w1'
import W2 from '../women/w2'
import W3 from '../women/w3'



const women = () => {
  return (

    <div>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <W1 />
          </div>
          <div class="col-sm">
            <W2 />
          </div>
          <div class="col-sm">
            <W3 />
          </div>
        </div>
      </div>


    </div>
  )
}
export default women
import React from 'react'
import Kcard1 from '../kids/kcard1'
import Kcard2 from '../kids/kcard2'
import Kcard3 from '../kids/kcard3'



const kids =()=> {

    return(


        <div>
        
            <div class="container">
  <div class="row">
    <div class="col-sm">
      <Kcard1/>
    </div>
    <div class="col-sm">
      <Kcard2/>
    </div>
    <div class="col-sm">
      <Kcard3/>
    </div>
  </div>
</div>

        </div>

    )
}
export default kids
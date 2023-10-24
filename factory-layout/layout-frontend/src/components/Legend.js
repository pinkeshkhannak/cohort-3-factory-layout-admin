

import './Legend.css';

function Legend() {



return (
   
              <fieldset className='legend'>
                <legend>Legend:</legend>
                
                <div>
                  <div>
                    <div className='open '></div>
                    <p>Open</p>
                  </div>

                  <div>
                    <div className='wall '></div>
                    <p >Wall</p>
                  </div>

                  <div>
                    <div className='robot '></div>
                    <p>Robot</p>
                  </div>

                  <div>
                    <div className='end '></div>
                    <p>End</p>
                  </div>

                </div>
              </fieldset>
               
)
}
export default Legend;
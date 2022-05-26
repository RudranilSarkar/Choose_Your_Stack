import Homepage from './Homepage.js'
import Dbutton from './Dbutton.js'
import "./styles.css"
function Form(){
    return(
    <div>
        <div>
        <label htmlFor="textbox">Choose Your Stack</label>
        </div>
            <div>
                <label htmlFor="textbox">front end port            </label>
                <input type="text" name="f_port" id="f_port"  placeholder="Your Details.."/>
            </div>
        <div>
                <label htmlFor="textbox">backe end port            </label>
                <input type="text" name="detail" id="detail"  placeholder="Your Details.."/>
        </div>
            <Homepage />
        <Dbutton/>
    </div>
    )
}
export default Form;
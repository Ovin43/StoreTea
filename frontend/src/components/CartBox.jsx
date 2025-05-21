import { BaggageClaim, Minus, Plus, Save, Trash2 } from "lucide-react"

const CartBox=()=>{

    return(
        <>
            <section className="cart_box">
                <div className="cart_box_image">
                    <img src="img/gojo.jpg" className="cart_box_image_box"/>
                </div>
                <div className="cart_box_name">
                    <h1>Black Tea</h1>
                </div>
                <div className="cart_box_quaitity">
                    <h1>Quantity</h1>
                    <p>You can Increase or Decrease the Quantity</p>
                    <div className="cart_box_quantity_num">8</div>
                    <div className="cart_box_quantity_button">
                        <button><Minus/></button>
                        <button><Plus/></button>
                    </div>
                </div>
                <div className="cart_box_cost">
                    <h1>Total</h1>
                    <div className="cart_box_cost_quantity">8x200</div>
                    <div className="cart_box_cost_total">Rs 200</div>
                </div>
                <div className="cart_box_button">
                   <button className="cart_box_button_trash"><Trash2 stroke="white"/></button>
                   <button className="cart_box_button_save"><Save/></button>
                   <button className="cart_box_button_bag"><BaggageClaim/></button>

                </div>
            </section> 

        </>
    )
}

export default CartBox
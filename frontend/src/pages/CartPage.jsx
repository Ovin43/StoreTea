import CartBox from "../components/cartbox"


const CartPage=()=>{
    return(
        <>
        <section className="cart_page">  
            <div className="cart_page_box">
                <div className="cart_page_box_cart">Cart</div>
                <div className="cart_page_box_p">your caart</div>
                <CartBox/>
            </div>
        </section>
        </>
    )

}

export default CartPage
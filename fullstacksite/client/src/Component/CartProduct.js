import React, {Component} from 'react';
import cart from "../views/ShoppingCart.module.css";
import detailPage from "../views/DetailPage.module.css";
import Button from "@material-ui/core/Button";

class CartProduct extends Component {
    state = {
        count: this.props.product.count
    }

    clearCart = () => {
        localStorage.clear();
    }

    decrement = () => {
        this.setState({
            count: this.state.count<=0? 0 : this.state.count-1
        })
    }

    increment = () => {
        this.setState({
            count: this.state.count+1
        })
    }



    updateCart = () => {
        let arr = JSON.parse(localStorage.getItem('myCart'));
        arr[this.props.index].count = this.state.count;
        localStorage.setItem('myCart', JSON.stringify(arr));
    }

    render() {
        const {picture, name, size, price} = this.props.product;
        return (
            <div className={cart.product}>
                <div className={cart.left}>
                    <div className={cart.picContainer}>
                        <img className={cart.pic} src={`assets/${picture}`} />
                    </div>
                </div>
                <div className={cart.text}>
                    <div className={cart.labels}>
                        <div>Name:&nbsp;</div>
                        <div>
                            {name}
                        </div>
                    </div>
                    <div>
                        Size: {size}
                    </div>
                    <div>
                        Price: {`£ ${price}`}
                    </div>
                    <div className={detailPage.amountbox}>
                        <button className={detailPage.incrementButton} id="decrement" onClick={this.decrement}>-</button>
                        <input className={detailPage.amount} type="number" value={this.state.count} readOnly={true}/>
                        <button className={detailPage.incrementButton} id="increment" onClick={this.increment}>+</button>
                    </div>
                    <div className={cart.link}>
                        <Button className={cart.update} variant="outlined"
                                style={{padding: '0', fontSize: '14px', backgroundColor: 'transparent',
                                    color: 'tomato', textTransform: 'inherit', borderColor: 'tomato'}}
                                onClick={this.updateCart}>
                            Update cart
                        </Button>
                        <button className={cart.remove} onClick={() => this.props.onRemove(this.props.index)}>
                            Remove item
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartProduct;
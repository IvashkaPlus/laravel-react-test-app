import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Main extends Component {
    constructor() {

        super();
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        fetch('/api/products')
            .then(response => {
                return response.json();
            })
            .then(products => {
                this.setState({ products });
            });
    }

    renderProducts() {
        return this.state.products.map(product => {
            return (
                <li key={product.id} >
                    { product.title }
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <ul>
                    { this.renderProducts() }
                </ul>
            </div>

        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}

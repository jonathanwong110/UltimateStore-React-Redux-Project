import React from 'react'

class ProductSearch extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
        searchEntry: '',
        loading: false
        }
    }

    handleChange = (e) => {
        this.setState({
            searchEntry: e.target.value.toLowerCase(), loading: true
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getProducts(this.state.searchEntry)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input 
                    type="text" 
                    name="search"
                    value={this.state.searchEntry}
                    placeholder="Search for a Product" 
                    onChange={e => this.handleChange(e)}/> 
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default ProductSearch
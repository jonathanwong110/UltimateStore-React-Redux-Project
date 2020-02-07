import React from 'react'

export default function SearchProduct(props) {

    handleChange = (e) => {
        this.setState({
            searchEntry: e.target.value.toLowerCase(), loading: true
        })
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        const searchQuery = this.state.searchEntry
        this.setState({
          searchQuery
        })
      }

    return (
        <div className="searchForm">
            <form onSubmit={e => this.handleSubmit(e)}>
                <input 
                type="text" 
                name="search"
                value={this.state.searchEntry}
                placeholder="Search for a Product" 
                onChange={e => this.handleChange(e)}/> 
                <button type="submit" onClick={e => this.handleSubmit(e)}>Search</button>
            </form>
        </div> 
  );
}

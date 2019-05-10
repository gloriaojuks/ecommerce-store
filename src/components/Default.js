import React, { Component } from 'react'

export class Default extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title text-upper pt-5">
                    <h1 className="display-3">404</h1>
                    <h1>error</h1>
                    <h1>page not found</h1>
                    <h3>the requested URL <span style={{ textDecoration:"underline", color:"#862323"}} className="text-dander">{this.props.location.pathname}</span>{" "} was not found</h3>
              </div>
        </div>
      </div>
    )
  }
}

export default Default

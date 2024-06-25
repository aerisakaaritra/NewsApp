import React, { Component } from 'react'
import load from './load.gif'

export class Spinner extends Component {
  render() {
    return (
      // <div class="spinner-border text-info text-center" role="status">
      //   <span class="visually-hidden">Loading...</span>
      // </div>
      <div className='text-center'>
        <img src={load} alt="loading.." />
      </div>
    )
  }
}

export default Spinner

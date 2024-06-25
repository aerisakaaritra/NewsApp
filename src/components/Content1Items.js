import React, { Component } from 'react'

export class Content1Items extends Component {
  render() {
    let {title, description, ContentImage, NewsUrl, time, Source} = this.props;

    //in case is this function requires
    // onmouseenter = {myFunction()}
    // const myFunction = ()=>{
    //   console.log('mouse is on the read more button')
    // }
    const myFunction = ()=>{
        console.log('mouse is on the read more button')
        
      }

    return (
      <div>
        <div className="card" >
            <img src={!ContentImage?'https://nnroad.com/wp-content/uploads/2021/04/top-view-office-desk-with-laptop-growth-chart.jpg':ContentImage} className="card-img-top" alt="..."/>
            <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{zindex:'1', left: '85%'}}>
              {Source}
              <span className="visually-hidden"></span>
            </span>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted my-4">{new Date(time).toGMTString()}</small></p>
                <a href={NewsUrl} target='_blank' rel='noreferrer' id='readmore' onMouseEnter = {myFunction} className="btn btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Content1Items

// new Time(time).toGMTString()
// style component for displaying chart items (in case if requires)
// style={{width: "18rem"}}
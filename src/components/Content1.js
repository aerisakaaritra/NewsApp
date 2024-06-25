import React, { Component } from 'react'
import Content1Items from './Content1Items'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export class Content1 extends Component {
// essential components used either or ways

  // https://newsapi.org/v2/top-headlines?country='us'&category='sports'&apiKey=27fbd1ed2972434cacbdc55be1d3f32b (the raw api key in case requires)

  // !(this.state.loading) && (used before the map element) 

  // Setting pd props in class based programming
  // hence also called Class based props

  Capitalizer = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props){
    super(props);
    console.log('this is a super constructor')
    this.state = {
      Myarticles: [],
      loading: false,
      page: 1,
      total:  0
    }
    document.title = `${this.Capitalizer(this.props.category)} - EatYourOreo`
  }

  //an applied method for navigating to next/prev pages rather than 
  // writing a seperate method for each
  async UpdateNews(){
    this.props.changeProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseddata = await data.json()
    this.props.changeProgress(50)
    console.log(parseddata)
    this.setState({
      Myarticles: parseddata.articles,
      total: parseddata.totalResults,
      loading: false
    })
    this.props.changeProgress(100)
  }

  async componentDidMount(){
    this.props.changeProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseddata = await data.json()
    this.props.changeProgress(50)
    console.log(parseddata)
    this.setState({
      Myarticles: parseddata.articles,
      total: parseddata.totalResults,
      loading: false
    })
    // ooptional method rather than writing the while scum.
    // this.UpdateNews()
    this.props.changeProgress(100)
  }

// package installed to create infinite scroll
// (npm i react-infinite-scroll-component)

  //Here what I understood is we are totally working inside the class
  // so the State is been implied through the constructor (class based method)



    // &pageSize=${this.props.pageSize

  HandlePrevClick = async()=>{
    console.log('Prev is clicked')



    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27fbd1ed2972434cacbdc55be1d3f32b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parseddata = await data.json()
    // console.log(parseddata)
    // this.setState({
    //   page: this.state.page-1,
    //   Myarticles: parseddata.articles,
    //   loading: false
    // })

    this.setState({
      page: this.state.page - 1
    })
    this.UpdateNews()
  }


  HandleNextClick = async()=>{
    console.log('Next is clicked')

    // if(!(this.state.page + 1 > Math.ceil(this.state.total/this.props.pageSize))){
    //   console.log('pages has reached its limit')
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27fbd1ed2972434cacbdc55be1d3f32b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true})
    //   let data = await fetch(url);
    //   let parseddata = await data.json()
    //   console.log(parseddata)
    //   this.setState({
    //     page: this.state.page+1,
    //     Myarticles: parseddata.articles,
    //     loading: false
    //   })  
    // }

    this.setState({
      page: this.state.page + 1
    })
    this.UpdateNews()
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      page: this.state.page + 1
    })
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parseddata = await data.json()
    console.log(parseddata)
    this.setState({
      Myarticles: this.state.Myarticles.concat(parseddata.articles),
      total: parseddata.totalResults,
      loading: false
    })
  }

  render() {
    return (
      <>
        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll
            dataLength={this.state.Myarticles.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={this.state.loading ? <Spinner/> : null}
            
          >       
           
        <div className="container my-4">
        <div className="row">
          { this.state.Myarticles.map((element)=>{
            return  <div className="col-md-3 my-5" key={element.url}>
              <Content1Items title = {element.title?element.title.slice(0, 92):""} description = {element.description?element.description.slice(0, 141):""} ContentImage = {element.urlToImage} NewsUrl = {element.url} time = {element.publishedAt} Source = {element.source.name}/>
            </div>
          })}
          </div>
          </div>

          </InfiniteScroll>
          {/* buttons for next page(in case requires) */}
          <div className='container my-4 d-flex justify-content-between'>
            {/* <button type="button" disabled={this.state.page<=1} onClick= {this.HandlePrevClick} className="btn btn-primary">&laquo; Prev</button> */}
            {/* <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.total/this.props.pageSize)} onClick= {this.HandleNextClick} className="btn btn-primary">Next &raquo;</button> */}
          </div>

       
         <hr />
      </>   
    )
  }
}

export default Content1

import React,{Component} from 'react';
import Seeker from './components/Seeker';
import Result from './components/Result';
import { async } from 'q';
import Spinner from './components/Spinner';

export default class App extends Component {

  state={
    search:'',
    images: [],
    page:'',
    nPages:'',
    load: false
  }

  checkApi = async () =>{
    const term = this.state.search;
    const resultsPerPage = 5;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=12398520-5c0a16d8185df5a3121f20ee9&q=${term}&per_page=${resultsPerPage}&page=${page}`;

    await fetch(url)
    .then(apiAnswer => {
      this.setState({
        load:true
      })
      return apiAnswer.json();
    })
    .then(result => {
      //console.log(result);
      const nPages = Math.ceil(result.totalHits / resultsPerPage);
      //console.log(nPages);
      this.setState({
        images: result.hits, 
        load: false,
        nPages: nPages
      })
    })
  }

  getSearch = (dataSearch) =>{
    this.setState({
      search: dataSearch,
      page: 1
    },() => {
      this.checkApi();
    })
  }

  previousPage = () =>{
    let page = this.state.page;

    if(page === 1) return null;
    page--;
    this.setState({
      page
    },() => {
      this.checkApi();
    });
    //console.log('<---'+page);
  }

  nextPage = () =>{
    let page = this.state.page;
    let nPages = this.state.nPages;
    if(page === nPages) return null;
    
    page++;
    this.setState({
      page
    },() =>{
      this.checkApi();
    });
    //console.log('--->'+page);
  }

    render() {
      const loading = this.state.load; 
      let result;
      if(loading){
        result = <Spinner/>
      }else{
        result = <Result
                    images={this.state.images} 
                    previousPage={this.previousPage} 
                    nextPage={this.nextPage}
                  />
      }

        return (
            <div className="app container">
                <div className="jumbotron">
                  <p className="lead text-center">Image search</p>
                  <Seeker
                    getSearch={this.getSearch}
                  />
                </div>
                <div className="row justify-content-center">
                  {result}
                </div>

            </div>
        );
    }
}

import React,{Component} from 'react';

export default class Seeker extends Component {

    searchDataRef = React.createRef();

    getData = (e) =>{
        e.preventDefault();

        const searchData = this.searchDataRef.current.value;
        this.props.getSearch(searchData);
    }

    render() {
        return (
            <form onSubmit={this.getData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchDataRef} className="form-control form-control-lg" type="text" placeholder="Search your image, example: Futbol"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Search..."/>
                    </div>
                </div>
            </form>
        );
    }
}
import React,{Component} from 'react';
import ImageCard from './ImageCard';
import Navigation from './Navigation';

export default class Result extends Component {

    showImages = () =>{
        const images = this.props.images;
        if(images.length === 0) return null;
        
        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {images.map(image => (
                        <ImageCard
                            image={image}
                            key ={image.id}
                        />
                    ))}
                </div>
                <Navigation
                    previousPage={this.props.previousPage} 
                    nextPage={this.props.nextPage}
                />
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
        );
    }
}
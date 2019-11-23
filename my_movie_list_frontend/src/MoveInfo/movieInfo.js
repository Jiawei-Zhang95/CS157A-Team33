import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBCard,MDBCardTitle, MDBCardText, MDBCardBody, MDBBtnToolbar ,MDBInput } from 'mdbreact';
import './movieInfo.css';

class MovieInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            content: [],
            tvSeries: [],
            movies: [],
        }
    }

    componentWillMount(){
        this.getContentUnionMovie();
        this.getContentUnionTvSeries();
    }

    getContentUnionMovie = async _=>{
        await fetch(`http://localhost:4040/getContentUnionMovie?contentname=${this.props.location.state.contentname}&releaseyear=${this.props.location.state.releaseyear}`)
        .then(res => res.json())
        .then(res => {
            this.setState({movies: res.data});
        })
        .catch(err => console.error(err));
        console.log(this.state.movies);
    };

    getContentUnionTvSeries = async _=>{
        await fetch(`http://localhost:4040/getContentUnionTvSeries?contentname=${this.props.location.state.contentname}&releaseyear=${this.props.location.state.releaseyear}`)
        .then(res => res.json())
        .then(res => {
            this.setState({ tvSeries: res.data});
        })
        .catch(err => console.error(err));
        console.log(this.state.tvseries);
    };


    renderMovie = ({
        contentname,
        releaseyear,
        contentgenre,
        studioname,
        poster,
        movie_length,
        description
       
    }) => {
        return (
            
            <div style={{height:"100vh",backgroundImage: `url(${poster})`, 
            WebkitBackgroundSize: "cover", MozBackgroundSize: "cover" , backgroundBlendMode: "luminosity"}}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBCard style={{background: "rgba(-1, -1, -1, 0.8)", marginLeft: "10rem", marginRight: "5rem",
                                marginTop: "30px", width: "150%", height: "90vh", position:"absolute"}}>
                                <MDBCardBody >
                                    <div className="col">
                                        <img className="card-img" src={poster} style={{width: "19rem", height: "27rem",
                                            marginTop: "5rem", position: "absolute"}} >
                                        </img>
                                        <MDBCard style={{background: "rgba(100, 100, 100, 0.9)", float:"center",
                                            marginLeft: "21rem", marginRight: "5rem", marginTop: "1.5rem", width: "28rem", height: "35rem", position:"absolute"}}>
                                            <MDBCardTitle style={{textAlign: "center", marginTop: "1rem",fontWeight:"bold", fontFamily: 'Open Sans', color:"White"}}>
                                                    {contentname} ({releaseyear})
                                            </MDBCardTitle>
                                            <MDBCardTitle style={{textAlign: "left", marginLeft: "1rem", fontFamily: 'Open Sans', color:"LightSeaGreen"}}>   
                                                
                                                <MDBCardBody style={{color: "White", fontSize: "15px"}}>
                                                     {releaseyear}
                                                </MDBCardBody>
                                            </MDBCardTitle>
                                        </MDBCard>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }




    render(){
        if(this.state.tvSeries[0] === undefined)
        {
            console.log(this.state.movies)
            return <div>
            {this.state.movies.map(this.renderMovie)}
            </div>
        }
        else{
            return <div>
            {this.state.tvseries.map(this.renderTvSeries)}
            </div>
        }
     
    }
}
export default MovieInfo;
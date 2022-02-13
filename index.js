console.log("hi");


class Navigationbar extends React.Component{
    render(){
        let name ="Saran Raj";
        return(
           <div className="Nav-bar">
                <h1>Hello {name}</h1>
            <input type="text"/>
            <button>Search</button>
           </div>
        );
    }
}
class Gallery extends React.Component{
    render(){
        return(
            <div className="Gallery">
                   <img src="https://render.fineartamerica.com/images/rendered/search/print/5.5/8/break/images/artworkimages/medium/1/aspen-sunset-over-bear-lake-mike-berenson.jpg"/>
                   <img src="https://render.fineartamerica.com/images/images-new-artwork/images-medium-5/meet-the-beetles-eric-fan.jpg"/>
                   <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/elk-follow-amy-hamilton.jpg"/>
                   <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/the-grace-of-wild-things-dustin-lefevre.jpg"/>
                   <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/eagle-falls-emerald-bay-lake-tahoe-sunrise-first-light-scott-mcguire.jpg"/>
                   <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/charleston-sc-edisto-island-botany-bay-road-dave-allen.jpg"/>
                   <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/sea-turtle-in-coral-hawaii-m-sweet.jpg"/>
                   <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/ode-to-spring-steve-goad.jpg"/>
                   <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/leaves-in-dusty-blue-priska-wettstein.jpg"/>
                   <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/tree-fire-darren-white.jpg"/>
                
            </div>
        );
    }
}
class App extends React.Component{
    render(){
        return(
            <div>
            <Navigationbar/>
            <Gallery/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
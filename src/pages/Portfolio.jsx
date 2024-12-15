import Project from '../components/Project'
import gamerproject from '../assets/gamerbud.jpeg'
import dmsanddms from '../assets/dmsanddms.jpeg'
import catsanddogs from '../assets/Rainingcatsanddogs.jpeg'
import '../assets/About.css'

const Portfolio = () => {
    const imageStyles = {
        width: '100%',
        maxWidth: '400px',
        height: 'auto',
        objectFit: 'cover',
    };
    return (
        <div>
            <h1>Portfolio</h1>
 <Project Title="Project1" href="#" src={gamerproject} description="A website designed to 
 connect players accross many different games and platforms. Finding someone to play games
 with online has never been easier!" imgStyle={imageStyles}/>

 <Project Title="Dms and Dms" href="#" src={dmsanddms} description="An application to streamline world creation
 for dungeon masters." imgStyle={imageStyles}/>

 <Project Title="Project3" href="#" src={catsanddogs} description="An early projects that integrates a weather API and a
 dog facts api into one website."imgStyle={imageStyles}/>
        </div>
    )
}


export default Portfolio;
import '../App.css';
import profileImage from '../assets/Profile.jpeg';
import '../assets/About.css'

const About = () => {
    return (
        <section>
        <h1>About Me</h1>
        <img src={profileImage}></img>
        <p className="aboutText">
            I am a fullstack developer who has been learning Javascript since early 2024. I have a background in using React, Javascript, CSS, and HTML,
            as well as using backend tools such as MongoDB, Express.js, and Node.js. I have enjoyed my classwork so far, and hope to emabark on a new career
            or web development!
        </p>
        </section>
    )
}

export default About;
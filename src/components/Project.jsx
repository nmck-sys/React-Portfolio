import PropTypes from 'prop-types'

function Project ({ Title, href, src, description }) {
    return <section>
        <h3>{Title}</h3>
        <a href={href}>
            <img src={src}></img>
        </a>
        <p>{description}</p>
    </section>
}

Project.propTypes = {
    Title: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.string,
    description: PropTypes.string
}
export default Project
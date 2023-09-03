import styling from './ProjectCard.module.css';
import Tags from './Tags.jsx';
const internetLogoLocation = process.env.PUBLIC_URL + "/assets/internet.png";
const codeLogoLocation = process.env.PUBLIC_URL + "/assets/code.png"
const ProjectCard = (props) =>{
    return(
        <div className={styling.ProjectCardMain}>
                    <img src={props.source} alt={`${props.source} Project`} className={styling.projectPreview} loading='lazy'/>
                    <div className={styling.headingDescription}>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                    <div className={styling.links}>
                        <a href={props.deployed} target='blank'><img src={internetLogoLocation} alt="click to open deployed version" loading='lazy'/></a>
                        <a href={props.github} target='blank'><img src={codeLogoLocation} alt="click to see source code" loading='lazy'/></a>
                    </div>
                    <div className={styling.tags}>
                        {props.tags.map((tagprop,index)=>(
                            <Tags tag = {tagprop} key={index}/>
                        ))}
                    </div>
        </div>
    )
}
export default ProjectCard;
import styling from './SkillsCard.module.css';

const SkillsCard = (props) =>{
    return(
        <div className={styling.SkillsCard}>
            <img src={props.source} alt={`${props.source} Logo` } loading='lazy'/>
        </div>
    )
}
export default SkillsCard;
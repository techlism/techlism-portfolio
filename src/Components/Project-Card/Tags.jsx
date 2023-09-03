import styling from './Tags.module.css';
const hash = '#';
const Tags = (props) =>{
    return(
        <div className={styling.tag}>
            <p>{hash+props.tag}</p>
        </div>
    )
}
export default Tags;
import styling from './Footer.module.css';
const Footer = () =>{
    return(
        <div className={styling.FooterMain}>
            <p>* All the icons in the skills section is sourced from <a href="https://icons8.com" target='blank'>Icons8↗️</a></p>
            <p>* All the other icons such as icons before headings & social handles are sourced from <a href="https://flaticon.com" target='blank'>FlatIcon↗️</a></p>
            <p className={styling.endNote}>❌➖➖➖⭕➖➖➖❌</p>
        </div>
    )
}
export default Footer;
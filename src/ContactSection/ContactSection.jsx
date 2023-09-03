import styling from  './ContactSection.module.css';
const emailImgLoc = process.env.PUBLIC_URL + '/assets/email.png';
const githubImgLoc = process.env.PUBLIC_URL + '/assets/github.png';
const linkedinImgLoc = process.env.PUBLIC_URL + '/assets/linkedin.png';
const blogImgLoc = process.env.PUBLIC_URL + '/assets/blog.png';
const contactImgLoc = process.env.PUBLIC_URL + '/assets/contact.png';

function ContactSection(){
    return(
        <div className={styling.ContactSectionMain}>
            <div className={styling.heading}>
                <img src={contactImgLoc} alt="contact logo"/>
                <h1> Get in Touch..</h1>
            </div>
            <div className={styling.socialLinkContainer}>
                <div className={styling.socialBox}>
                    <img src={emailImgLoc} alt="" />
                    <a href="mailto:kundan@techlism.in">Drop a Mail</a>
                </div>
                <div className={styling.socialBox}>
                    <img src={githubImgLoc} alt="" />
                    <a href="https://github.com/techlism">Github</a>
                </div>
                <div className={styling.socialBox}>
                    <img src={linkedinImgLoc} alt="" />
                    <a href="https://www.linkedin.com/in/kundan-kumar-a54461202/">Connect with me on LinkedIn</a>
                </div>                
            </div>
            <div className={styling.blogBox}>
                <a href="https://blog.techlism.in"><img src={blogImgLoc} alt="My Blog"/></a>
                <p>⬆️ Stay in the loop..♾️</p>
            </div>            
            <h2 className={styling.h2}>See you on the other side 👋</h2>
        </div>
    )
}
export default ContactSection;
import React from "react";
import styling from './AboutSection.module.css';
import SkillsCard from "../Components/SkillsCard/SkillsCard";
const imageSrc = [
  process.env.PUBLIC_URL + "/assets/react.png",
  process.env.PUBLIC_URL +"/assets/c.png",
  process.env.PUBLIC_URL +"/assets/c++.png",
  process.env.PUBLIC_URL +"/assets/nodejs.png",
  process.env.PUBLIC_URL +"/assets/javascript.png",
  process.env.PUBLIC_URL +"/assets/python.png",
  process.env.PUBLIC_URL +"/assets/html.png",
  process.env.PUBLIC_URL +"/assets/css.png",
  process.env.PUBLIC_URL +"/assets/mongodb.png",
  process.env.PUBLIC_URL +"/assets/jwt.png",
  process.env.PUBLIC_URL +"/assets/linux.png",
  process.env.PUBLIC_URL +"/assets/git.png",
  process.env.PUBLIC_URL +"/assets/canva.png",
  process.env.PUBLIC_URL +"/assets/lightroom.png",
  process.env.PUBLIC_URL +"/assets/premiere.png"

];

const helloImgLocation = process.env.PUBLIC_URL+"/assets/hello.png";
const skillImgLocation = process.env.PUBLIC_URL+"/assets/skill.png";
const AboutSection=()=>{
    return(
        <div className={styling.AboutSectionWrapper}>
            <div className={styling.AboutSection}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img src={helloImgLocation} alt="hello cartoon" className={styling.sphereImage} loading='lazy'/>                
                    <h1 className={styling.title}>Hi, I'm Kundan</h1>
                </div>                
                <p>
                    I'm a software developer who harmonizes code and creativity to construct captivating digital experiences. My expertise lies in crafting user-friendly websites, and I'm equally enthusiastic about content creation and photography. Through visual narratives, I aspire to shape the digital realm. Let's collaborate to bring meaningful digital journeys to life.
                </p>
            </div>
            
            <div className={styling.SkillsSection}>
            <div style={{display:'flex',marginLeft:'10px',marginBottom:'20px'}}>
                    <img src={skillImgLocation} alt="skill glow" className={styling.sphereImage} loading='lazy'/>                
                    <h1 className={styling.title}>Skill Highlights</h1>
            </div> 
            <div className={styling.skillIcons}>
                {imageSrc.map((src,index)=>(
                    <SkillsCard key={index} source={src} />
                ))}
            </div>               

            </div>
        </div>

    )
}

export default AboutSection;
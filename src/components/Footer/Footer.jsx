import s from "./footer.module.css";
export default function Footer() {
    return(
        <div className={s.footerContainer}>
            <div className={s.registered}>
                <p>© 2022 Fernando Jaramillo. All Rights Reserved</p>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/-fernando-full-stack-developer/" target="_blank" rel='noreferrer'><span className={s.iconLinks}><img src="linkedinlogo.png" alt="linkedin logo"/></span></a>
                <a href="https://github.com/Fernando-Jaramillo" target="_blank" rel='noreferrer'><span className={s.iconLinks}><img src="githublogo.png" alt="linkedin logo"/></span></a>
                <a href="https://www.behance.net/leninjaramillo" target="_blank" rel='noreferrer'><span className={s.iconLinks}><img src="behancelogo.png" alt="behance logo"/></span></a>
            </div>
        </div>
    )
}
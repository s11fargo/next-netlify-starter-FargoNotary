import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
        <ul class="mylinks">
             <li><a href="https://www.signingagent.com/profile/161876044" target="_blank">Signing Agent Profile</a></li>
             <li><a href="https://www.notaryresume.com/000761148E256A44F758C621737462198522" target="_blank">Notary Resume</a></li>
             <li><a href="https://www.linkedin.com/in/sharon-fargo-a71b1054" target="_blank">LinkedIn</a></li>
             <li><a href="https://www.yelp.com" target="_blank">Yelp</a></li>
             <li><a href="https://fargosoftware.netlify.app" target="_blank">Made by Fargo Software</a></li>
        </ul>      
    </footer>
    </>
  )
}

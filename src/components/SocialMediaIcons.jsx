import logo from "../assets/linkedinDark.png";
import logo2 from "../assets/github.png";
const SocialMediaIcons = () => {
    return(
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
              className="hover:opacity-50 transition duration-500" 
              href="https:://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
                <img alt="linkedin-link" src={logo} />
            </a>
            <a
              className="hover:opacity-50 transition duration-500" 
              href="https:://www.github.com"
              target="_blank"
              rel="noreferrer" 
            >
                <img alt="twitter-link" src={logo2} />
            </a>
            {/* <a
              className="hover:opacity-50 transition duration-500" 
              href="https:://www.facebook.com"
              target="_blank"
              rel="noreferrer" 
            >
                <img alt="facebook-link" src="../assets/facebook.png" />
            </a>
            <a
              className="hover:opacity-50 transition duration-500" 
              href="https:://www.instagram.com"
              target="_blank"
              rel="noreferrer" 
            >
                <img alt="instagram-link" src="../assets/instagram.png" />
            </a> */}
            
        </div>
    )
}

export default SocialMediaIcons;
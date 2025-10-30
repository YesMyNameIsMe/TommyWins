import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {

  const handleCopy = async () => {

    const [textToCopy, setTextToCopy] = useState('This text will be copied!');
    const [copied, setCopied] = useState(false);

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "copied" state after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex h-fit bg-darkestBlue overflow-hidden flex-wrap-reverse justify-center ">
      <iframe className="flex min-w-[400px] h-[370px]" src="/assets/FishingAnimation.html"/>
      <div className="flex w-fit gap-20 justify-center mx-10 mt-20">
        <span className="flex flex-col font-mono text-2xl text-white gap-4">
          <Link to={'/about#header'}>
            <underlineText>
              ABOUT
            </underlineText>
          </Link>
          <Link to="/#projects">
            <underlineText>
              PROJECTS
            </underlineText>
          </Link>
          <Link to="/#experience">
            <underlineText>
              EXPERIENCE
            </underlineText>
          </Link>
          <Link to="/#contact">
            <underlineText>
              CONTACT
            </underlineText>
          </Link>
        </span>
        <span className="flex flex-col font-mono text-2xl text-white gap-4">
          <Link to={'/nexus'}>
            <underlineText>
              NEXUS
            </underlineText>
          </Link>
          <Link to="/lore">
            <underlineText>
              LORE
            </underlineText>
          </Link>
        </span>
       <span className="flex flex-col font-mono text-2xl text-white gap-4">
          <a className='' target='_blank'  rel="noopener noreferrer" href="https://www.linkedin.com/in/tommy-nguyen-ba899423a">
            <underlineText>
              GITHUB
            </underlineText>
          </a>
          <a className='' target='_blank'  rel="noopener noreferrer" href="https://github.com/YesMyNameIsMe">
            <underlineText>
              LINKEDIN
            </underlineText>
          </a>
          <div onClick={handleCopy}>
            <underlineText>
              EMAIL
            </underlineText>            
          </div>
        </span>
      </div>
    </div>
  )
}

export default Footer
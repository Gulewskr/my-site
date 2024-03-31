import React, { useState } from "react";
import { Link } from "gatsby";
import Icon from "./icon/Icon";

import "@styles/contactList.css";

import GitHubIcon from '@icons/github.svg';
import LinkedInIcon from '@icons/linkedin.svg';
import InstagramIcon from '@icons/instagram.svg';
import FacebookIcon from '@icons/facebook.svg';
import UpworkIcon from '@icons/upwork.svg';
import CodewarsIcon from '@icons/codewars.svg';

const SingleLink = ({icon, link, name}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="list-link"
        role="button"
        tabIndex="0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
      <Link
        to={link}
        target="_blank"
      >
        <div className="SingleLink">
          <div><Icon iconSize={isHovered ? "lg-h" : "lg"}>{icon}</Icon></div>
          <span className="SingleLink-text">{name}</span>
        </div>
      </Link>
    </div>
  );
}

const ContactList = () => (
  <div className="grid grid-rows-3 md:grid-rows-2 grid-flow-col gap-4">
    <SingleLink
      link="https://github.com/Gulewskr"
      icon={<GitHubIcon />}
      name="Github"
    />
    <SingleLink
      link="https://www.facebook.com/profile.php?id=100004371061552"
      icon={<FacebookIcon />}
      name="Facebook"
    />
    <SingleLink
      link="https://www.linkedin.com/in/rafał-gulewski-29141b230"
      icon={<LinkedInIcon />}
      name="Linkedin"
    />
    <SingleLink
      link="https://www.upwork.com/freelancers/~01a337f0c1bb6f8fa5"
      icon={<UpworkIcon />}
      name="Upwork"
    />
    <SingleLink
      link="404"
      icon={<InstagramIcon />}
      name="Instagram"
    />
    <SingleLink
      link="https://www.codewars.com/users/Gulewskr"
      icon={<CodewarsIcon />}
      name="Codewars"
    />
  </div>
);

export default ContactList;

import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/thinh-nho-562370277" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/thinh-sine-nix" target="_blank"><FaGithub /></a>
        <a href="https://facebook.com/phuthinh69" target="_blank"><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocials
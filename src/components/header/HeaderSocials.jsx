import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDev} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linked.in/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/" target="_blank"><FaGithub /></a>
        <a href="https://dev.to/" target="_blank"><FaDev /></a>
    </div>
  )
}

export default HeaderSocials
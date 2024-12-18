import React from 'react';
import {ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4 '>
      <li>
        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
        <ImFacebook/>
        </a>
      </li>
      <li>
        <a href='https://x.com/' target='_blank' rel='noreferrer'>
        <ImTwitter/>
        </a>
      </li>
      <li>
        <a href='https://pinterest.com/' target='_blank' rel='noreferrer'>
        <ImPinterest/>
        </a>
      </li>
      <li>
        <a href='https://instagram.com/' target='_blank' rel='noreferrer'>
        <ImInstagram/>
        </a>
      </li>
      <li>
        <a href='https://youtube.com/' target='_blank' rel='noreferrer'>
        <ImYoutube/>
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;

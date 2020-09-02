import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function SocialFollow() {
  return (
    <div class='social-container'>
      <SocialIcon
        url='https://www.linkedin.com/in/nikesh-ghimire-738266bb//'
        style={{ height: 40, width: 40 }}
      />
      <SocialIcon
        url='https://github.com/nikeshghimire77'
        style={{ height: 40, width: 40 }}
        bgColor='black'
      />
      <SocialIcon
        url='https://twitter.com/nikeshghimire77'
        style={{ height: 40, width: 40 }}
      />
      <SocialIcon
        url='https://medium.com/@nikeshghimire'
        style={{ height: 40, width: 40 }}
      />
      <SocialIcon
        url='https://www.facebook.com/nikeshghimire77'
        style={{ height: 40, width: 40 }}
      />
    </div>
  );
}

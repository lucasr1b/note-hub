import React, { useState } from 'react'
import { FaCaretRight } from 'react-icons/fa';
import { rootCertificates } from 'tls';

const SidebarExpand = () => {
  const [style, setStyle] = useState({});
  const [expanded, setExpanded] = useState('');

  const rotateCaret = (e:any) => {
    console.log(e.target.getAttribute('data-expanded'))

    setStyle({
      transition: 'transform 200ms ease-out 0s',
      transform: e.target.getAttribute('data-expanded') === 'expanded' ? 'rotate(0deg)' : 'rotate(90deg)',
    })

    setExpanded(expanded === 'expanded' ? '' : 'expanded');
  }

  return (
    <div className='Expand Icon'><FaCaretRight onClick={rotateCaret} style={style} data-expanded={expanded}/></div>
  )
}

export default SidebarExpand
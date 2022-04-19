import React, { useEffect, useState } from 'react'
import { FaCaretRight } from 'react-icons/fa';

const SidebarExpand = () => {

  const openFolder = (e: any) => {
    let caretElem;

    if (e.target.tagName.toLowerCase() == 'svg') {
      caretElem = e.target.parentElement
    } else {
      caretElem = e.target.parentElement.parentElement;
    }

    const isExpanded = caretElem.dataset.isexpanded == "true"

    const folderElem = caretElem.parentElement;

    const styles = {
      'transition': 'transform 200ms ease-out 0s',
      'transform': isExpanded ? 'rotate(0deg)' : 'rotate(90deg)'
    }

    Object.assign(caretElem.firstChild.style, styles);


    caretElem.dataset.isexpanded = !isExpanded;

    var toggleElems = [].slice.call(folderElem.parentElement.children);
    var classNames = "File,Folder--Block,No--Items".split(",");

    toggleElems.forEach(function (element: any) {
      if (classNames.some(function (val) { return element.classList.contains(val); }))
        element.classList.toggle('Unopened')
    });

  }

  return (
    <div className='Expand Icon'><FaCaretRight onClick={openFolder} data-isexpanded={false} /></div>
  )
}

export default SidebarExpand
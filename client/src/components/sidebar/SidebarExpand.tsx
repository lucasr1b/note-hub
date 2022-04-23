import React, { Children, useEffect, useState } from 'react'
import { FaCaretRight } from 'react-icons/fa';
import { updateFolder } from '../../API/FolderAPI';

const SidebarExpand = (folder: any) => {

  const classNames = "File,Folder--Block,No--Items".split(",");

  useEffect(() => {
    const elem = document.getElementById(folder.folder._id);

    if (elem != null) {
      elem.dataset.isexpanded = folder.folder.opened;

      console.log(folder.folder.opened === 'true' ? `${folder.folder.name}: opened` : `${folder.folder.name}: unopened`);

      elem!.style.transform = folder.folder.opened === 'true' ? 'rotate(90deg)' : 'rotate(0deg)';
    }

  }, [])

  const openFolder = (e: any) => {
    let caretElem;

    if (e.target.tagName.toLowerCase() == 'svg') {
      caretElem = e.target;
    } else {
      caretElem = e.target.parentElement;
    }

    const isExpanded = caretElem.dataset.isexpanded == "true"

    const styles = {
      'transition': 'transform 200ms ease-out 0s',
      'transform': isExpanded ? 'rotate(0deg)' : 'rotate(90deg)'
    }

    Object.assign(caretElem.style, styles);

    caretElem.dataset.isexpanded = !isExpanded;

    updateFolder(folder.folder._id, (!isExpanded).toString());

    const elem = caretElem.parentElement.parentElement.parentElement;

    var toggleElems = [].slice.call(elem.children);

    toggleElems.forEach(function (element: any) {
      if (classNames.some(function (val) { return element.classList.contains(val); }))
        element.classList.toggle('Unopened')
    });

  }

  return (
    <div className='Expand Icon'><FaCaretRight onClick={openFolder} id={folder.folder._id} data-isexpanded={folder.folder.opened}/></div>
  )
}

export default SidebarExpand
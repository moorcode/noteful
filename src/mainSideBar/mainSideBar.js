import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import './mainSideBar.css';

export default function MainSideBar(props) {
  return (
    <NotefulContext.Consumer>
      {(context) => (
        <div className='foldersList'>
          <ul>
            {context.folders.map((folder) => (
              <li
                key={folder.id}
                className={
                  folder.id === props.match.params.folderId ? 'selected' : ''
                }
              >
                <NavLink to={`/folder/${folder.id}`} className='folder-list'>
                  {folder.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to='/new/folder' className='addFolder'>
            <BsFillPlusCircleFill />
            <span>Add Folder</span>
          </Link>
        </div>
      )}
    </NotefulContext.Consumer>
  );
}

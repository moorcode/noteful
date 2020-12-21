import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import NoteCard from '../noteCard/noteCard';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import './mainNotes.css';

export default function MainNotes(props) {
  return (
    <NotefulContext.Consumer>
      {(context) => {
        const notes = props.match.params.folderId
          ? context.notes.filter(
              (note) => note.folderId === props.match.params.folderId
            )
          : context.notes;
        return (
          <div>
            <ul className='notesList'>
              {notes.map((note) => (
                <li key={note.id}>
                  <NoteCard
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    history={props.history}
                  />
                </li>
              ))}
            </ul>
            <Link
              to={{
                pathname: '/new/note',
                state: {
                  folderId: props.match.params.folderId || ''
                }
              }}
              className='addNotes'
            >
              <BsFillPlusCircleFill />
              <span>Add Note</span>
            </Link>
          </div>
        );
      }}
    </NotefulContext.Consumer>
  );
}
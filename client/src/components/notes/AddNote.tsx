import React, { useState } from 'react'

type Props = {
  saveNote: (e: React.FormEvent, formData: INote | any) => void
}

const AddNote: React.FC<Props> = ({ saveNote }) => {
  const [formData, setFormData] = useState<INote | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Card' onSubmit={(e) => saveNote(e, formData)}>
      <div>
        <div>
          <label htmlFor='title'>Title</label>
          <input onChange={handleForm} type='text' id='title' />
        </div>
        <div>
          <label htmlFor='content'>Content</label>
          <input onChange={handleForm} type='text' id='content' />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false} >Add Note</button>
    </form>
  )
}

export default AddNote;
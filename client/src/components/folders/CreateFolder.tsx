import React, { useState } from 'react'

type Props = {
    saveFolder: (e: React.FormEvent, formData: IFolder | any) => void
}

const CreateFolder: React.FC<Props> = ({ saveFolder }) => {
    const [formData, setFormData] = useState<IFolder | {}>()

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <form className='Card' onSubmit={(e) => saveFolder(e, formData)}>
            <div>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input onChange={handleForm} type='text' id='name' />
                </div>
            </div>
            <button disabled={formData === undefined ? true : false} >Create Folder</button>
        </form>
    )
}

export default CreateFolder
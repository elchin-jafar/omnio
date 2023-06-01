import { useState } from 'react';
import UserInfo from '../../components/Profile/UserInfo';
import UpdateForm from '../../components/Profile/UpdateForm'

export default function GeneralSettings() {
    const [editorOpen, setEditorOpen] = useState(false)

    return (

        <section>
            {editorOpen ?
                <UpdateForm setEditorOpen={setEditorOpen} />
                :
                <UserInfo setEditorOpen={setEditorOpen} />
            }
        </section >

    )
}
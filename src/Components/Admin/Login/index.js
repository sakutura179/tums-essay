import clsx from 'clsx';
import DataTable from 'react-data-table-component';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { Markup } from 'interweave';
import { useState } from 'react';

import styles from './Login.module.css'

function Login() {
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
            grow: 3,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        }
    ];

    const data = [
        {
            id: 1,
            title: 'The Shawshank Redemption',
            year: 1994,
        },
        {
            id: 2,
            title: 'The Godfather',
            year: 1972,
        }
    ];

    const [desc, setDesc] = useState('');

    return (
        <>
            <div className={clsx(styles.login_container)}>
                <div className={clsx(styles.login_form)}>
                    123
                </div>
            </div>
            <DataTable
                columns={columns}
                data={data}
            />
            <div>
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={Editor}
                    onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setDesc(data);
                        console.log({ event, editor, data });
                    }}
                />
                <Markup
                    content={desc}
                />
            </div>
        </>
    )
}

export default Login;
import React, { useCallback } from "react"
import { useDropzone } from 'react-dropzone'

const DragAndDropComponent = ({ imageChanges }) => {

    const onDrop = useCallback((acceptedFiles) => {
        imageChanges(acceptedFiles)
    }, [imageChanges])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const styles = {
        position: "relative",
        width: "200px",
        height: "200px",
        borderWidth: "2px",
        borderColor: "rgb(102, 102, 102)",
        borderStyle: "dashed",
        borderRadius: "5px",
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        color: "#0e0e95"
    }

    return (

        <div style={styles} {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>

    )

}

export default DragAndDropComponent
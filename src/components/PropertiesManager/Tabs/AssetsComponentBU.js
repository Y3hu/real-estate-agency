import React, { useState, useEffect } from 'react'
//import Img from 'react-image'
import { Modal, Spinner } from '../../Shared'

import { withAuthorization } from '../../Session'

import styles from './tabs.module.scss'
import DragAndDropComponent from './DragAndDrop'

const AssetsComponent = ({ firebase, setForm, formData, showAlertMessage, redirect }) => {
    const [imagesAsFiles, setImagesAsFiles] = useState([])
    const [imagesUrls, setImagesUrls] = useState([])
    const [videoAsFile, setVideoAsFile] = useState({})
    const [videoAsUrl, setVideoAsUrl] = useState('')
    const [uploading, setUploading] = useState(false)
    const [cities, setCities] = useState([])
    const [imageSelected, setImageSelected] = useState('')

    const { city } = formData

    useEffect(() => {
        setImagesUrls(images => [...images, ...formData.images])

        firebase.cities().on('value', snapshot => {
            const citiesObject = snapshot.val()

            for (let key in citiesObject) {
                let city = {
                    uid: key,
                    ...citiesObject[key]
                }

                setCities(c => [...c, city])
            }

        })

        drawImages()

        return () => firebase.cities().off()
        // eslint-disable-next-line
    }, [imagesAsFiles, firebase])

    const drawImages = () => {
        let imagesToDraw = [...formData.images, ...imagesAsFiles]

        imagesToDraw.forEach(file => {

            if (file) document.getElementById("images").appendChild(buildFigure(file))

        })

    }

    const buildFigure = info => {
        let figure = document.createElement("figure")
        let image = document.createElement("img")
        let button = document.createElement("button")
        let i = document.createElement("i")
        let span_read = document.createElement("span")

        figure.classList.add("figure")
        figure.style.display = "flex"
        figure.style.flexFlow = "column nowrap"
        figure.style.justifyContent = "flex-end"
        figure.style.alignItems = "flex-end"
        figure.style.marginTop = "1vh"

        figure.setAttribute("id", info.name)
        figure.addEventListener("click", () => {
            setImageSelected(figure.id)
            //setImageSelectedStyles(figure.id)
        })

        image.src = (info.type === "image/jpeg" || info.type === "image/jpg" || info.type === "image/png") ? window.URL.createObjectURL(info) : info.url
        image.classList.add("figure-img", "img-fluid", "rounded")
        image.style.width = "150px"
        image.style.height = "150px"
        image.style.cursor = "pointer"

        button.classList.add("btn", "btn-danger", "badge", "badge-light")
        button.innerHTML = "remove"
        button.setAttribute("type", "button")
        button.style.marginBottom = ".5vh"
        button.addEventListener("click", () => {
            deleteImage(figure.id)
        })

        i.classList.add("fas", "fa-minus-circle")


        span_read.innerHTML = "delete image button"
        span_read.classList.add("sr-only")

        button.appendChild(i)
        button.appendChild(span_read)
        figure.appendChild(button)
        figure.appendChild(image)

        return figure

    }

    const deleteImage = id => {
        console.log(formData.images)
        console.log(imagesAsFiles)

        let object_found = formData.images.find(object => object.name === id)
        let file_found = imagesAsFiles.find(file => file.name === id)

        if (object_found) console.log(object_found)
        if (file_found) console.log(file_found)
    }

    return (
        <div className={styles.details_form_container}>
            <div className={styles.details_form_checks_container}>
                <div className={styles.details_form_checks_tags}>
                    <div className={styles.details_form_checks_tag}>
                        <p>Images</p>
                    </div>
                    <div className={styles.details_form_checks_options}>

                        <div className="btn-group btn-group-toggle" data-toggle="buttons">

                            <button
                                type="button"
                                className={(!Object.keys(imagesAsFiles).length) ? `btn btn-secondary fas fa-cloud-upload-alt ${styles.option_disabled}` : `btn btn-secondary fas fa-cloud-upload-alt ${styles.option_enable}`}
                            >

                            </button>
                            <button
                                type="button"
                                className={(imagesUrls.length <= 0) ? `btn btn-secondary fas fa-trash-alt ${styles.option_disabled}` : `btn btn-secondary fas fa-trash-alt ${styles.option_enable}`}
                            >

                            </button>
                        </div>

                    </div>

                    <div className={styles.details_form_container_images}>
                        {
                            (Object.keys(imagesAsFiles).length > imagesUrls.length && uploading) ?
                                <Spinner backgroundColor="#0e0e95" />
                                : <DragAndDropComponent imageChanges={() => { }} />
                        }
                        <div id="images" className={styles.details_form_container_images}></div>

                    </div>

                </div>
            </div>
            <div className={styles.details_form_checks_container}>
                <div className={styles.details_form_checks_tags}>
                    <div className={styles.details_form_checks_tag}>
                        <p>Video</p>
                    </div>
                    <div className={styles.details_form_checks_options}>

                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <button type="button" className={`${styles.fileContainer} fas fa-video btn btn-secondary`}>
                                <input type="file" id="myfile" name="images" />
                            </button>
                            <button type="button" className={(!videoAsFile.name || videoAsUrl.length > 0) ? `btn btn-secondary fas fa-cloud-upload-alt ${styles.option_disabled}` : `btn btn-secondary fas fa-cloud-upload-alt ${styles.option_enable}`}>
                            </button>

                            <button type="button" className={(!videoAsUrl.length) ? `btn btn-secondary fas fa-trash-alt ${styles.option_disabled}` : `btn btn-secondary fas fa-trash-alt ${styles.option_enable}`}>
                            </button>
                        </div>

                    </div>
                    <div id="video" className={styles.details_form_container_images}>

                    </div>
                </div>
            </div>
            <Modal buttonName="" message="Edit this property?" classes={`btn btn-primary btn-lg fas fa-upload ${styles.upload_button}`} func={() => { }} />
        </div>
    )
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(AssetsComponent)
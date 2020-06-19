import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import DragAndDropComponent from './DragAndDrop'
import { Spinner, Modal } from '../Shared'

import styles from './carousel-manager.module.scss'

const Images = ({ dbImages, setDbImages, firebase, showAlertMessage, history }) => {
    const [imagesAsFiles, setImagesAsFiles] = useState([])
    const [imagesUrls, setImagesUrls] = useState([])
    const [uploading, setUploading] = useState(false)
    const [imageSelected, setImageSelected] = useState('')

    useEffect(() => {
        let imagesArray = [...dbImages, ...imagesAsFiles]

        cleanImagesAndState()
        drawImages(imagesArray)

        return () => firebase.images().off()
        // eslint-disable-next-line
    }, [imagesAsFiles, firebase])

    const drawImages = imagesArr => {

        if (dbImages.length > 0) setImagesUrls(imgs => [...imgs, ...dbImages])

        if (imagesArr.length > 0) {
            imagesArr.map(file => {

                if (file) {
                    let figure = document.createElement("figure")
                    let image = document.createElement("img")
                    let inputCaption = document.createElement("input")

                    figure.classList.add("figure")
                    figure.style.display = "flex"
                    figure.style.flexFlow = "column nowrap"
                    figure.style.justifyContent = "center"
                    figure.style.alignItems = "center"

                    image.src = (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png") ? window.URL.createObjectURL(file) : file.url
                    image.classList.add("figure-img", "img-fluid", "rounded")
                    image.style.width = "150px"
                    image.style.height = "150px"
                    image.style.cursor = "pointer"

                    image.setAttribute("id", file.name)
                    inputCaption.setAttribute("name", file.name)
                    inputCaption.setAttribute("type", "text")
                    inputCaption.setAttribute("placeholder", "write a caption")

                    image.addEventListener("click", () => {
                        setImageSelected(image.id)
                        setImageSelectedStyles(image.id)
                    })

                    figure.appendChild(image)
                    figure.append(inputCaption)
                    document.getElementById("images").appendChild(figure)
                }

                return 0
            })

        }

    }

    const setImageSelectedStyles = id => {
        [...imagesAsFiles, ...imagesUrls].map(image => {

            if (image && image.name) {
                if (image.name === id) {
                    document.getElementById(image.name).style.borderRadius = "5px"
                    document.getElementById(image.name).style.border = "ridge red 2px"
                }
                else {
                    document.getElementById(image.name).style.borderRadius = "0px"
                    document.getElementById(image.name).style.border = "unset"
                }
            }

            return 0
        })
    }

    const imageChanges = async (files) => {
        cleanImagesAndState()

        files.map((file, j) => {

            let imageOnArray = imagesAsFiles.find(imgArr => (imgArr) ? imgArr.name === file.name : null) || imagesUrls.find(uploaded => (uploaded) ? uploaded.name === file.name : null)

            if (!imageOnArray) setImagesAsFiles(files => [...files, file])
            else drawImages([...dbImages, ...imagesAsFiles])

            return 0

        })

    }

    const handleImagesUpload = async (e) => {
        e.preventDefault()
        // async magic goes here...
        if (imagesAsFiles.length < 0) {
            console.error(`not images, the image file is a ${typeof (imageAsFile)}`)
        }

        imagesAsFiles.map((image, index) => {

            //check if image is already uploaded
            let imageFound = imagesUrls.find(uploaded => (uploaded) ? uploaded.name === image.name : null)

            //upload just new images
            if (!imageFound) {
                firebase.storage.ref(`/images/${image.name}`).put(image)
                    .on('state_changed',
                        (snapshot) => {
                            //takes a snap shot of the process as it is happening

                            // Observe state change events such as progress, pause, and resume
                            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                            console.log('Upload is ' + progress + '% done')

                            setUploading(true)
                            document.getElementById("images").style.visibility = "hidden"
                            document.getElementById("images").style.display = "none"

                        }, (err) => {
                            //catches the errors
                            console.log(err)
                        }, () => {
                            //get image URL
                            firebase.storage.ref('images').child(image.name).getDownloadURL()
                                .then(fireBaseUrl => {

                                    //add new imageURL to imagesUrls array
                                    setImagesUrls(images => [...images, { url: fireBaseUrl, cover: false, name: image.name, caption: '' }])

                                    //check if the process of upload images has finished and display all imaages previews
                                    if (index === imagesAsFiles.length - 1) {
                                        setUploading(false)
                                        document.getElementById("images").style.visibility = "visible"
                                        document.getElementById("images").style.display = "flex"
                                    }

                                })
                        })
            }

            return 0
        })

    }

    const deleteImages = e => {

        if (imagesUrls.length > 0) {
            imagesUrls.forEach(image => {
                firebase.storage.ref(`/images/${image.name}`).delete()
                    .then(() => {
                        console.log('file deleted')
                    }).catch(error => {
                        // Uh-oh, an error occurred!
                        console.log(error)
                    })

                // Delete property from the database
                firebase.image(image.uid)
                    .remove()
                    .then(() => console.log("image deleted"))
            })
        }

        setTimeout(() => {
            cleanImagesAndState()
            setImagesAsFiles([])
            setDbImages([])
            history.push(ROUTES.CAROUSEL)
        }, 800)
    }

    const cleanImagesAndState = _ => {
        setImagesUrls([])
        divCleaner("images")
    }

    const divCleaner = element => {
        var e = document.getElementById(element)

        //e.firstElementChild can be used.
        var child = e.lastElementChild
        while (child) {
            e.removeChild(child)
            child = e.lastElementChild
        }
    }

    const uploadImages = () => {

        imagesUrls.forEach(image => {
            if (image) {
                if (image.url.includes(imageSelected)) image.cover = true
                else image.cover = false

                let date = new Date()
                image.caption = document.getElementsByName(image.name)[0].value
                // Add a image to the carousel
                firebase.image(date.getTime().toString())
                    .set({ ...image })
                    .then(() => {
                        showAlertMessage()
                        history.push(ROUTES.CAROUSEL)
                    })
            }

        })

    }

    return (
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
                            onClick={handleImagesUpload}
                            disabled={(!Object.keys(imagesAsFiles).length)}>

                        </button>
                        <button
                            type="button"
                            className={(imagesUrls.length <= 0) ? `btn btn-secondary fas fa-trash-alt ${styles.option_disabled}` : `btn btn-secondary fas fa-trash-alt ${styles.option_enable}`}
                            onClick={deleteImages}
                            disabled={imagesUrls.length <= 0}>

                        </button>
                    </div>

                </div>

                <div className={styles.details_form_container_images}>
                    {
                        (Object.keys(imagesAsFiles).length > imagesUrls.length && uploading) ?
                            <Spinner backgroundColor="#0e0e95" />
                            : <DragAndDropComponent imageChanges={imageChanges} />
                    }
                    <div id="images" className={styles.details_form_container_images}></div>

                </div>
            </div>
            <Modal buttonName="" message="Change carousel images?" classes={`btn btn-primary btn-lg fas fa-upload ${styles.upload_button}`} func={uploadImages} />
        </div>
    )
}

export default withRouter(Images)
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
        cleanImagesAndState()
        setImagesUrls(imgs => [...imgs, ...formData.images])
        let imagesArray = (imagesUrls.length > 0) ? [...imagesUrls, ...imagesAsFiles] : [...formData.images, ...imagesAsFiles]
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

        drawImages(imagesArray)

        return () => firebase.cities().off()
        // eslint-disable-next-line
    }, [imagesAsFiles, firebase])

    const drawImages = imagesArr => {

        if (imagesArr.length > 0) {
            imagesArr.map(file => {

                if (file) {

                    document.getElementById("images").appendChild(buildFigure(file))
                }

                return 0
            })

        }

    }

    const buildFigure = file => {
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

        image.src = (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png") ? window.URL.createObjectURL(file) : file.url
        image.classList.add("figure-img", "img-fluid", "rounded")
        image.style.width = "150px"
        image.style.height = "150px"
        image.style.cursor = "pointer"
        image.setAttribute("id", file.name)

        button.classList.add("btn", "btn-danger", "badge", "badge-light")
        button.innerHTML = "remove"
        button.setAttribute("type", "button")
        button.style.marginBottom = ".5vh"
        button.addEventListener("click", () => {
            deleteImage(image.id)
        })

        i.classList.add("fas", "fa-minus-circle")

        span_read.innerHTML = "delete image button"
        span_read.classList.add("sr-only")

        image.addEventListener("click", () => {
            setImageSelected(image.id)
            setImageSelectedStyles(image.id)
        })

        button.appendChild(i)
        button.appendChild(span_read)
        figure.appendChild(button)
        figure.appendChild(image)

        return figure
    }

    const imageChanges = async (files) => {
        cleanImagesAndState()

        files.map((file, j) => {

            let imageOnArray = imagesAsFiles.find(imgArr => (imgArr) ? imgArr.name === file.name : null) || imagesUrls.find(uploaded => (uploaded) ? uploaded.name === file.name : null)
            console.log(imageOnArray)

            if (!imageOnArray) setImagesAsFiles(files => [...files, file])
            else drawImages([...formData.images, ...imagesAsFiles])

            return 0

        })

    }

    const setImageSelectedStyles = id => {
        [...formData.images, ...imagesUrls, ...imagesAsFiles].map(image => {

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

    const videoChanges = e => {
        cleanVideoAndState()
        let file = e.target.files[0]

        setVideoAsFile(file)

        let video = document.createElement("video")
        let source = document.createElement("source")

        video.setAttribute("playsinline", "playsinline")
        video.setAttribute("autoplay", "autoplay")

        source.src = window.URL.createObjectURL(file)

        video.appendChild(source)
        document.getElementById("video").appendChild(video)

    }

    const cleanImagesAndState = _ => {
        setImagesUrls([])
        divCleaner("images")
    }

    const cleanVideoAndState = _ => {
        setVideoAsFile({})
        setVideoAsUrl('')
        divCleaner("video")
    }

    const divCleaner = element => {
        var e = document.getElementById(element)

        //e.firstElementChild can be used.
        var child = e.lastElementChild;
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
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
                            console.log('Upload is ' + progress + '% done');

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
                                    setImagesUrls(images => [...images, { url: fireBaseUrl, portrait: false, name: image.name }])

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

    const handleVideoUpload = async (e) => {
        e.preventDefault()

        if (Object.keys(videoAsFile).length) {
            console.error(`not a video, the video file is a ${typeof (videoAsFile)}`)
        }

        firebase.storage.ref(`/videos/${videoAsFile.name}`).put(videoAsFile)
            .on('state_changed',
                (snapShot) => {
                    //takes a snap shot of the process as it is happening
                    console.log("uploading progress")
                    console.log(snapShot)
                }, (err) => {
                    //catches the errors
                    console.log(err)
                }, () => {
                    firebase.storage.ref('videos').child(videoAsFile.name).getDownloadURL()
                        .then(fireBaseUrl => setVideoAsUrl(fireBaseUrl))
                })
    }

    const deleteImage = name => {
        let object_found = formData.images.find(object => object.name === name)
        let file_found = imagesAsFiles.find(file => file.name === name)

        if (object_found) {
            deleteFromFireBase(object_found.name)
            let newImagesUrls = formData.images.filter(image => image.name !== object_found.name)

            cleanImagesAndState()
            formData.images = [...newImagesUrls]
            setImagesUrls([...newImagesUrls])
            drawImages([...newImagesUrls, ...imagesAsFiles])
        }
        if (file_found) {
            let newImagesAsFiles = imagesAsFiles.filter(image => image.name !== file_found.name)
            cleanImagesAndState()
            setImagesAsFiles([...newImagesAsFiles])
            drawImages([...imagesUrls, ...newImagesAsFiles])
        }
    }

    console.log(imagesUrls)

    const deleteImages = e => {

        if (imagesUrls.length > 0) {
            imagesAsFiles.forEach(image => {
                deleteFromFireBase(image.name)
            })
            setTimeout(() => {
                cleanImagesAndState()
                setImagesAsFiles([])
            }, 800)
        }
    }

    const deleteFromFireBase = name => {
        firebase.storage.ref(`/images/${name}`).delete()
            .then(() => {
                console.log('file deleted')
            }).catch(error => {
                // Uh-oh, an error occurred!
                console.log(error)
            })
    }

    const deleteVideo = e => {

        if (videoAsFile.name) {

            firebase.storage.ref(`/videos/${videoAsFile.name}`).delete()
                .then(() => {
                    console.log('file deleted')
                }).catch(error => {
                    // Uh-oh, an error occurred!
                    console.log(error)
                });

            setTimeout(() => {
                cleanVideoAndState()
            }, 800)
        }
    }

    const printPropertieInfo = () => {
        let propertieInfo = { ...formData }
        propertieInfo.video = videoAsUrl

        let newImagesUrls = imagesUrls

        newImagesUrls.forEach(image => {
            if (image) {
                if (image.url.includes(imageSelected)) image.portrait = true
                else image.portrait = false
            }

        })

        propertieInfo.images = newImagesUrls

        let findCity = cities.find(c => c.name.toUpperCase() === city.toUpperCase())

        if (!findCity) {
            let date = new Date()
            // Add a new city in your Firebase realtime database
            firebase.city(date.getTime().toString())
                .set({ name: city })
        }

        // Create a user in your Firebase realtime database
        firebase.propertie(propertieInfo.listingCode)
            .set({ ...propertieInfo })
            .then(() => {
                showAlertMessage()
                redirect()
            })
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
            </div>
            <div className={styles.details_form_checks_container}>
                <div className={styles.details_form_checks_tags}>
                    <div className={styles.details_form_checks_tag}>
                        <p>Video</p>
                    </div>
                    <div className={styles.details_form_checks_options}>

                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <button type="button" className={`${styles.fileContainer} fas fa-video btn btn-secondary`}>
                                <input type="file" id="myfile" name="images" onChange={videoChanges} />
                            </button>
                            <button type="button" className={(!videoAsFile.name || videoAsUrl.length > 0) ? `btn btn-secondary fas fa-cloud-upload-alt ${styles.option_disabled}` : `btn btn-secondary fas fa-cloud-upload-alt ${styles.option_enable}`} onClick={handleVideoUpload}
                                disabled={(!videoAsFile.name || videoAsUrl.length > 0)}>
                            </button>

                            <button type="button" className={(!videoAsUrl.length) ? `btn btn-secondary fas fa-trash-alt ${styles.option_disabled}` : `btn btn-secondary fas fa-trash-alt ${styles.option_enable}`} onClick={deleteVideo}
                                disabled={!videoAsUrl.length}>
                            </button>
                        </div>

                    </div>
                    <div id="video" className={styles.details_form_container_images}>

                    </div>
                </div>
            </div>
            <Modal buttonName="" message="Edit this property?" classes={`btn btn-primary btn-lg fas fa-upload ${styles.upload_button}`} func={printPropertieInfo} />
        </div>
    )
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(AssetsComponent)
import React, { useState, useEffect } from 'react'
//import Img from 'react-image'
import ModalComponent from '../../Shared/Modal'
import SpinnerComponent from '../../Shared/Spinner'

import { withAuthorization } from '../../Session'

import styles from '../manager-properties.module.scss'
import DragAndDropComponent from './DragAndDrop'

const AssetsComponent = ({ firebase, setForm, formData, showAlertMessage }) => {
    //const { images, video } = formData
    const [imagesAsFiles, setImagesAsFiles] = useState({})
    const [imagesUrls, setImagesUrls] = useState([])
    const [videoAsFile, setVideoAsFile] = useState({})
    const [videoAsUrl, setVideoAsUrl] = useState('')
    const [uploading, setUploading] = useState(false)
    const [cities, setCities] = useState([])

    const { city } = formData

    useEffect(() => {
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

        return () => firebase.cities().off()
    }, [firebase])

    const imageChanges = files => {
        //cleanImagesAndState()
        //let files = e.target.files

        setImagesAsFiles(files)
        /**for (let key in files) {
            if (files[key] === "object") setImagesAsFiles([...imagesAsFiles, files[key]])
        }*/

        for (let i = 0; i < files.length; i++) {
            let figure = document.createElement("figure")
            let image = document.createElement("img")

            figure.classList.add("figure")
            image.src = window.URL.createObjectURL(files[i])
            image.classList.add("figure-img", "img-fluid", "rounded")
            image.style.width = "150px"
            image.style.height = "150px"

            figure.appendChild(image)
            document.getElementById("images").appendChild(figure)
        }

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
        setImagesAsFiles({})
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

        Object.values(imagesAsFiles).forEach(image => {
            firebase.storage.ref(`/images/${image.name}`).put(image)
                .on('state_changed',
                    (snapShot) => {
                        //takes a snap shot of the process as it is happening
                        console.log("transfered: ")
                        console.log(snapShot.bytesTransferred)
                        console.log("total: ")
                        console.log(snapShot.totalBytes)
                        if (snapShot.bytesTransferred < snapShot.totalBytes) {
                            setUploading(true)
                            document.getElementById("images").style.visibility = "hidden"
                            document.getElementById("images").style.display = "none"
                        }
                        if (snapShot.bytesTransferred === snapShot.totalBytes) {
                            setUploading(false)
                            document.getElementById("images").style.visibility = "visible"
                            document.getElementById("images").style.display = "unset"
                        }
                    }, (err) => {
                        //catches the errors
                        console.log(err)
                    }, () => {
                        firebase.storage.ref('images').child(image.name).getDownloadURL()
                            .then(fireBaseUrl => setImagesUrls(images => [...images, fireBaseUrl]))
                    })
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

    const deleteImages = e => {

        if (imagesUrls.length > 0) {
            Object.values(imagesAsFiles).forEach(image => {
                firebase.storage.ref(`/images/${image.name}`).delete()
                    .then(() => {
                        console.log('file deleted')
                    }).catch(error => {
                        // Uh-oh, an error occurred!
                        console.log(error)
                    });
            })
            setTimeout(() => {
                cleanImagesAndState()
            }, 800)
        }
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
        propertieInfo.images = imagesUrls
        propertieInfo.video = videoAsUrl
        //console.log(cities)

        let findCity = cities.find(c => c.name.toUpperCase() === city.toUpperCase())
        //console.log(findCity)

        if (!findCity) {
            let date = new Date()
            // Add a new city in your Firebase realtime database
            firebase.city(date.getTime().toString())
                .set({ name: city })
        }

        // Create a user in your Firebase realtime database
        firebase.propertie(propertieInfo.listingCode)
            .set({ ...propertieInfo })
            .then(() => showAlertMessage())
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
                                className={(!Object.keys(imagesAsFiles).length || imagesUrls.length > 0) ? `btn btn-secondary fas fa-cloud-upload-alt ${styles.option_disabled}` : `btn btn-secondary fas fa-cloud-upload-alt ${styles.option_enable}`}
                                onClick={handleImagesUpload}
                                disabled={(!Object.keys(imagesAsFiles).length || imagesUrls.length > 0)}>

                            </button>
                            <button
                                type="button"
                                className={(!imagesUrls.length) ? `btn btn-secondary fas fa-trash-alt ${styles.option_disabled}` : `btn btn-secondary fas fa-trash-alt ${styles.option_enable}`}
                                onClick={deleteImages}
                                disabled={!imagesUrls.length}>

                            </button>
                        </div>

                    </div>

                    <div className={styles.details_form_container_images}>
                        {
                            (Object.keys(imagesAsFiles).length > imagesUrls.length && uploading) ?
                                <SpinnerComponent />
                                : ''
                        }

                        <DragAndDropComponent imageChanges={imageChanges} />
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
            <ModalComponent buttonName="" message="Save this new property?" classes={`btn btn-primary btn-lg fas fa-upload ${styles.upload_button}`} func={printPropertieInfo} />
        </div>
    )
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(AssetsComponent)
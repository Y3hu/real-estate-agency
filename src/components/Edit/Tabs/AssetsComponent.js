import React, { useState, useEffect } from 'react'
//import Img from 'react-image'
import { Modal, Spinner } from '../../Shared'

import { withAuthorization } from '../../Session'

import styles from './tabs.module.scss'
import DragAndDropComponent from './DragAndDrop'

const AssetsComponent = ({ firebase, setForm, formData, showAlertMessage }) => {
    const [imagesAsFiles, setImagesAsFiles] = useState([])
    const [imagesUrls, setImagesUrls] = useState([])
    const [videoAsFile, setVideoAsFile] = useState({})
    const [videoAsUrl, setVideoAsUrl] = useState('')
    const [uploading, setUploading] = useState(false)
    const [cities, setCities] = useState([])
    const [imageSelected, setImageSelected] = useState('')
    const [percent, setPercent] = useState(0)

    const { city } = formData

    useEffect(() => {
        let imagesArray = [...formData.images, ...imagesAsFiles]
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

        cleanImagesAndState()
        drawImages(imagesArray)

        return () => firebase.cities().off()
        // eslint-disable-next-line
    }, [imagesAsFiles, firebase])

    const drawImages = imagesArr => {

        if (formData.images.length > 0) setImagesUrls(imgs => [...imgs, ...formData.images])

        if (imagesArr.length > 0) {
            imagesArr.map(file => {

                if (file) {
                    let figure = document.createElement("figure")
                    let image = document.createElement("img")

                    figure.classList.add("figure")

                    image.src = (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png") ? window.URL.createObjectURL(file) : file.url
                    image.classList.add("figure-img", "img-fluid", "rounded")
                    image.style.width = "150px"
                    image.style.height = "150px"
                    image.style.cursor = "pointer"

                    figure.setAttribute("id", file.name)

                    figure.addEventListener("click", () => {
                        setImageSelected(figure.id)
                        setImageSelectedStyles(figure.id)
                    })

                    figure.appendChild(image)
                    document.getElementById("images").appendChild(figure)
                }

                return 0
            })

        }

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
                                    setPercent(index * 100 / imagesAsFiles.length)

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
                setImagesAsFiles([])
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
                                <Spinner backgroundColor="#0e0e95" percent={percent} />
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
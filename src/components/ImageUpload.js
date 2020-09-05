import React, { useState } from 'react'
import '../style/ImageUpload.css'
import { Button } from '@material-ui/core'
import { storage, db } from '../firebase'

function ImageUpload() {
  const[image, setImage] = useState(null)
  const[progress, setProgress] = useState(0)
  const[caption, setCaption] = useState("")

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleUpload = (e) => {
    const uploadTask = storage.rif(`images/${image.name}`).put(image)
    uploadTask.on(
      "state_changed", 
      (snapshot) => {
        // progress function...
        const progress = Math.round(
          (snapshot.bytesTansferred / snapshot.totalBytes) * 100
        )
        setProgress(progress)
      },
      (error) => {
        // error function
        console.log(error)
        alert(error.message)
      },
      () => {
        // complete function
        storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          //post the image inside db
          db.collection('posts').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            caption: caption,
            imageUrl: url,
          })
        })
      }
    )
  }

  return (
    <div className="imageUpload">
      <input type="text" placeholder="Enter a cation..." onChange={e => setCaption(e.target.value)} value={caption} />
      <input type="file" onChange={handleChange}/>
      <Button onClick={handleUpload}>
        Upload
      </Button>
    </div>
  )
}

export default ImageUpload

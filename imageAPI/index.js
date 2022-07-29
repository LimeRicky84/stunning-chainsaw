const express = require('express');
const app = express();
const PORT = 3001;

const { Storage } = require('@google-cloud/storage');
const Multer = require('multer');

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits : {
        fileSize: 5 * 1024 * 1024,
    },
});

let projectId = 'resume-builder-uofu'
let keyFilename = 'apikeyfile' 


const storate = new Storage({
    projectId,
    keyFilename
});

const bucket = stoarge.bucket("resume-builder-uofu") // TBD

app.post('/upload', multer.single('imagefile'), (req, res) => {
    try {
        if(req.file){
            const blob = bucket.file(req.file.originalname);
            const blobStream = blob.createWriteStream();

            blobStream.on('finish', () => {
                res.status(200).send('Success');

            })
            blobStream.end(req.file.buffer);

        }
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/", (req, res,) => {
    res.sendFile(__dirname + "/index.html");
});


app.listen(port, () => {
    console.log(`Server started on ${PORT}`);
});

// HTML inserts:   <input type = "file" name = "imgfile" accept = "image/jpeg" id = "imageFile"
// <button id = "submitButtn" >Submit</button>
// <script src="submit.js"></script>

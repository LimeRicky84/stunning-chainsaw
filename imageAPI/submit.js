const uuid = require('uuid');
let myuuid = uuidv4();

function uuid(){  // need to build a funciton that assigns each image a uniquie ID for upload.
    return console.log('myuuid')
    };



document.getElementById('submitButtn').addEventListener('click', () => {
    let postid = uuid();
    let inputElement = document.getElementById('imageFile');
    // This code gets the file from the input element (user submit)
    let file = inputElement.files[0];

    // This code recreates the image file with the unique posted ID.
    let blob = file.slice(0, file.size, "image/jpeg");
    newFile = new File([blob], `${postid}_post.jpeg`, { type: "image/jpeg"});

    let formData = new FormData();

    formData.append('imagefile', newFile);

    fetch('/upload', {
        method: "POST",
        body: formData,
    }).then(response => res.text())
      .then((x) => console.log(x));  

});

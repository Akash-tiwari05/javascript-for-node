/*
Implement a set of dummy functions which can mimic the behavior of following functions:

1. download - This function should mimic downloading of somecontent from url
2. process - This function should mimic writing of some content to a file
3. upload  - This function should mimic the uploading the file to server

Now after you've implemented these functons, try to use them in a scenario where
we first downlaod the file,then write it to a disk, and then upload to the server
*/

//using call backs

// 1. Download function
function download(url, callback) {
    console.log("Downloading started...");
    setTimeout(() => {
        console.log("Content downloaded from:", url);
        callback?.("fileData"); // pass data to next step
    }, 3000);
}

// 2. Process function
function process(data, callback) {
    console.log("Processing data...");
    setTimeout(() => {
        console.log("Processing completed",data);
        callback?.("processedFile"); // pass processed file
    }, 3000);
}

// 3. Upload function
function upload(file, callback) {
    console.log("Uploading file...",file);
    setTimeout(() => {
        console.log("Upload successful",file);
        callback?.();//optional chaining operator
    }, 3000);
}

// Main workflow using callbacks
function fileSystem(url) {
    download(url, function(downloadedData) {
        process(downloadedData, function(processedFile) {
            upload(processedFile, function() {
                console.log("All steps completed");
            });
        });
    });
}

// Run
fileSystem("https://example.com/file");
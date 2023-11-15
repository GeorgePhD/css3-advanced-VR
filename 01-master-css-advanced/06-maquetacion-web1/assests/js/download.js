document.getElementById('download__pdf').addEventListener('click', () => {
    // URL of the file to be downloaded
    const fileUrl = '../resume/resume.pdf';

    // Fetch the file using the fetch API
    fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
            // Create a blob (binary large object, this is used to work with files in web apps) from the response
            const blobUrl = window.URL.createObjectURL(blob);

            // Create an anchor element for the download
            const anchor = document.createElement('a');
            anchor.href = blobUrl;

            // Set the download attribute to specify the default file name
            anchor.download = 'resume.pdf';

            // Trigger a click event on the anchor element
            anchor.click();

            // Cleanup: Revoke the blob URL and remove the anchor element
            window.URL.revokeObjectURL(blobUrl);
            document.body.removeChild(anchor);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
var images = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg'];

function getImage(url){
    return new Promise(function(resolve, reject){
        var img = new Image()
        var rand = Math.random();
        window.setTimeout(
            function() {
                img.onload = function () {
                    resolve(this.src)
                }
                img.onerror = function () {
                    reject(this.src)
                }
                img.src = url
            },rand * 5000 + 100);
    })
};

function displayimages() {
    for (var image = 0, len = images.length; image < len; image++){
        getImage(images[image]).then(function (url) {
            showImages(url);
        }).catch(function(reason) {
            document.getElementById('error').innerHTML = "Failed to retrieve " +reason;
        })
    }
};

function displayimagesAll(){
    p1 = getImage('image1.jpeg');
    p2 = getImage('image2.jpeg');
    p3 = getImage('image3.jpeg');
    Promise.all([p1, p2, p3]).then(function (url) {
        var images = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg']
        for (var image = 0, len = images.length; image < len; image++) {
            showImages(images[image]);
        }
    }).catch(function(reason) {
        document.getElementById('error').innerHTML = "Failed to retrieve " +reason;
    })
}

function displayimagesRace(){
    p1 = getImage('image1.jpeg');
    p2 = getImage('image2.jpeg');
    p3 = getImage('image3.jpeg');
    Promise.race([p1, p2, p3]).then(function (url) {
            showImages(url);
    }).catch(function(reason) {
        document.getElementById('error').innerHTML = "Failed to retrieve " +reason;
    })
}

function showImages(url){
    var img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
}

    function activateGallery() {
        let mainImage = document.querySelector("#gallery-photo > img");

        thumbnails= document.querySelectorAll("#gallery-thumbs > div > img");
        thumbnails.forEach(function(thumbnail) {
            thumbnail.addEventListener("click", function() {
            //Set large image
            let newImageSrc = thumbnail.dataset.largeVersion;
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", thumbnail.dataset.title);
           
            //Change which image is current
            document.querySelector(".current").classList.remove("current");
            thumbnail.parentNode.classList.add("current");  
           
            //Change image info

        let mainImageTitle = document.querySelector("#gallery-info > .title");
            let newImageTitle = thumbnail.dataset.title;
           mainImageTitle.innerHTML = newImageTitle;
           
        let mainImageDescription = document.querySelector("#gallery-info > .description");
            let newImageDescription = thumbnail.dataset.description;
            mainImageDescription.innerHTML  = newImageDescription; 
            });

        });
    }

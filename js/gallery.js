/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    const mainEl = document.getElementById("image")

    mainEl.style.backgroundImage = "url('" + previewPic.src + "')"
    mainEl.style.backgroundColor = "#8e68ff"
    mainEl.textContent = previewPic.alt
  	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		const mainEl = document.getElementById("image")
    mainEl.style.backgroundImage = ""
    mainEl.style.backgroundColor = "#8e68ff"
    mainEl.innerHTML = "Hover over an image below to display here."
	}

  function addTabIndex() {
    const mainPanel = document.getElementById("image")
    const mainList = document.getElementsByClassName("preview")
    console.log(mainList)
    console.log("length of main list: ", mainList.length)
    mainPanel.setAttribute("tabindex", "0")
    for (let i = 0; i < mainList.length; i++) {
      console.log(mainList[i])
      mainList[i].setAttribute("tabindex", "0")
    }
  }
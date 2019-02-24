hexo.extend.tag.register('photo_details_plugin', function(args){
 
    var imageSrc = args[0];
    return renderImage(imageSrc);
 
});

function handleInfoButtonClick(e) {
    debugger;
}

function renderPhotoInfo() {

}

function renderCaption() {

}

function renderImage(imageSrc) {
    let infoButtonClicked = false;
    return `<div style="position: relative;">
    <img src=${imageSrc}></img>
    <button style="position: absolute; bottom: 4em; right: 5em;" onClick=${handleInfoButtonClick.bind(this)}>Info</button>
    <div style="text-align:center">caption is here</div>
    </div>`
}
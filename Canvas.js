angular.module('ng').service('$canvas', function(){
    var index=0;
    
    return {
        imageToCanvas: function(source) {
        	var image = new Image();
        	image.src = source
            var canvas = document.createElement("canvas");
			canvas.width = image.width;
			canvas.height = image.height;
			canvas.getContext("2d").drawImage(image, 0, 0);

			return canvas;
        },
        canvasToImage: function(canvas) {
            var image = new Image();
			image.src = canvas.toDataURL("image/png");
			return image;
        }
    };
});
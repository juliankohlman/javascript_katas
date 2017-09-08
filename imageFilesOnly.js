// Build a function that will take an array of filenames (as string) and return
// an array of array. Each array will provide 3 informations about the image
// file: the full filename, its name and the extension. (See the example below)

// Detect the image files based on the end of the filename which is their format
// (extension). Image files are defined as jpg, gif, png, tiff, svg and bmp. So
// "puppies.jpg" is a image file while "puppies.html" is not.

// For example: Input: ["imgName.extension", "notAnImg"] Output:
// [["imgName.extension", "imgName", "extension"], null]

// So: imageFilter(["index.html", "favicon.gif"]) return [null, ["favicon.gif",
// "favicon", "gif"]]

// !Non Case Sensitive, so a file with the extension .jpg or .JPG is still an
// !image.

function imageFilter (arr) {
  var imgExt = ['jpg', 'gif', 'png', 'tiff', 'svg', 'bmp'];
  var imageFiles = [];
//   var formats = arr.map(function(file) {
//     var fileInfo = file.toLowerCase().split('.');
//     return imgExt.includes(fileInfo[1]) ? [file, fileInfo[0], fileInfo[1]] : null ;
//   })
//   return formats;
  console.log(arr);
  arr.forEach(function (file) {
    var fileInfo = file.toLowerCase().split('.');
    if (fileInfo[0] === '') {
      return imageFiles.push(null);
    }
    else if (imgExt.includes(file.toLowerCase().split('.')[fileInfo.length - 1])) {
      return imageFiles.push([file, file.split('.')[0], file.split('.')[1]]);
    } else {
      return imageFiles.push(null);
    }
  });
  console.log(imageFiles);
  return imageFiles;
}
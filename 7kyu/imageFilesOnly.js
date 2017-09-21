// Build a function that will take an array of filenames (as string) and return
// an array of array. Each array will provide 3 informations about the image
// file: the full filename, its name and the extension. (See the example below)

// Detect the image files based on the end of the filename which is their format
// (extension). Image files are defined as jpg, gif, png, tiff, svg and bmp. So
// 'puppies.jpg" is a image file while "puppies.html" is not.

// For example: Input: ["imgName.extension", "notAnImg"] Output:
// [["imgName.extension", "imgName", "extension"], null]

// So: imageFilter(["index.html", "favicon.gif"]) return [null, ["favicon.gif",
// "favicon", "gif"]]

// !Non Case Sensitive, so a file with the extension .jpg or .JPG is still an
// !image.

function imageFilter (arr) {
  var imgExt = ['jpg', 'gif', 'png', 'tiff', 'svg', 'bmp'];
  var imageFiles = [];
  arr.forEach(function (file) {
    var fileData = file.split('.')
    if (!fileData[0]) { return imageFiles.push(null) }
    if (imgExt.includes(fileData[fileData.length - 1].toLowerCase())) {
      return imageFiles.push([file, fileData[0], fileData[1]])
    } else {
      return imageFiles.push(null);
    }
  });
  return imageFiles;
}


// Top CW solution
// USING .match was the key here
// function imageFilter(arr) {
//   return arr.map(file => file.match(/^(.+)\.(bmp|gif|jpg|png|tiff)$/i))
// }



imageFilter(['favicon.gif', 'img.tiff'])
imageFilter(['index.html', 'seattle.jpg'])
imageFilter(['.bash_profile', 'workspace.doc', 'img0912.jpg'])

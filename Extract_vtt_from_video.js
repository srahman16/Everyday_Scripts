// Title: Extract and Download .vtt from video (restricted/unrestricted) file  
// Author: Shahriar Rahman
// E-mail: shahriar.env12@gmail.com
// Version: 2
// Date: 23 November 2025

// On your browswer (preference: Google Chrome) right click > Inspect > Go to Console and then paste this function to extract and download .vtt files of that video

(function () {
  function slugify(x) {
    return x.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  }
  const titleInURL = decodeURIComponent(
    (location.hash.match(/title=(.*)/) || [null, null])[1] || ""
  );

  const track = document.querySelector("track[src*='.vtt']");
  if (!track) {
    console.log("No .vtt track found");
    return;
  }
  const vttUrl = track.src;
  console.log("VTT URL:", vttUrl);

  const finalTitle = titleInURL || "subtitle";
  const filename = slugify(finalTitle) + ".vtt";
  console.log("Downloading as:", filename);

  fetch(vttUrl)
    .then(r => r.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    });
})();

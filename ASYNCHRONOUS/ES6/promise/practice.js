// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("i'am the good practice");
//         reject("i'm bad practice")
//     }, 3000);
// });
// async function readData() {
//     try {
//        console.log(await myPromise)

//     }
//     catch(error){
//         console.log("error")
//     }

//     finally{
//         console.log("finally")
//     }
// }

// readData()

//*================
let downloadedVideo = true;

function editVideo(time, operation) {
  return (myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (downloadedVideo) resolve(`successfully ${operation} the video`);
      else reject("error while downloading");
    }, time);
  }));
}

async function readData() {
  try {
    // one way
    await editVideo(1000, "choose video");
    console.log("video has been chosen");
    // other way
    console.log(await editVideo(2000, "trim"));
    console.log(await editVideo(2000, "add text"));
    console.log(await editVideo(2000, "saturation"));
    console.log(await editVideo(2000, "add sound effects to "));
  } catch (error) {
    console.log(`${error}`);
  } finally {
    console.log("finish editing");
  }
}

readData();

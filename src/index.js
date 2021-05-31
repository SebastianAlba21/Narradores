const start = document.getElementById("start");
const stop = document.getElementById("stop");
const video = document.querySelector("video");
const audio = document.querySelector("audio");

let recorder, stream,astream,recorder2;

async function startRecording() {

  stream = await navigator.mediaDevices.getDisplayMedia({
    video: { mediaSource: "screen" },
  });

  astream = await navigator.mediaDevices.getUserMedia({
    audio:true
  });
  
  recorder = new MediaRecorder(stream);
  //yo
  recorder2 = new MediaRecorder(astream);

  const chunks = [];
  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = e => {
    const completeBlob = new Blob(chunks, { type: chunks[0].type });
    video.src = URL.createObjectURL(completeBlob);
  };
  
  //yo
  const audioChunks = [];
  recorder2.ondataavailable = e => audioChunks.push(e.data);
  recorder2.onstop = e => {
    const audioBlob = new Blob(audioChunks);
    audio.src = URL.createObjectURL(audioBlob);
  };

  //yo
  recorder2.start();
  recorder.start();
}

start.addEventListener("click", () => {
  start.setAttribute("disabled", true);
  stop.removeAttribute("disabled");

  startRecording();
  
});

stop.addEventListener("click", () => {
  stop.setAttribute("disabled", true);
  start.removeAttribute("disabled");

  recorder.stop();
  stream.getVideoTracks()[0].stop();
  astream.getTracks()[0].stop();
  
  
  
});



export async function startRecording(
  audioEnabled: boolean,
  previewElement: HTMLVideoElement
): Promise<MediaRecorder> {
  const mediaOptions: MediaStreamConstraints = {
    video: {
      displaySurface: 'browser',
    } as MediaTrackConstraints,
    audio: audioEnabled ? {
      echoCancellation: true,
      noiseSuppression: true,
    } : false,
  };

  try {
    // @ts-ignore: displayMedia is not in the type definitions
    const stream = await navigator.mediaDevices.getDisplayMedia(mediaOptions);
    
    if (audioEnabled) {
      const audioStream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
        }
      });
      
      audioStream.getAudioTracks().forEach(track => {
        stream.addTrack(track);
      });
    }

    // Set up preview
    previewElement.srcObject = stream;

    // Create MediaRecorder
    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'video/webm;codecs=vp9',
    });

    mediaRecorder.start();

    // Stop recording when the stream ends
    stream.getVideoTracks()[0].onended = () => {
      stopRecording(mediaRecorder);
    };

    return mediaRecorder;
  } catch (error) {
    console.error('Error starting recording:', error);
    throw error;
  }
}

export function stopRecording(mediaRecorder: MediaRecorder) {
  if (mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
    const tracks = mediaRecorder.stream.getTracks();
    tracks.forEach(track => track.stop());
  }
}
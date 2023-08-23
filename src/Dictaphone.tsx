import React from "react";
import "./styles.css";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button className="start"
        onClick={() => SpeechRecognition.startListening({ language: "es-AR" })}
      >
        Start
      </button>
      <button className="stop"
        onClick={SpeechRecognition.stopListening}
      >
        Stop
      </button>
      <button className="reset"
        onClick={resetTranscript}
        >
          Reset
        </button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;

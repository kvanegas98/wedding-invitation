import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import sound from '../../assets/music/sound.mp3';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateTime);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="audio-player-container">
      <audio ref={audioRef}>
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="audio-controls">
        <p style={{ fontSize: '20px', fontFamily:'cursive' }}>
          Dale play a nuestra canción <span style={{ color: 'red', fontSize: '22px' }}>❤</span>
        </p>
        <div className="controls-row">
          <button className="play-button" onClick={isPlaying ? pauseAudio : playAudio}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
          <input
            type="range"
            value={currentTime}
            max={duration || 0}
            onChange={handleTimeChange}
          />
        </div>
        <span>{formatTime(currentTime)}</span>
      </div>
    </div>

  );
};

export default AudioPlayer;

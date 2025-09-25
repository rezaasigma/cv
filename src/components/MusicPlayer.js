
import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const playlist = [
    {
        title: "Montagem Xonada",
        artist: "MAFIA DO XONADO",
        src: "/music/MONTAGEM XONADA.mp3",
        cover: "/images/xonada.jpg"
    },
    {
        title: "Happiness",
        artist: "Rex Orange County",
        src: "/music/Rex Orange County - Happiness (Official Audio).mp3",
        cover: "/images/happiness.jpeg"
    },
    {
        title: "Let Down",
        artist: "Radiohead",
        src: "/music/Radiohead - Let Down.mp3",
        cover: "/images/let_down.jpeg"
    },
    {
        title: "blue",
        artist: "yung kai",
        src: "/music/yung kai - blue (official music video).mp3",
        cover: "/images/blue.png"
    },
    {
        title: "Bad",
        artist: "wave to earth",
        src: "/music/wave to earth - bad (Official Lyric Video).mp3",
        cover: "/images/bad.jpg"
    },
    {
        title: "love",
        artist: "wave to earth",
        src: "/music/wave to earth - love. (Official Lyric Video).mp3",
        cover: "/images/love.jpeg"
    }
];

const MusicPlayer = ({ handleClose }) => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const currentSong = playlist[currentSongIndex];

    useEffect(() => {
        // Pause audio when component unmounts or is hidden
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            if (isPlaying) {
                audioRef.current.play().catch(error => {
                    console.log("Playback prevented or failed: ", error);
                    setIsPlaying(false); // Stop playing if autoplay is blocked
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, volume, currentSongIndex]);

    const playPause = () => {
        setIsPlaying(!isPlaying);
    };

    const nextSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
        setIsPlaying(true);
    };

    const prevSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
        setIsPlaying(true);
    };

    const onTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const onLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const onEnded = () => {
        nextSong();
    };

    const handleSeek = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    };

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="music-player-inpage-container">
            <button className="btn btn-outline-light mb-4" onClick={handleClose}>
                &larr; Back to About
            </button>
            <div className="music-player-content-wrapper">
                <div
                    className="music-player-background-effect"
                    style={{ backgroundImage: `url(${currentSong.cover})` }}
                ></div>
                <div className="player-content">
                    <div className="album-cover-container">
                        <img src={currentSong.cover} alt="Album Cover" className="album-cover" />
                    </div>
                    <div className="song-info">
                        <h3 className="song-title">{currentSong.title}</h3>
                        <p className="song-artist">{currentSong.artist}</p>
                    </div>
                    <div className="controls">
                        <button onClick={prevSong} className="control-button">
                            <i className="bi bi-skip-backward-fill"></i>
                        </button>
                        <button onClick={playPause} className="play-pause-button control-button">
                            {isPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
                        </button>
                        <button onClick={nextSong} className="control-button">
                            <i className="bi bi-skip-forward-fill"></i>
                        </button>
                    </div>
                    <div className="progress-bar-container">
                        <span className="time-display">{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min="0"
                            max={duration}
                            value={currentTime}
                            onChange={handleSeek}
                            className="seek-slider"
                        />
                        <span className="time-display">{formatTime(duration)}</span>
                    </div>
                    <div className="volume-control">
                        <i className="bi bi-volume-up-fill"></i>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="volume-slider"
                        />
                    </div>
                </div>
                <div className="playlist-sidebar">
                    <h4>Playlist</h4>
                    <ul>
                        {playlist.map((song, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    setCurrentSongIndex(index);
                                    setIsPlaying(true);
                                }}
                                className={index === currentSongIndex ? 'active' : ''}
                            >
                                <img src={song.cover} alt="" />
                                <div>
                                    <h5>{song.title}</h5>
                                    <p>{song.artist}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <audio
                    ref={audioRef}
                    src={currentSong.src}
                    onTimeUpdate={onTimeUpdate}
                    onLoadedMetadata={onLoadedMetadata}
                    onEnded={onEnded}
                    preload="metadata"
                />
            </div>
        </div>
    );
};

export default MusicPlayer;

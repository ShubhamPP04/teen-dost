import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Check if file exists
    fetch('/Aaye_Haaye.m4a')
      .then(response => {
        if (!response.ok) {
          throw new Error('Audio file not found');
        }
        console.log('Audio file exists:', response.status);
        return response;
      })
      .catch(error => {
        console.error('Error checking audio file:', error);
        setError(true);
      });

    if (audioRef.current) {
      const audio = audioRef.current;

      const handleError = (e) => {
        console.error('Audio error:', e);
        console.error('Audio error code:', audio.error?.code);
        console.error('Audio error message:', audio.error?.message);
        console.error('Audio src:', audio.currentSrc);
        console.error('Audio network state:', audio.networkState);
        setError(true);
      };

      const handleLoadedData = () => {
        console.log('Audio loaded successfully');
        console.log('Audio duration:', audio.duration);
        setDuration(audio.duration);
        console.log('Audio ready state:', audio.readyState);
        console.log('Audio source:', audio.currentSrc);
        setAudioLoaded(true);
      };

      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };

      const handleCanPlay = () => {
        console.log('Audio can play');
        console.log('Audio source:', audio.currentSrc);
        setAudioLoaded(true);
      };

      const handleLoadStart = () => {
        console.log('Audio load started');
      };

      const handleProgress = () => {
        console.log('Audio loading progress');
      };

      audio.addEventListener('error', handleError);
      audio.addEventListener('loadeddata', handleLoadedData);
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('loadstart', handleLoadStart);
      audio.addEventListener('progress', handleProgress);
      audio.addEventListener('timeupdate', handleTimeUpdate);

      // Try to load the audio file
      audio.load();

      return () => {
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('loadeddata', handleLoadedData);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('loadstart', handleLoadStart);
        audio.removeEventListener('progress', handleProgress);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e) => {
    if (audioRef.current) {
      const newTime = e.target.value;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        const audio = audioRef.current;
        if (isPlaying) {
          await audio.pause();
          console.log('Audio paused');
        } else {
          audio.volume = 1;
          console.log('Attempting to play audio...');
          console.log('Audio source:', audio.currentSrc);
          const playPromise = audio.play();
          if (playPromise !== undefined) {
            await playPromise;
            console.log('Audio started playing successfully');
          }
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error('Playback error:', error);
        setError(true);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
      console.log('Audio muted:', !isMuted, 'Current volume:', audio.volume);
    }
  };

  if (error) {
    console.error('Audio player error - hiding player');
    return null;
  }

  return (
    <div 
      className="fixed top-4 left-4 z-[100]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full px-4 py-2 border border-gray-200 dark:border-gray-800 shadow-lg"
      >
        <audio
          ref={audioRef}
          preload="auto"
          loop
        >
          <source src="Aaye_Haaye.m4a" type="audio/m4a" />
          <source src="Aaye_Haaye.m4a" type="audio/mp4" />
        </audio>
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
            {error ? 'Error loading' : audioLoaded ? 'Aaye Haaye' : 'Loading...'}
          </div>
          <button
            onClick={togglePlay}
            disabled={!audioLoaded}
            className={`h-8 w-8 flex items-center justify-center rounded-full transition-colors ${
              audioLoaded 
                ? 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-white" />
            ) : (
              <Play className="h-4 w-4 text-white" />
            )}
          </button>
          <div className="flex flex-col gap-1 w-32">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              disabled={!audioLoaded}
              className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 dark:[&::-webkit-slider-thumb]:bg-blue-400"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          <button
            onClick={toggleMute}
            disabled={!audioLoaded}
            className={`h-8 w-8 flex items-center justify-center rounded-full transition-colors ${
              audioLoaded
                ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            ) : (
              <Volume2 className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-full left-0 mt-2 w-48 aspect-square bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl p-3 border border-gray-200 dark:border-gray-800 shadow-xl"
          >
            <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: isPlaying ? 1.05 : 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('/Aaye_Haaye_cover.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 
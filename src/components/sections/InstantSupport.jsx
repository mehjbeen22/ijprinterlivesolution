import React from 'react';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import BuildIcon from '@mui/icons-material/Build';

const InstantSupport = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4  px-4 md:px-16 py-8">
      <div className="w-full text-red-700 rounded-lg px-4 py-4 md:py-2 flex flex-col items-center">
        <HeadsetMicIcon sx={{ fontSize: 80 }} />
        <span className="text-xl font-bold mt-2">Contact</span>
      </div>
      <div className="w-full text-red-700 rounded-lg px-4 py-4 md:py-2 flex flex-col items-center">
        <ForumIcon sx={{ fontSize: 80 }} />
        <span className="text-xl font-bold mt-2">Contact</span>
      </div>
      <div className="w-full text-red-700 rounded-lg px-4 py-4 md:py-2 flex flex-col items-center">
        <SettingsSuggestIcon sx={{ fontSize: 80 }} />
        <span className="text-xl font-bold mt-2">Setup & Install</span>
      </div>
      <div className="w-full text-red-700 rounded-lg px-4 py-4 md:py-2 flex flex-col items-center">
        <BuildIcon sx={{ fontSize: 80 }} />
        <span className="text-xl font-bold mt-2">Diagnose & Fix</span>
      </div>
    </div>
  );
};

export default InstantSupport;

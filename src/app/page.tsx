"use client"
import React, { useState } from 'react';
import Announcements from '@/components/Announcements';
import GoogleSlides from '@/components/GoogleSlides';
import PomodoroTimer from '@/components/PomodroTimer';
import SpotifyPlaylist from '@/components/SpotifyPlaylist';
import BookQuote from '@/components/BookQuote';
import GoogleForm from '@/components/GoogleForm';
import DailyGrowthChecklist from '@/components/DailyGrowthCheckList';
import StepsHealthTracker from '@/components/StepsHealthTracker';
import Poll from '@/components/Poll';
import OpportunityBoard from '@/components/OpportunityBoard';
import TILCorner from '@/components/TILCorner';
import GoogleKeep from '@/components/GoogleKeep';
import ScribbleNotes from '@/components/ScribbleNotes';
import Settings from '@/components/Settings';

type WidgetState = {
  [key: string]: boolean;
};


export default function Home() {
  const [enabledWidgets, setEnabledWidgets] = useState<WidgetState>({
    announcements: true,
    googleSlides: true,
    pomodoroTimer: true,
    spotifyPlaylist: true,
    bookQuote: true,
    googleForm: true,
    dailyGrowthChecklist: true,
    stepsHealthTracker: true,
    poll: true,
    opportunityBoard: true,
    tilCorner: true,
    googleKeep: true,
    scribbleNotes: true
  });

  const toggleWidget = (widget: string) => {
    setEnabledWidgets(prevState => ({
      ...prevState,
      [widget]: !prevState[widget]
    }));
  };

  const announcements = [
    'Announcement 1: Event at 5 PM.',
    'Announcement 2: Meeting rescheduled to 3 PM.',
    'Announcement 3: New policy updates available.',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <header className="w-full py-4 bg-teal-500 text-white shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold text-gray-100 text-center">Digital Notice Board</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 mt-4">
        {enabledWidgets.announcements && <Announcements announcements={announcements} />}
      </div>
      <main className="flex flex-col flex-1 p-6">
        {/* Main Widgets: Essential and High-Usage */}
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          {enabledWidgets.googleSlides && (
            <div className="w-full md:w-2/3 p-2 bg-teal-50 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
              <div className="w-full h-full">
                <GoogleSlides className="w-full h-full" />
              </div>
            </div>
          )}
          {enabledWidgets.pomodoroTimer && (
            <div className="w-full md:w-1/3 p-2 bg-teal-50 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
              <div className="w-full h-full">
                <PomodoroTimer />
              </div>
            </div>
          )}
        </div>
        {/* Interactive and Collaborative Widgets */}
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          {enabledWidgets.googleForm && (
            <div className="w-full md:w-2/3 p-2 bg-teal-50 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
              <div className="w-full h-full">
                <GoogleForm />
              </div>
            </div>
          )}
          <div className="w-full md:w-1/3 p-2 flex flex-col space-y-4 bg-teal-50 rounded-lg shadow-md">
            {enabledWidgets.bookQuote && (
              <div className="w-full h-full p-2 bg-teal-50 rounded-lg shadow-sm transition-transform transform hover:scale-105 flex items-center justify-center">
                <div className="w-full h-full">
                  <BookQuote />
                </div>
              </div>
            )}
            {enabledWidgets.spotifyPlaylist && (
              <div className="w-full h-full p-2 bg-teal-50 rounded-lg shadow-sm transition-transform transform hover:scale-105 flex items-center justify-center">
                <div className="w-full h-full">
                  <SpotifyPlaylist />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Personal and Team Productivity */}
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          {enabledWidgets.dailyGrowthChecklist && (
            <div className="w-full md:w-1/3 p-2 bg-teal-50 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
              <div className="w-full h-full">
                <DailyGrowthChecklist />
              </div>
            </div>
          )}
          <div className="w-full md:w-1/3 p-2 bg-teal-50 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col space-y-4">
            {enabledWidgets.stepsHealthTracker && (
              <div className="w-full h-full">
                <StepsHealthTracker />
              </div>
            )}
            {enabledWidgets.scribbleNotes && (
              <div className="w-full h-full">
                <ScribbleNotes />
              </div>
            )}
          </div>
          {enabledWidgets.poll && (
            <div className="w-full md:w-1/3 p-2 bg-teal-50 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
              <div className="w-full h-full">
                <Poll />
              </div>
            </div>
          )}
        </div>
        {/* Community and Learning Widgets */}
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          {enabledWidgets.opportunityBoard && (
            <div className="w-full md:w-2/3 p-2 bg-teal-50 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
              <div className="w-full h-full">
                <OpportunityBoard />
              </div>
            </div>
          )}
          {enabledWidgets.googleKeep && (
            <div className="w-full md:w-1/3 p-2 bg-teal-50 rounded-lg shadow-md mb-4 md:mb-0 transition-transform transform hover:scale-105 flex items-center justify-center">
              <div className="w-full h-full">
                <GoogleKeep />
              </div>
            </div>
          )}
        </div>
        {/* TIL Corner Widget */}
        {enabledWidgets.tilCorner && (
          <div className="w-full p-2 bg-teal-50 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center justify-center">
            <TILCorner />
          </div>
        )}
      </main>
      <footer className="w-full py-4 bg-teal-500 text-white text-center">
        <div className="container mx-auto px-4">
          <p>&copy; Hope you all like it.</p>
        </div>
      </footer>
      {/* <Settings toggleWidget={toggleWidget} enabledWidgets={enabledWidgets} /> */}
    </div>
  );
}
import GoogleForm from '@/components/GoogleForm';
import GoogleSlides from '@/components/GoogleSlides';
import PomodoroTimer from '@/components/PomodroTimer';
import SpotifyPlaylist from '@/components/SpotifyPlaylist';  
import BookQuote from '@/components/BookQuote';
import DailyGrowthChecklist from '@/components/DailyGrowthCheckList';
import StepsHealthTracker from '@/components/StepsHealthTracker';
import Poll from '@/components/Poll';
import OpportunityBoard from '@/components/OpportunityBoard';
import TILCorner from '@/components/TILCorner';
import GoogleKeep from '@/components/GoogleKeep';
import NotionPageEmbed from '@/components/NotionPageEmbed';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-lightest">
      <header className="w-full py-6 bg-darkest text-white shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Digital Notice Board</h1>
        </div>
      </header>
      <main className="flex flex-col flex-1 p-4">
        <div className="flex flex-col md:flex-row flex-1">
          <div className="w-full md:w-2/3 p-4 bg-light rounded-lg shadow-md">
            <GoogleSlides className="w-full h-full" />
          </div>
          <div className="w-full md:w-1/3 p-4 bg-light rounded-lg shadow-md">
            <PomodoroTimer />
          </div>
        </div>
        <div className='flex flex-col md:flex-row flex-1'>
          <div className="w-full md:w-1/3 p-4 flex flex-col bg-light rounded-lg shadow-md">
            <div className='mb-4'>
              <BookQuote />
            </div>
            <SpotifyPlaylist />
          </div>
          <div className="w-full md:w-2/3 p-4 bg-light rounded-lg shadow-md">
            <GoogleForm />
          </div>
        </div>
        <div className='flex flex-col md:flex-row flex-1'>
          <div className="w-full md:w-1/3 p-4 bg-light rounded-lg shadow-md">
            <DailyGrowthChecklist />
          </div>
          <div className="w-full md:w-1/3 p-4 bg-light rounded-lg shadow-md">
            <StepsHealthTracker />
          </div>
          <div className="w-full md:w-1/3 p-4 bg-light rounded-lg shadow-md">
            <Poll />
          </div>
        </div>
        <div className='flex flex-col md:flex-row flex-1'>
          <div className="w-full md:w-2/3 p-4 bg-light rounded-lg shadow-md">
            <OpportunityBoard />
          </div>
          <div className='p-4 bg-light rounded-lg shadow-md'>
            <TILCorner />
          </div>
          <div className='p-4 bg-light rounded-lg shadow-md'>
            <GoogleKeep />
          </div>
        </div>
        <div className='w-full p-4 bg-light rounded-lg shadow-md'>
          <NotionPageEmbed />
        </div>
      </main>
      <footer className="w-full py-4 bg-darkest text-white text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Digital Notice Board. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
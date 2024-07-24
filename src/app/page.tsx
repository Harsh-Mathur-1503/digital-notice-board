import GoogleForm from '@/components/GoogleForm';
import GoogleSlides from '../components/GoogleSlides';
import PomodoroTimer from '../components/PomodroTimer';
import SpotifyPlaylist from '../components/SpotifyPlaylist';  
import BookQuote from '@/components/BookQuote';
import DailyGrowthChecklist from '@/components/DailyGrowthCheckList';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="w-full py-6 bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Digital Notice Board</h1>
        </div>
      </header>
      <main className="flex flex-col flex-1 p-4">
        <div className="flex flex-col md:flex-row flex-1">
          <div className="w-full md:w-2/3 p-4">
            <GoogleSlides className="w-full h-full" />
          </div>
          <div className="w-full md:w-1/3 p-4">
            <PomodoroTimer />
          </div>
        </div>
        <div className='flex flex-col md:flex-row flex-1'>
          <div className="w-full md:w-1/3 p-4 flex flex-col">
            <div className='mb-4'>
              <BookQuote />
            </div>
            <SpotifyPlaylist />
          </div>
          <div className="w-full md:w-2/3 p-4">
            <GoogleForm />
          </div>
        </div>
        <div>
          <DailyGrowthChecklist />
        </div>
      </main>
      <footer className="w-full py-4 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Digital Notice Board. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
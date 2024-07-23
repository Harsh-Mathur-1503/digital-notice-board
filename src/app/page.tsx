import GoogleSlides from '../components/GoogleSlides';
import PomodoroTimer from '../components/PomodroTimer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="w-full py-6 bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Digital Notice Board</h1>
        </div>
      </header>
      <main className="flex flex-1">
        <div className="w-3/4 p-4">
          <GoogleSlides className="w-full h-full" />
        </div>
        <div className="w-1/4 p-4">
          <PomodoroTimer className="w-full h-full" />
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
import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';

export default function App() {
  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center p-4 md:p-8"
      style={{ backgroundImage: "url('/motif-orange.jpg')" }}
    >
      <div className="relative flex h-[92vh] w-full max-w-[1600px] overflow-hidden rounded-3xl border border-black/20 bg-bg text-white shadow-2xl">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <TopBar />
          <main className="flex-1 overflow-y-auto px-8 py-6">
            <div className="mx-auto max-w-[1400px]">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

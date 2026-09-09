import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';

export default function App() {
  return (
    <div
      className="flex min-h-screen w-full items-center justify-center p-4 md:p-8"
      style={{
        background:
          'radial-gradient(120% 140% at 15% 10%, #ffb066 0%, #ff7a30 32%, #e2540f 62%, #b23c0a 100%)',
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 2px, transparent 2px, transparent 40px), repeating-linear-gradient(-45deg, #fff 0, #fff 2px, transparent 2px, transparent 40px)',
        }}
      />

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

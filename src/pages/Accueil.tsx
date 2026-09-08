import { AboutYouSection } from '../components/AboutYouSection';
import { PerformanceSection } from '../components/PerformanceSection';
import { TaskTrackingSection } from '../components/TaskTrackingSection';

export default function Accueil() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-[1.4fr_1fr] gap-6">
        <TaskTrackingSection />
        <PerformanceSection />
      </div>
      <AboutYouSection />
    </div>
  );
}

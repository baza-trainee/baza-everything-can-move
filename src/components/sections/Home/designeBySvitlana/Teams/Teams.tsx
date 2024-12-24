'use client'; // Додайте це, якщо використовуєте Next.js
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
import Link from 'next/link';

import StarsComponent from './StarsComponent';

// import { Canvas } from '@react-three/fiber';
// import StrokeText from './Simple3DText';
// import { OrbitControls } from '@react-three/drei';

export default function Teams() {
  // Початкові налаштування камери
  // const [cameraSettings, setCameraSettings] = useState<{
  //   position: [number, number, number]; // Масив з трьома координатами
  //   fov: number; // Поле огляду
  // }>({
  //   position: [2, 1, 10],
  //   fov: 40,
  // });

  // Налаштування камери залежно від ширини вікна
  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     if (width < 768) {
  //       setCameraSettings({ position: [3, 1, 12], fov: 50 }); // Мобільна версія
  //     } else if (width < 1024) {
  //       setCameraSettings({ position: [2.5, 1, 11], fov: 45 }); // Планшет
  //     } else {
  //       setCameraSettings({ position: [2, 1, 10], fov: 40 }); // Десктоп
  //     }
  //   };

  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <Background text="01 // Команда" bg="white" xl={1142}>
      <section className="teams l mb-[222px] pt-2 text-olga-grid">
        <div className="container relative">
          <AnimatedTitle
            title="команди"
            colorBg="white"
            className="lg:text-[76px]"
          />
          <div className="flex flex-wrap gap-12">
            <div className="text mb-8 2xl:mb-0">
              <div className="mb-6 items-center gap-8 text-lg uppercase lg:flex">
                ми об&apos;єднуємо
                <p className="border-sky-500 rounded-2xl border-2 border-solid px-6 py-1 text-md">
                  дизайнерів
                </p>
              </div>
              <p className="mb-5 lg:w-[485px]">
                На початку у нас заходило по 20-25 осіб до команди. Зараз
                оптимальний розмір - до десяти людей:
              </p>
              <ul className="mb-10 gap-8 lg:flex">
                <li>
                  <p className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 bg-s-light-purple"></span>
                    2-3 дизайнера
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 bg-s-light-purple"></span>
                    2-3 фронта
                  </p>
                </li>
                <li>
                  <p className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 bg-s-light-purple"></span>
                    3 тестувальника
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 bg-s-light-purple"></span>
                    & Іван
                  </p>
                </li>
              </ul>
              <Link
                href="/team"
                className="border-sky-500 hover:bg-sky-700 relative z-10 flex max-w-48 rounded-3xl border-2 border-solid bg-s-gray py-2 pb-2 pl-8 text-md uppercase text-white"
              >
                переглянути
                <div className="absolute -right-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="none"
                    viewBox="0 0 28 28"
                  >
                    <circle cx="14" cy="14" r="14" fill="#8F8DED"></circle>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.623 7.632c3.332 1.675 7.992 3.304 7.992 3.304m0 0s-1.108 2.789-1.277 8.984m1.277-8.984L8.407 17.37"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="relative">
              <StarsComponent />
            </div>

            {/* <div className="absolute bottom-0 h-[40%] w-[72%] lg:bottom-48 lg:right-[-15%]">
              <Canvas
                camera={{
                  position: cameraSettings.position,
                  fov: cameraSettings.fov,
                }}
              >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <OrbitControls
                  enableZoom={true}
                  enablePan={true}
                  autoRotate={false}
                />
                <StrokeText
                  text={`Three.js\nStroke text.`}
                  position={[-4, 1, 3]}
                  color="#fff"
                  strokeColor="#5898b8"
                  strokeWidth={0.1}
                  rotation={[0, 0, 0]}
                  scale={[1, 1, 1]}
                />
              </Canvas>
            </div> */}
          </div>
        </div>
      </section>
    </Background>
  );
}

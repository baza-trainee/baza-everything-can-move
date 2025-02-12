import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Galaxy from '../../common/Galaxy';

function GalaxySvitlana() {
  return (
    <div className="mx-auto h-[40%] w-full lg:h-[50%] 2xl:mx-0 2xl:h-[560px] 2xl:w-[629px]">
      <Canvas camera={{ position: [0, 8, 0], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 10, 0]} intensity={1.8} />
        <Galaxy
          radius={3.7}
          colors={{ insideColor: '#ffa575', outsideColor: '#311599' }}
          size={0.05}
          spinMultiplier={2.3}
          range={0.8}
          rangeY={0.8}
        />
        <OrbitControls 
        enableDamping={true} 
        minDistance={8} 
        maxDistance={20}
        enablePan={false}
         />
      </Canvas>
    </div>
  );
}

export default GalaxySvitlana;

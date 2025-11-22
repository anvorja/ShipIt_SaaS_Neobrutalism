// // src/components/landing/StackSupport.tsx
//
// const StackSupport = () => {
//     // Iconos de tecnologías - Primera fila (se mueve a la derecha)
//     const topRowStacks = [
//         { name: 'Python', icon: '🐍', color: 'bg-[#3776AB]' },
//         { name: 'Node.js', icon: '🟢', color: 'bg-[#339933]' },
//         { name: 'React', icon: '⚛️', color: 'bg-[#61DAFB]' },
//         { name: 'Go', icon: '🔵', color: 'bg-[#00ADD8]' },
//         { name: 'Rust', icon: '🦀', color: 'bg-[#000000]' },
//         { name: 'Vue', icon: '💚', color: 'bg-[#4FC08D]' },
//         { name: 'TypeScript', icon: '📘', color: 'bg-[#3178C6]' },
//         { name: 'Java', icon: '☕', color: 'bg-[#007396]' },
//         { name: 'Ruby', icon: '💎', color: 'bg-[#CC342D]' },
//         { name: 'PHP', icon: '🐘', color: 'bg-[#777BB4]' },
//     ];
//
//     // Iconos de herramientas - Segunda fila (se mueve a la izquierda)
//     const bottomRowStacks = [
//         { name: 'Docker', icon: '🐳', color: 'bg-[#2496ED]' },
//         { name: 'Kubernetes', icon: '☸️', color: 'bg-[#326CE5]' },
//         { name: 'PostgreSQL', icon: '🐘', color: 'bg-[#336791]' },
//         { name: 'MongoDB', icon: '🍃', color: 'bg-[#47A248]' },
//         { name: 'Redis', icon: '🔴', color: 'bg-[#DC382D]' },
//         { name: 'Next.js', icon: '▲', color: 'bg-[#000000]' },
//         { name: 'Django', icon: '🎸', color: 'bg-[#092E20]' },
//         { name: 'FastAPI', icon: '⚡', color: 'bg-[#009688]' },
//         { name: 'Angular', icon: '🅰️', color: 'bg-[#DD0031]' },
//         { name: 'Laravel', icon: '🔺', color: 'bg-[#FF2D20]' },
//     ];
//
//     // Duplicamos los arrays para crear el efecto infinito
//     const topRowInfinite = [...topRowStacks, ...topRowStacks, ...topRowStacks];
//     const bottomRowInfinite = [...bottomRowStacks, ...bottomRowStacks, ...bottomRowStacks];
//
//     return (
//         <section className="py-16 md:py-24 px-4 sm:px-6 bg-black text-white overflow-hidden">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-12 md:mb-16">
//                     <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
//                         Whatever your stack,
//                         <br />
//                         <span className="inline-block mt-2">it runs on ShipIt.</span>
//                     </h2>
//                     <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
//                         Auto-detect your tech stack. No config required.
//                     </p>
//                 </div>
//
//                 {/* Carrusel Superior - Mueve a la derecha */}
//                 <div className="relative mb-6 md:mb-8">
//                     <div className="overflow-hidden">
//                         <div className="flex animate-scroll-right">
//                             {topRowInfinite.map((stack, index) => (
//                                 <div
//                                     key={`top-${index}`}
//                                     className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4"
//                                 >
//                                     <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white brutal-border brutal-shadow-yellow brutal-hover flex flex-col items-center justify-center gap-1 md:gap-2">
//                                         <span className="text-3xl sm:text-4xl md:text-5xl">{stack.icon}</span>
//                                         <span className="text-xs sm:text-sm font-bold text-black">{stack.name}</span>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//
//                 {/* Carrusel Inferior - Mueve a la izquierda */}
//                 <div className="relative">
//                     <div className="overflow-hidden">
//                         <div className="flex animate-scroll-left">
//                             {bottomRowInfinite.map((stack, index) => (
//                                 <div
//                                     key={`bottom-${index}`}
//                                     className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4"
//                                 >
//                                     <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white brutal-border brutal-shadow-cyan brutal-hover flex flex-col items-center justify-center gap-1 md:gap-2">
//                                         <span className="text-3xl sm:text-4xl md:text-5xl">{stack.icon}</span>
//                                         <span className="text-xs sm:text-sm font-bold text-black">{stack.name}</span>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//
//                 {/* CTA Section */}
//                 <div className="text-center mt-12 md:mt-16">
//                     <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
//                         Don't see yours?{' '}
//                         <span className="text-brutal-yellow">We'll add it.</span>
//                     </p>
//                     <p className="text-base sm:text-lg text-gray-400">
//                         Custom stacks supported. Just ask.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default StackSupport;




// opcion genial
// src/components/landing/StackSupport.tsx
import {
    siPython, siNodedotjs, siReact, siGo, siRust, siVuedotjs,
    siTypescript, siRuby, siPhp,
    siDocker, siKubernetes, siMongodb,
    siRedis, siNextdotjs, siDjango, siPostgresql,
    siAngular, siLaravel, siFastapi
} from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

const StackSupport = () => {
    const topRowStacks = [
        { name: 'Python', icon: siPython },
        { name: 'Node.js', icon: siNodedotjs },
        { name: 'React', icon: siReact },
        { name: 'Go', icon: siGo },
        { name: 'Rust', icon: siRust },
        { name: 'Vue', icon: siVuedotjs },
        { name: 'TypeScript', icon: siTypescript },
        { name: 'Ruby', icon: siRuby },
        { name: 'FastAPI', icon: siFastapi },
        { name: 'PHP', icon: siPhp },
    ];

    const bottomRowStacks = [
        { name: 'Docker', icon: siDocker },
        { name: 'Kubernetes', icon: siKubernetes },
        { name: 'MongoDB', icon: siMongodb },
        { name: 'Redis', icon: siRedis },
        { name: 'Next.js', icon: siNextdotjs },
        { name: 'Django', icon: siDjango },
        { name: 'Postgres', icon: siPostgresql },
        { name: 'Angular', icon: siAngular },
        { name: 'Laravel', icon: siLaravel },
    ];

    // Duplicamos 3 veces para un loop perfecto
    const topRowInfinite = [...topRowStacks, ...topRowStacks, ...topRowStacks];
    const bottomRowInfinite = [...bottomRowStacks, ...bottomRowStacks, ...bottomRowStacks];

    // Componente SVG reutilizable con tipo correcto
    const TechIcon = ({ icon, size = 64 }: { icon: SimpleIcon; size?: number }) => ( // ← FIX: Sin 'any'
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className="drop-shadow-md"
            fill={`#${icon.hex}`}
            //fill="black"
            dangerouslySetInnerHTML={{ __html: icon.svg }}
        />
    );

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
                        Whatever your stack,
                        <br />
                        <span className="inline-block mt-2">it runs on ShipIt.</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        Auto-detect your tech stack. No config required.
                    </p>
                </div>

                {/* Carrusel Superior → derecha */}
                <div className="relative mb-6 md:mb-8">
                    <div className="overflow-hidden">
                        <div className="flex animate-scroll-right gap-4 md:gap-6">
                            {topRowInfinite.map((stack, index) => (
                                <div key={`top-${index}`} className="flex-shrink-0">
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white brutal-border brutal-shadow-yellow brutal-hover flex flex-col items-center justify-center gap-2">
                                        <TechIcon icon={stack.icon} size={72} />
                                        <span className="text-xs sm:text-sm font-bold text-black mt-1">
                      {stack.name}
                    </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Carrusel Inferior ← izquierda */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex animate-scroll-left gap-4 md:gap-6">
                            {bottomRowInfinite.map((stack, index) => (
                                <div key={`bottom-${index}`} className="flex-shrink-0">
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white brutal-border brutal-shadow-cyan brutal-hover flex flex-col items-center justify-center gap-2">
                                        <TechIcon icon={stack.icon} size={72} />
                                        <span className="text-xs sm:text-sm font-bold text-black mt-1">
                      {stack.name}
                    </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12 md:mt-16">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                        Don't see yours? <span className="text-brutal-yellow">We'll add it.</span>
                    </p>
                    <p className="text-base sm:text-lg text-gray-400">
                        Custom stacks supported. Just ask.
                    </p>
                </div>
            </div>
                    </section>
    );
};

export default StackSupport;


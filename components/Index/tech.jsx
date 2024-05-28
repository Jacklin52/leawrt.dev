import swr from '../../lib/swr.jsx';

export default function Techs() {
    const { data: fetchedTechs } = swr('/api/util/tech');
    const techs = fetchedTechs || null;
    
    return (
        <div className="w-full py-2 px-5">
            <div className="max-w-screen-lg mx-auto w-full">
                <div className="flex items-center space-x-3">
        
                </div>
                <div className="gap-2 pt-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {techs ? techs.map((tech, index) => (
                        <div key={index} className="bg-[#ced4da] hover:-translate-y-[3px] hover:bg-[#b7c6d4] transition-all duration-200 rounded-lg p-2 px-3 flex items-center justify-between">
                            <img src={"/img/techs/" + tech[1]} className="h-6 max-w-[24px]" /> {tech[0]}
                        </div>
                    )) : Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className="bg-[#ced4da] hover:-translate-y-[3px] hover:bg-[#b7c6d4] transition-all duration-200 rounded-lg p-2 px-3 flex items-center justify-between">
                            <div className="animate-pulse w-6 h-6 rounded-lg bg-white/10" />
                            <div style={{ width: `${[ 5, 6, 7 ][Math.floor(Math.random() * 3)]}rem` }} className={`animate-pulse h-6 rounded-lg bg-white/10`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
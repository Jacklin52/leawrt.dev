import swr from '../../lib/swr.jsx';
import Link from 'next/link';
import styles from './styles.module.css';

export default function MyRepos() {
    const { data: myRepos } = swr('/api/util/reposAPi', 600000);
    const repos = myRepos ? Array.isArray(myRepos) ? myRepos.slice(0, 6) : [] : [];
   
    if (myRepos && repos.length < 6) {
        for(let i = 0; i < (6 - repos.length); i++) {
            repos.push();
        };
    };

    return (
        <div className="w-full pb-16 pt-2 block px-5">

                <div className="flex items-center space-x-3">
                  
                
                </div>
                {myRepos ? <div className="mt-8 grid grid-cols-3 lg:grid-cols-3 gap-5">
                    {repos.map((repo, index) => (
                    <div key={index} style={{ border: '0.5px solid #c1cdd1', paddingBottom: '10px' }} className="bg-[#e8e8e8] bg-gray-300/70 hover:bg-[#d4d6d8]  relative transition-all duration-500 flex flex-col rounded-lg py-4 px-5">
                            {repo ? (
                                <>
                                     <a href={repo.html_url} target="_blank" key={index} >
                                    <div className={styles.color}>
                                    <h1 className="font-semibold text-lg"><i className={`fa-solid fa-book  top-4 right-5`} /> {repo.name}</h1>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-1">
                                    </div>
                                    <div className={styles.color1}>
                                    <p className=" text-xs">{repo.description ?? 'No description provided.'}</p>
                                    </div>
                                </a>

                                <div className="mt-12">
                                <div className="" style={{ margin: '15px', position: 'absolute', bottom: 1, left: 0, fontWeight: '600', fontSize: '14px', color: '#363637' }}>
                                <i className="fa-solid fa-circle" style={{ color: repo.language === 'JavaScript' ? '#fcd34d' :    repo.language === 'TypeScript' ? '#007acc' : repo.language === 'Python' ? '#007acd' : (repo.language === 'None' ? '#000' : '#777') }} />
                                <span style={{ marginLeft: 8 }}>{repo.language ?? 'None'}</span>
                                </div>


                                <div className="text-sm" style={{ margin: '15px', position: 'absolute',  bottom: 0, right: 0 }}>    
             
                                <i className="far fa-star text-center w-4 mr-1 right-5" style={{color: "#38bdf8",}}/> <span style={{  marginleft: 8 }}> {repo.stargazers_count ?? 0} </span> 

                                <i className="far fa-code-branch text-center w-4 mr-1" style={{color: "#6b7280",}}/> {repo.forks_count ?? 0}
                                </div>
                                    
                                    
                               </div>
                                </>
                            ) : (
                                <div className="animate-pulse rounded-lg w-28 h-4 bg-black/10" />
                            )}
                        </div>   
                    ))}
                </div> 
            
                : <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="bg-[#090909] relative rounded-lg p-3">
                            <div className="animate-pulse rounded-lg w-28 h-4 bg-white/10" />
                            <div className="flex items-center space-x-2">
                                <div className="animate-pulse rounded-lg w-6 h-4 mt-2 mb-1 bg-white/10" />
                                <div className="animate-pulse rounded-lg w-4 h-4 mt-2 mb-1 bg-white/10" />
                                <div className="animate-pulse rounded-lg w-8 h-4 mt-2 mb-1 bg-white/10" />
                            </div>
                            <div className="mt-2 flex items-center space-x-2">
                                <div className="animate-pulse rounded-lg w-3 h-3 mt-2 mb-1 bg-white/10" />
                                <div className="animate-pulse rounded-lg w-12 h-3 mt-2 mb-1 bg-white/10" />
                            </div>
             
               
                            <div className="absolute top-4 right-5 w-5 h-5 rounded bg-white/10 animate-pulse" />
                        </div>
                    ))}
                </div>}
            </div>

    );
}

export default function Card({project}:{
  project:any
}) {
  const {title,description,imgUrl,link} = project;
  return (
  <div className="cursor-pointer">
      <div className="p-4 max-w-full mx-auto">
      <article className="group relative w-full h-[300px] bg-cover bg-center mb-6 shadow-none hover:shadow-[10px_10px_0px_rgba(0,0,0,0.3)] transition-all duration-300"
        style={{
          backgroundImage:
            `url(${imgUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-all duration-200" />
        <span className="absolute top-[10%] left-1/2 h-[1px] w-0 bg-white group-hover:w-[90%] group-hover:left-[5%] transition-all duration-300" />
        <span className="absolute bottom-[10%] left-1/2 h-[1px] w-0 bg-white group-hover:w-[90%] group-hover:left-[5%] transition-all duration-300" />

        <span className="absolute left-[10%] top-1/2 w-[1px] h-0 bg-white group-hover:h-[90%] group-hover:top-[5%] transition-all duration-300" />
        <span className="absolute right-[10%] top-1/2 w-[1px] h-0 bg-white group-hover:h-[90%] group-hover:top-[5%] transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-6">
          <div className="uppercase w-full transition-all duration-300 delay-200 group-hover:opacity-0 group-hover:translate-y-5">
            <h2 className="text-xl font-extrabold">{title}</h2>
          </div>
          <div className="absolute opacity-0 translate-y-8 px-6 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-200">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm">{description}</p>

            <a target="_blank" href={link} rel="noopener noreferrer" className="cursor-pointer mt-3 border border-white px-3 py-1 rounded text-sm inline-block">
              Explore
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
  );
}
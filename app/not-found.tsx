export default function Notfound() {
    return (
        <div className="h-screen 2xl:w-1/2 mx-auto flex flex-col justify-center space-y-2">
            <h2 className="text-4xl font-bold">Page Not Found</h2>
            <p className="text-sm text-neutral-200 font-extralight leading-7">Sorry, the page you are looking for does not exist :(</p>
            <p className="underline decoration-wavy decoration-sky-500 decoration-2 underline-offset-4 text-transparent">
                Wavy underline text
            </p>
            <img src="/404.webp" alt="404" className="w-1/2 mt-5" />
        </div>
    )
}
export const Home = () => {
    return (
        <div className={"flex grid justify-center h-screen items-center"}>
            <div className={"space-y-4 p-4 shadow-md border-2 rounded-md w-96 h-min"}>

                <p className={"text-xl"}>Kia ora! My name is Francis Phan.</p>

                <div>
                    I'm a Computer Science student at the University of Canterbury. I love programming! I'm a huge fan of web dev. Contact me at francis@phan.nz or (for faster replies) hph44@uclive.ac.nz.
                </div>

                <div>

                </div>

                <div>
                    What am I up to? Check out my <a href={"https://github.com/francisphn"} className={"text-blue-500"}>GitHub</a>.
                </div>

                <div>
                    I'm looking for an internship. Check out my <a href={"/cv.pdf"} className={"text-blue-500"} download>CV.</a>
                </div>

            </div>
        </div>
    )
}
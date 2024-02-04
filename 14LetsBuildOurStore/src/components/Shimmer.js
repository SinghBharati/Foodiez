const Shimmer = () => {
    return (
        <>
            <div className="h-12 w-80 mx-auto m-3 p-3 rounded bg-gray-300"></div>

            <div className="flex justify-center flex-wrap">
                {Array(10).fill("").map((element, index) => {
                    return (
                    <div className="flex h-80 w-72 m-3 p-3 bg-gray-300" key={index}>
                        <div className="h-40 w-full m-2 p-3 bg-gray-400 justify-center"></div>
                    </div>
                    )
                })}
            </div>
        </>
    );
}

export default Shimmer;
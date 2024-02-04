const ShimmerMenu = () => {
    return (
        <>
            <div className="h-40 w-3/4 mx-auto m-3 p-3 rounded bg-gray-300"></div>

            <div className="flex justify-center flex-wrap">
                {Array(5).fill("").map((element, index) => {
                    return (
                        <div className="h-36 w-3/4 m-3 p-3 bg-gray-300" key={index}>
                            <div className="h-full w-36 rounded bg-gray-400"></div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default ShimmerMenu;
import React from 'react'

function Loader() {
    return (
        <>
            <div class="flex h-screen justify-center items-center">
                {/* <!-- Edge X Ring Spinner s1 --> */}
                <div class="w-12 h-12 rounded-full animate-spin border-x border-solid border-yellow-500 border-t-transparent shadow-md"></div>
            </div>
        </>
    )
}

export default Loader
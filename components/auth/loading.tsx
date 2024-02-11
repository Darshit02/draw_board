import Image from "next/image";

export const Loading = () => {
    return(
        <div className="h-full w-full flex flex-col justify-center items-center">
            <Image
                src="/dream.gif"
                alt="logo"
                width={400}
                height={400}
                // className="animate-spin duration-700" 
            />


        </div>
    )
}
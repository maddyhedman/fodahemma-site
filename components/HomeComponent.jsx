import Container from "./Container"
import Image from "next/image"
import babyfeet from "../public/images/babyfeet.jpg"

const HomeComponent = () => {
    return (
        <div className="bg-green py-10 h-screen">
            <Container>
                <main className="flex justify-center flex-col relative items-center pt-28"> 
                    <div className="w-[20rem]">
                        <Image src={babyfeet} />
                    </div>
                    <h1 className="w-[40rem] absolute text-5xl font-serif text-[#ffffff]">
                        Letar du efter en barnmorska som kan bistå din hemfödsel?
                    </h1>
                   
                </main>
            </Container>
        </div>
    )
}

export default HomeComponent
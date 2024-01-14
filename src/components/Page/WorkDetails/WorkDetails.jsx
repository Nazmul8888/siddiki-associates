import { useState } from "react";
import Container from "../../Hooks/Container";

const accordionData = [
{title: 'Land Case', subtitle: 'Euro bangla builders All Land case successfully ', colorBg: 'bg-amber-500', colorBorder: 'border-amber-500'},
{title: 'heading', subtitle: 'Hi!~ How are you doing? This is my new', colorBg: 'bg-orange-500', colorBorder: 'border-orange-500'},
{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-red-500', colorBorder: 'border-red-500'},
{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-sky-500', colorBorder: 'border-sky-500'},
{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-purple-500', colorBorder: 'border-purple-500'}];



const WorkDetails = () => {
    // Toggle State and Function
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div className=" bg-[#7D0A0A]">
            <Container>
            <div>
         <h1 className="  text-5xl text-[#FFFFE4] text-center  font-bold">Our Achievement</h1>
            <br />
            {/* <p className=" font-serif  text-[#FFFFE4]  font-[18px] ">Our lawyers are knowledgeable, compassionate, and always willing to go the extra mile to ensure the best possible outcome for our clients. <br /> Whether you are facing a legal challenge, seeking to protect your assets, or looking for advice on a business matter, we are here to assist.</p> */}
            
        </div>
        <div className="w-fit mx-auto min-h-[450px] flex gap-1 py-16 ">
        {accordionData.map((_, idx) => (
            <div key={idx} className="flex">
                {/* toggle item */}
                <button onClick={() => handleToggle(idx)} className={`h-full flex justify-around flex-col items-center w-14 ${_.colorBg} text-white rounded-lg relative`}>
                    {isActive === idx && <span className={`w-0 h-0 ${_.colorBorder} border-r-[20px] border-b-[20px] border-r-transparent absolute rotate-[225deg] left-10 top-4`}></span>}
                    <p>{idx + 1}</p>
                    <p className="rotate-[270deg]"></p>
                </button>
                {/* container */}
                <div
                    className={`grid place-content-center bg-gray-200 shadow-md rounded-lg ${
                        isActive === idx ? 'w-56 px-5 opacity-1 scale-1' : 'w-0 opacity-0 scale-0'
                    } text-black ml-2 duration-300 ease-in-out`}
                >
                    <h2 className="lg:text-2xl font-black">{_.title}</h2>
                    <p className="text-black/60">{_.subtitle}</p>
                </div>
            </div>
        ))}
    </div>
    </Container>
    </div>
);
};
export default WorkDetails;
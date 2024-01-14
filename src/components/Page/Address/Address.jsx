import Container from "../../Hooks/Container";


const Address = () => {
    return (
        <div className=" bg-[#4b1e098a]">
            <Container>
        <div className=" flex justify-evenly items-center">
          <div className=" text-[#FFFFE4] shadow font-[14px] p-10 m-5 bg-red-500 font-mono">
            <h1>Chamber</h1>
            <ul >
                <li >Suit # 12-J+H (12th Floor),
                Meherba Plaza; 33, Topkhana Road Dhaka- 1000, Bangladesh</li>
                <li>Mobile: +8801748848487, +8801711540084</li>
                <li>Tel: 02-9571296</li>
                <li>E-mail: info@kazilawchamber.com</li>
                
            </ul>
            </div>  
          <div  className=" text-[#FFFFE4] shadow font-[14px] p-10 m-5 bg-red-500 font-mono ">
            <h1>Chamber</h1>
            <ul>
                <li>Suit # 12-J+H (12th Floor),
                Meherba Plaza; 33, Topkhana Road Dhaka- 1000, Bangladesh</li>
                <li>Mobile: +8801748848487, +8801711540084</li>
                <li>Tel: 02-9571296</li>
                <li>E-mail: info@kazilawchamber.com</li>
                
            </ul>
            </div>  
        </div>
        <div className=" flex justify-evenly items-center">
          <div className=" mr-40 ">
                <img  src="https://i.ibb.co/g4NjwBX/Screenshot-2024-01-14-122822.png" alt="" />  
            </div>  
            <form  className=" " >
                <h1 className=" text-5xl font-bold font-mono">Ask a Question</h1>
            <div className="md:flex mb-8 ">
                <div className="form-control md:w-1/2">
                    <label className="label">
                      
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="name"  placeholder="Your Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="email" placeholder="Your Email" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                <div><textarea className="textarea textarea-info w-96" placeholder="Message"></textarea></div>
                <div><button className="btn btn-info">SEND</button></div>
                </form>
                
        </div>
        </Container>
        <br />
        <br />

        </div>
    );
};

export default Address;
import { useEffect, useState } from "react";
import ClientCard from "./ClientCard";
import Container from "../../Hooks/Container";
import { Link } from "react-router-dom";


const Client = () => {
    const [ourClients, setOurClients] = useState([]);


    useEffect(()=>{
        fetch('client.json')
        .then(res=>res.json())
        .then(data=> setOurClients(data))



    },[])



    return (
      <div >
       <Container>
        <div>
            <h1 className="  text-4xl text-[#FFFFE4] font-bold">Our Clients</h1>
            <br />
            <p className=" font-serif text-[#FFFFE4] font-[18px] ">At Kazi Law Chamber, we believe that our clients’ success is our success. We understand that legal matters can be overwhelming and <br />stressful, which is why we take a personalized approach to each case. Our lawyers work closely with our clients to understand their <br /> unique needs and goals, and develop customized legal strategies that are tailored to their specific situation. We believe in clear and <br /> open communication, and we always keep our clients informed and involved every step of the way. We have represented local and <br /> International clients and provided them with highest quality legal representation and assisted them to deal with their complex disputes.</p>
        </div>
        <br /> 
         <div className=" grid grid-cols-4 gap-2">
           {
            ourClients?.map(item=><ClientCard key={ourClients._id} item={item}></ClientCard>)
           } 
             
        </div>
        <Link >
        <div className="card-body items-center text-center">
        <div className="card-actions">
      <button className="btn btn-primary">See More</button>
    </div>
  </div>
  </Link>
       </Container>
       </div>
    );
};

export default Client;
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Container from "../../Hooks/Container";


const Blog = () => {

    const [article, setArticle] = useState([]);


    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=> setArticle(data))
    },[])
    return (
        <div className="  py-10">
        <Container>
             <div>
         <h1 className="  text-4xl  text-[#FFFFE4] font-bold">Articles / Blogs</h1>
            <br />
            <p className=" font-serif text-[#FFFFE4] font-[18px] ">Our lawyers are knowledgeable, compassionate, and always willing to go the extra mile to ensure the best possible outcome for our clients. <br /> Whether you are facing a legal challenge, seeking to protect your assets, or looking for advice on a business matter, we are here to assist.</p>

        </div>
        <br />
        <div className=" ml-20 grid grid-cols-3 gap-5 ">
            {
                article.map(item=><BlogCard key={Blog._id} item={item}></BlogCard>)
            }
        </div>
        <div className="card-body items-center text-center">
        <div className="card-actions">
      <button className="btn btn-primary">See More</button>
    </div>
  </div>
        </Container>
        </div>
    );
};

export default Blog;
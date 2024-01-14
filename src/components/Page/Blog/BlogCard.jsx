import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
    const {image,title} = item;
  return (
    <div>
        <Link to={'article'}>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    {/* <p>{details}</p> */}
    
  </div>
</div>
</Link>
    </div>
  );
};

export default BlogCard;

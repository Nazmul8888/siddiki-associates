const ClientCard = ({ item }) => {
  const { image } = item;
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="">
          <img
            src={image}
            alt=""
            className=""
          />
        </figure>
        
      </div>
    
    </div>
  );
};

export default ClientCard;

const Info = () => {
  return (
    <section id="info">
      <div className="flex justify-between flex-wrap gap-5">
        <div className="flex items-center gap-4">
          <h5 className="text-6xl text-pink-500 font-bold">1.5</h5>
          <p className="text-gray-400">
            Milion Liters
            <br />
            <span className="text-2xl text-black font-bold">Produces over</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <h5 className="text-6xl text-pink-500 font-bold">29</h5>
          <p className="text-gray-400">Milion
            <br />
          <span className="text-2xl text-black font-bold">Scoops sold</span>
          </p>
          
        </div>
        <div className="flex items-center gap-4">
          <h5 className="text-6xl text-pink-500 font-bold">29</h5>
          <p className="text-gray-400">Years
            <br />
          <span className="text-2xl text-black font-bold">Our Experience</span>
          </p>
          
        </div>
      </div>
    </section>
  );
};
export default Info;

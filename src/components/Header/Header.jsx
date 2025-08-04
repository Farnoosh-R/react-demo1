const Header = () => {
  return (
    <div className="header">
      <div className="w-full px-[12%] pt-[100px] flex gap-4 flex-col lg:flex-row">
        <div className="flex flex-col items-start gap-4 justify-center">
          <small className="text-4xl font-dancing">best sellers</small>
          <h2 className="text-4xl md:text-7xl font-medium text-pink-600">
            Ice Cream Novelties
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae
            nobis incidunt, harum aperiam, repellendus, sunt sed praesentium
            corporis quibusdam itaque fugit deserunt distinctio possimus autem
            veritatis repudiandae maiores ab.
          </p>
          <button className="btn btn-outline">Shop Now</button>
        </div>

        <div className="">
          <img className="rounded-3xl shadow-2xl" src="../src/assets/icecream1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Header;

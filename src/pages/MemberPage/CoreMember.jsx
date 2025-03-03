const CoreMember = () => {
  return (
    <div className="h-[750px]">
      <h1 className="text-white pt-12 pb-16 text-3xl text-center">
        Core Members
      </h1>
      <div className="flex flex-col space-y-28 justify-center">
        <div className="flex space-x-24 text-white justify-center">
          <h1 className="w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            beatae commodi impedit nulla qui mollitia, nobis eaque suscipit
            natus accusamus expedita placeat consequuntur nihil error sequi,
            aquam, tempore maxime! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Perferendis, rerum explicabo itaque fugit ab
            maiores optio doloribus laborum et repellendus magni porro facere
            corrupti aperiam quis doloremque amet! Necessitatibus, harum.
          </h1>
          <div className="flex flex-col space-y-4 items-center justify-center">
          <div
              className="w-36 h-36 rounded-full bg-core-mem"
              style={{
                backgroundColor: "rgba(56, 53, 127, 1)",
                boxShadow: "0 0 40px 40px rgba(56, 53, 127, 0.5)",
                backdropFilter: "blur(8px)",
              }}
            ></div>            <h1>Lorem</h1>
          </div>
        </div>

        <div className="flex space-x-24 text-white justify-center">
          <div className="flex flex-col space-y-4 items-center justify-center">
            <div
              className="w-36 h-36 rounded-full bg-core-mem"
              style={{
                backgroundColor: "rgba(56, 53, 127, 1)",
                boxShadow: "0 0 40px 40px rgba(56, 53, 127, 0.5)",
                backdropFilter: "blur(8px)",
              }}
            ></div>

            <h1>Lorem</h1>
          </div>
          <h1 className="w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
            beatae commodi impedit nulla qui mollitia, nobis eaque suscipit
            natus accusamus expedita placeat consequuntur nihil error sequi,
            aliquam, tempore maxime! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Perferendis, rerum explicabo itaque fugit ab
            maiores optio doloribus laborum et repellendus magni porro facere
            corrupti aperiam quis doloremque amet! Necessitatibus, harum.
          </h1>
        </div>
      </div>
      <div className="w-full px-8 my-16">
        <hr className="bg-gray-400 w-full h-[0.1px]" />
      </div>

      <div className="bg-grad-member relative left-[1200px] top-[-600px] "></div>
    </div>
  );
};

export default CoreMember;

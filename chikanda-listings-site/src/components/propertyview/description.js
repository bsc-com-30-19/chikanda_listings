const Description = () => {
  return (
    <div className="rounded-[25px] bg-p_colu my-[36px]">
      <div className="px-[36px] py-[30px]">
        <h1 className="font-bold text-[32px]">Description:</h1>
        <p className="text-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex justify-end">
          <button className="bg-p_lave mt-[20px] rounded-[15px] hover:bg-neutral-500">
            <h1 className="font-bold text-[24px] py-[5px] px-[10px]">
              Click view location on map!
            </h1>
          </button>
        </div>
        
      </div>

    </div>
  );
};

export default Description;

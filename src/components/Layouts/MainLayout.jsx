const MainLayout = () => {
  return (
    <div className="flex bg-special-mainBg w-screen min-h-screen max-w-full">
      {/* navbar start */}
      <nav className="bg-defaultBlack text-special-bg2 w-36 min-h-screen px-7 py-12 flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-10">Logo</div>
          <div className="flex bg-primary text-white px-4 py-3 rounded-md">
            <div className="mx-auto">A</div>
            <div className="ms-3 hidden">MENU</div>
          </div>
          <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
            <div className="mx-auto">B</div>
            <div className="ms-3 hidden">MENU</div>
          </div>
          <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
            <div className="mx-auto">C</div>
            <div className="ms-3 hidden">MENU</div>
          </div>
        </div>
        <div>
          <div className="flex bg-special-bg3 px-4 py-3 rounded-md">
            <div className="mx-auto">D</div>
            <div className="ms-3 hidden">Logout</div>
          </div>
          <div className="border-b my-10 border-b-special-bg"></div>
          {/* foto */}
          <div className="flex justify-between">
            <div className="mx-auto">foto</div>
            <div className="hidden">
              Username
              <br />
              View Profile
            </div>
            <div className="hidden">icon</div>
          </div>
        </div>
      </nav>
      {/* navbar end */}
      <div className="w-screen">
        {/* header start */}
        <header className="border-b-2 p-6 flex items-center justify-between">
          <div className="flex">
            <div className="font-bold text-lg">Username</div>
            <div className="ms-6 text-gray-03">Oct 17, 2024</div>
          </div>
          <div className="flex">
            <div>Icon</div>
            <div className="ms-10 hidden">Search Box</div>
          </div>
        </header>
        {/* header end */}
        {/* content start */}
        <main className="px-6 py-4">
          {/* top content start */}
          <div className="mb-8">
            <div className="">
              <div className="text-lg text-gray-02 mb-2">Title1</div>
              <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
                widget 1
              </div>
            </div>
            <div className="">
              <div className="text-lg text-gray-02 mb-2">Title2</div>
              <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
                widget 2
              </div>
            </div>
            <div className="">
              <div className="text-lg text-gray-02 mb-2">Title3</div>
              <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
                widget 3
              </div>
            </div>
          </div>
          {/* top content end */}
          {/* bottom content start */}
          <div className="">
            <div className="">
              <div className="text-lg text-gray-02 mb-2">Title4</div>
              <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
                widget 4
              </div>
            </div>
            <div className="">
              <div className="mb-8">
                <div className="text-lg text-gray-02 mb-2">Title5</div>
                <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
                  widget 5
                </div>
              </div>
              <div className="">
                <div className="text-lg text-gray-02 mb-2">Title6</div>
                <div className="bg-white rounded-lg px-6 py-5 shadow-xl">
                  widget 6
                </div>
              </div>
            </div>
          </div>
          {/* bottom content end */}
        </main>
        {/* content end */}
      </div>
    </div>
  );
};

export default MainLayout;

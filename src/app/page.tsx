function Home() {
  return (
    <>
      <div className="w-screen h-screen grid place-items-center">
        {/* Background */}
        <div className="h-screen w-screen bg-[url(/backgrounds/bg-home.jpg)] animate-fadeIn fixed -z-50 bg-cover bg-no-repeat bg-[70%] md:bg-center" />

        {/* Logo */}
        <img
          id="logo"
          src="/so-logos/so-wordmark.png"
          className="h-28 sm:h-36 md:h-52 lg:h-64
                    animate-fadeInSlide transition-all
                    mb-8 hover:scale-105"
          alt="similar outskirts text logo"
        />
      </div>
    </>
  );
}

export default Home;

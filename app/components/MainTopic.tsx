export default function MainTopic() {
  return (
    <div className="mainTopic__texts flex flex-col desktop:flex-row mb-10 desktop:mt-2">
      <h1 className="mb-2 desktop:mb-0 desktop:me-10">
        The Bright future of Web 3.0?
      </h1>
      <div className="mainTopic__texts-descriptions">
        <p className="text-justify mb-5 desktop:me-10">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="outline-none border-none flex items-center justify-center rounded-sm">
          READ MORE
        </button>
      </div>
    </div>
  );
}

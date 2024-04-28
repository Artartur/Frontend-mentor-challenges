export default function New() {
  return (
    <div className="new__container bg-slate-900 mb-10 desktop:mb-0">
      <span className="new__container-title">
        <h2 className="mb-4 ms-4 mt-3">New</h2>
      </span>
      <span className="new__container-topics">
        <h3 className="mb-1 ms-4">Hydrogen VS Electric Cars</h3>
        <p className="mb-3 ms-4">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </span>

      <div className="new__container-separator bg-slate-700 mb-3 ms-4 mt-5"></div>

      <span className="new__container-topics pb-3">
        <h3 className="mb-1 ms-4">The Downsides of AI Artistry</h3>
        <p className="mb-3 ms-4">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </span>

      <div className="new__container-separator bg-slate-700 mb-3 ms-4 mt-5"></div>

      <span className="new__container-topics pb-3">
        <h3 className="mb-1 ms-4">Is VC Funding Drying Up?</h3>
        <p className="mb-5 ms-4">
          Private funding bu VC firms is down 50% YDY. We take a look at what
          that means.
        </p>
      </span>
    </div>
  );
}

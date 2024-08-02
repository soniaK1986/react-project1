export default function CarouselPage(){
    return(
    <>
    <div className="row">
        <div className="col-md-12 p-0">
        <>
  {/* Carousel */}
  <div id="demo" className="carousel slide" data-bs-ride="carousel">
    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to={0}
        className="active"
      />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
      <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
    </div>
    {/* The slideshow/carousel */}
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="pic/slider2.jpg"
          alt="Los Angeles"
          className="d-block"
          style={{ width: "100%", height:"450px",  padding:"0px !important", margin:"0px !important" }}
        />
      </div>

      <div className="carousel-item">
        <img
          src="pic/slider.jpg"
          alt="New York"
          className="d-block"
          style={{ width: "100%", height:"450px",  padding:"0px !important", margin:"0px !important"}}
        />
      </div>

      <div className="carousel-item">
        <img
          src="pic/slider1.jpg"
          alt="Chicago"
          className="d-block"
          style={{ width: "100%", height:"450px" , padding:"0px !important", margin:"0px !important"}}
        />
      </div>
      
    </div>
    {/* Left and right controls/icons */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" />
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" />
    </button>
  </div>


</>

        </div>
    </div>
    
    </>)
}
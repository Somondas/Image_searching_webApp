import react from "react";

const Srimg = (props) =>{
    const image = `https://source.unsplash.com/1000x500/?${props.name}`
   return(
    <>
    <div className="cen">
        <img src={image} alt="Search result" />
    </div>
    </>
   )
}
export default Srimg;
import "../styles/banner.css";

// function Header() {
//     const title = "skincare by tich"
//     return (
//     <h1 style={{
//         paddingLeft: 32,
//         color: 'black'
//     }} >
//         {title.toUpperCase() }
//     </h1>
//     )
// }

// function Description() {
//       return (<p> Let your skin glow with our products and advice 😊❤️ </p> )
// }

function Banner({ children }) {
  return (
    <div className="sbt-banner">
      {children}
      {/* <Description/> */}
    </div>
  );
}

export default Banner;

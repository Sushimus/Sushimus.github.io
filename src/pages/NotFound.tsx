import SiteHeader from "../components/layout/SiteHeader";
import TextBlock from '../components/blocks/TextBlock';

export default function NotFound() {
  //TODO some kind of random page serving here...
  const goHome = () => {
    window.location.href = "/brew";
  };

  return (
    <div 
      onClick={goHome} 
      style={{
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        cursor: "pointer"
      }}
    >
      <SiteHeader />
      <div style={{
        flex: 1, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        padding: "20px"
      }}>
        <div style={{maxWidth: "600px", width: "100%"}}>
          <TextBlock 
             head = "Howdy! You've gotten a bad link :|"
             content = {`
                Click anywhere to continue...
             `}
          />
        </div>
      </div>
    </div>
  );
}
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import FullBath from "./FullBath";
import LivingRoom from "./LivingRoom";
import HalfBath from "./HalfBath";

const Floorplan = (props) => {
  return ( 
    <>
    <Bedroom bedNum={1}/>
    <Kitchen />
    <FullBath />
    <Bedroom bedNum={2}/>
    <LivingRoom />
    <HalfBath />
    <Bedroom bedNum={3}/>
    </>
   );
}
 
export default Floorplan;
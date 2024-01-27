import Section01 from "./components/sections/index/section01.js";
import Section02 from "./components/sections/index/section02.js";
import Section03 from "./components/sections/index/section03.js";
import Section04 from "./components/sections/index/section04.js";
import Section05 from "./components/sections/index/section05.js";
import Section06 from "./components/sections/index/section06.js";
import Section07 from "./components/sections/index/section07.js";

export default function Home() {
  	return (
    	<main className="w-full">
			<Section01/>
			<Section02/>
			<Section03/>
			<Section04/>
			<Section05/>
			<Section06/>
			<Section07/>
    	</main>
  )	;
}

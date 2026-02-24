import "./App.css";
import BrewGallery from './pages/Brew';
import NotFound from './pages/NotFound';
import { slogans } from "./data/slogans";
import { useDateTheme } from "./hooks/useDataTheme";

import SiteHeader from "./components/layout/SiteHeader";
import SlidingImages from "./components/layout/SlidingImages";
import TextBlock from "./components/blocks/TextBlock";
import ImageTextBlock from "./components/blocks/ImageTextBlock";

document.title = slogans[Math.floor(Math.random() * slogans.length)];

export default function App() {
  useDateTheme();
  
  const path = window.location.pathname;
  if (path.endsWith('/brew') || path.endsWith('/brew/')) {
    return <BrewGallery />;
  }

  if (path === "/" || path === "") {
    return (
      <>
        <SiteHeader />

        <div className="main-grid">
          <SlidingImages side="left" />

          {/* dont forget to readd this after it goes live*/}
          {/*- Deep Among the Swarm*/}
          <div className="main-body">
            <TextBlock
              head = "About"
              content = {`
                John Mitchell is an aspiring software developer, graduating from Austin Peay State University with a Bachelor of Science in Software Engineering.

                With over half a decade of experience in the Unity Engine he displays extreme proficiency in C#.
                His other work with Java, Typescript, Godot, and other various engines/languages displays a proven record of adapting quickly.

                Outside of technical accomplishments, he is known for creative thinking in applications such as marketing and product direction.
                In social life John is a proven leader having directed various organizations while attending college and managing online spaces during COVID.

                ### Notable Work Experience
                - Praise Dead
                - Buggos
                - Buggos 2

                ### Other Work Experience
                - Walmart
                - Lowes
                - Dollar General
                - AMC
                - Paul's Pizza Palace
            `}
            />

            <ImageTextBlock
              head="Praise Dead"//Praise Dead AppID -> 2459180
              imgUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/2459180/library_600x900.jpg"
              mobileImgUrl="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2459180/capsule_616x353.jpg"
              link = "https://store.steampowered.com/app/2459180/Praise_Dead/"
              content = {`
                John was added to the team working on Praise Dead in the Spring of 2025.
                He quickly began refactoring legacy code from early in product development, before going on to more than double the amount of content.

                ### Primary Contributions
                - UI/UX Improvements
                - Content Design & Implementation
                - Product Direction
                - Art Reworks
                - Community Management
                - Playtesting
                - Bug Reports
              `}
            />

            <ImageTextBlock
              head = "Buggos"//Buggos AppID -> 789660
              imgUrl = "https://cdn.cloudflare.steamstatic.com/steam/apps/789660/library_600x900.jpg"
              mobileImgUrl = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/789660/capsule_616x353.jpg"
              link = "https://store.steampowered.com/app/789660/Buggos/"
              content = {`
                While never formally adopted onto the team, John took a leading role in community management for fans of the product.
                This culminated in Autumn of 2022 when he assisted level design for an upcoming update and paved the road for future collaborations with Intrepid Marmot LLC.

                ### Primary Contributions
                - Community Management
                - Level Design
                - Playtesting
                - Bug Reports
              `}
            />

            <ImageTextBlock
              head = "Buggos 2"//Buggos 2 AppID -> 2908500
              imgUrl = "https://cdn.cloudflare.steamstatic.com/steam/apps/2908500/library_600x900.jpg"
              mobileImgUrl = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2908500/capsule_616x353.jpg"
              link = "https://store.steampowered.com/app/2908500/Buggos_2/"
              content = {`
                After stopping work on Praise Dead, John was quickly shuttled onto the team to work on Buggos 2 in Autumn of 2025.
                He primarily worked on content design, though he made significant contributions to marketing and the user interface.

                ### Primary Contributions
                - UI/UX Improvements
                - Content Design & Implementation
                - Marketing
                - Community Management
                - Level Design
                - Playtesting
                - Bug Reports
              `}
            />

            {/*<ImageTextBlock
              head = "Deep Among the Swarm"//Deep Among the Swarm AppID -> 2746030
              imgUrl = "https://cdn.cloudflare.steamstatic.com/steam/apps/2746030/library_600x900.jpg"
              mobileImgUrl = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2746030/capsule_616x353.jpg"
              link = "https://store.steampowered.com/app/2746030/Deep_Among_the_Swarm/"
              content = {`
                John took up a collaboration with Pebble Mountain Games in Winter of 2025 to assist with UI/UX and art direction.
                This resulted in a near complete rebranding of the product as well as assistance with remarketing.

                ### Primary Contributions
                - UI/UX Improvements
                - Content Design & Implementation
                - Product Direction
                - Marketing
                - Art Reworks
                - Playtesting
                - Bug Reports
              `}
            />*/}
          </div>

          <SlidingImages side="right" />
        </div>
      </>
    );
  }

  return <NotFound />
}
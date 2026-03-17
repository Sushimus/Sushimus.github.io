import SiteHeader from "../components/layout/SiteHeader";
import SlidingImages from "../components/layout/SlidingImages";
import TextBlock from "../components/blocks/TextBlock";
import ImageTextBlock from "../components/blocks/ImageTextBlock";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <div className="main-grid">
        <SlidingImages side="left" />

        <div className="main-body">
          <TextBlock
            head="About"
            content={`
              John Mitchell is an aspiring software developer, graduating from Austin Peay State University with a Bachelor of Science in Software Engineering.

              With over half a decade of experience in the Unity Engine he displays extreme proficiency in C#.
              His other work with Java, Typescript, Godot, and other various engines/languages displays a proven record of adapting quickly.

              Outside of technical accomplishments, he is known for creative thinking in applications such as marketing and product direction.
              In social life John is a proven leader having directed various organizations while attending college and managing online spaces during COVID.

              ### Technical Toolbox
              - C#/C++
              - Java
              - Typescript
              - Unity
              - React

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
            head="Praise Dead"
            imgUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/2459180/library_600x900.jpg"
            mobileImgUrl="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2459180/capsule_616x353.jpg"
            link="https://store.steampowered.com/app/2459180/Praise_Dead/"
            content={`
              John was added to the team working on Praise Dead in the Spring of 2025.
              He refactored legacy code and more than double the product's content.
              Additionally he reworked much of the UI to be more flexible and maintainable with special focus on improved user experience.

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
            head="Buggos"
            imgUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/789660/library_600x900.jpg"
            mobileImgUrl="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/789660/capsule_616x353.jpg"
            link="https://store.steampowered.com/app/789660/Buggos/"
            content={`
              John took a leading role in community management in Autumn of 2022.
              He also assisted level design and rigorous product testing, submitting dozens of bug reports.

              ### Primary Contributions
              - Community Management
              - Level Design
              - Playtesting
              - Bug Reports
            `}
          />

          <ImageTextBlock
            head="Buggos 2"
            imgUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/2908500/library_600x900.jpg"
            mobileImgUrl="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2908500/capsule_616x353.jpg"
            link="https://store.steampowered.com/app/2908500/Buggos_2/"
            content={`
              John was joined Buggos 2 in Autumn of 2025.
              He primarily worked on content design and implementation, though he made significant contributions to marketing and the user interface.
              These include level transition animations, an in-game encyclopedia, and groundwork for the level editor.

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
        </div>

        <SlidingImages side="right" />
      </div>
    </>
  );
}
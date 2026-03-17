export default function SiteHeader() {
  function goTo(url: string) {
    window.location.href = url;
  }

  return (
    <div className="banner">
      {/*<div className="bannerButtons">
        <button className="iconButton twitchLink" onClick={() => goTo("https://www.twitch.tv/sushimus")} />
        <button className="iconButton youtubeLink" onClick={() => goTo("https://www.youtube.com/channel/UC_uBuGtdaCbfg91U0YnvKvg")} />
        <button className="iconButton instaLink" onClick={() => goTo("https://www.instagram.com/sumihsus/")} />
        <button className="iconButton twitterLink" onClick={() => goTo("https://bsky.app/profile/sumihsus.bsky.social")} />
        <button className="iconButton contact" onClick={() => goTo("mailto:johndoestechtoo@gmail.com")} />
      </div>*/}
      
      <div className="bannerButtons">
        <button className="iconButton contact" onClick={() => goTo("mailto:johndoestechtoo@gmail.com")} />
      </div>

      <h1 className="bannerText">
        <span className="bigTitle">sushimus</span><br />
        <span className="smallTitle">-Undeniably Indie™</span>
      </h1>
    </div>
  );
}
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);

  return (
    <div className="sidebar">
      <a href="https://spotify-clone-67000.web.app">
        <img
          className="sidebar__logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
      </a>

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <br />
      <SidebarOption Icon={AddBoxIcon} title="Create Playlist" />
      <SidebarOption Icon={FavoriteIcon} title="Liked Songs" />
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "./StateProvider";
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';


function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href="https://kevinroozrokh.github.io/" target="blank" rel="noreferrer">
      <h4>Spotify Clone v1.03</h4><h4>Developed by Kevin Roozrokh</h4>
</a>
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <SidebarOption Icon={AddBoxIcon} option="Create Playlist" />
      <SidebarOption Icon={FavoriteIcon} option="Liked Songs" />
      
      
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;

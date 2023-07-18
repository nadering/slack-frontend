import Navigation from "./navigation/navigation";
import Sidebar from "./sidebar/sidebar";
import Channel from "./channel/channel";

export default function Workspace() {
  return (
    <div className="vbox w(100%) h(100%)">
      <Navigation />
      <div className="hbox(stretch) h(calc(100vh-44px))">
        <Sidebar />
        <Channel />
      </div>
    </div>
  );
}

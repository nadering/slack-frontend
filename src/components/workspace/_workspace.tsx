import Navigation from "./navigation/_navigation";
import Sidebar from "./sidebar/_sidebar";
import Channel from "./channel/_channel";

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

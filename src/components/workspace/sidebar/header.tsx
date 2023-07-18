import React from "react";

const Header = React.memo(() => {
  return (
    <div className="vbox gap(4)">
      <div className="hbox gap(8)">
        <button className="hbox relative w(~100%-46px) r(8) p(4/8) gap(12)  hover:bg(--sidebar-background-hover)">
          <span className="w(0~90%) c(--sidebar-workspace) font(18) bold nowrap...">
            {/* Workspace name */}
            {"테스트 워크스페이스"}
          </span>
          <span className="absolute right(8) c(--sidebar-workspace) font(16) ">
            {/* svg icon (downside) */}v
          </span>
        </button>
        <button className="pack absolute right(16) w(34) h(34) r(50%) bg(--sidebar-workspace)">
          {/* svg icon */}
          <span className="c(black) font(16) bold">W</span>
        </button>
      </div>
    </div>
  );
});

export default Header;
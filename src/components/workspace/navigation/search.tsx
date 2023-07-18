export default function Search() {
  return (
    <div className="hbox pack relative flex-basis(40%) flex-grow(1) @w(~1440):w(~none) @w(1440~):w(~700px)">
      <button
        className="hbox space-between flex-basis(40%) r(4) px(8) py(2)
        bg(--search-background) flex-grow(1) hover:bg(--search-background-hover)"
      >
        <span className="c(--search-text) bold font(14) translateY(1px) nowrap...">
          {/* Workspace name */}
          {"테스트 워크스페이스 검색"}
        </span>
        <div className="c(--search-text)">{/* svg icon (search) */}@</div>
      </button>
      <button className="absolute right(32) c(--search-text)">
        {/* filter */}#
      </button>
    </div>
  );
}
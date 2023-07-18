import Header from "./header";

export default function Sidebar() {
  return (
    <div className="vbox w(0~260) h(100%) relative p(8/12) gap(8) bg(--sidebar-background) flex-basis(200px)
    transition(transform=.15s/visibility=.15s) @w(~585):translateX(-100%)+hidden+blind @w(~859):w(200~) @w(860~):w(220~) @w(1080~):w(260~)">
      <Header />
      <hr className="b(1/solid/--sidebar-border) mx(-12)"></hr>
    </div>
  );
}

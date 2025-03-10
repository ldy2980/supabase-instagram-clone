"use client";

import { selectedIndexState } from "utils/recoil/atoms";
import Person from "./Person";
import { useRecoilState } from "node_modules/recoil";

export default function ChatPeopleLit() {
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedIndexState);

  return (
    <div className="h-screen min-w-60 flex flex-col bg-gray-50">
      <Person
        onClick={() => setSelectedIndex(0)}
        index={0}
        isActive={selectedIndex === 0}
        name={"LDY"}
        onChatScreen={false}
        onlineAt={new Date().toISOString()}
        userId={"ldy"}
      />
      <Person
        onClick={() => setSelectedIndex(1)}
        index={1}
        isActive={selectedIndex === 1}
        name={"HGD"}
        onChatScreen={false}
        onlineAt={new Date().toISOString()}
        userId={"hgd"}
      />
    </div>
  );
}

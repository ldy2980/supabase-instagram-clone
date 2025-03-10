"use client";

import Person from "./Person";
import Message from "./Message";
import { useRecoilValue } from "node_modules/recoil";
import { selectedIndexState } from "utils/recoil/atoms";

export default function ChatScreen() {
  const selectedIndex = useRecoilValue(selectedIndexState);

  return selectedIndex !== null ? (
    <div className="w-full h-screen flex flex-col">
      <Person
        index={selectedIndex}
        isActive={false}
        name={"LDY"}
        onChatScreen={true}
        onlineAt={new Date().toISOString()}
        userId={"ldy"}
      />

      <div className="w-full flex-1 flex flex-col p-4 gap-3">
        <Message isFromMe={true} message={"Hello"} />
        <Message isFromMe={false} message={"Hello"} />
        <Message isFromMe={false} message={"ㅗㅗㅗ"} />
        <Message isFromMe={true} message={"STFU"} />
      </div>

      <div className="flex">
        <input
          className="p-3 w-full border-2 border-light-blue-600"
          placeholder="메시지를 입력하세요."
        />

        <button
          className="min-w-20 p-3 bg-light-blue-600 text-white"
          color="light-blue"
        >
          <span>전송</span>
        </button>
      </div>
    </div>
  ) : (
    <div className="w-full"></div>
  );
}

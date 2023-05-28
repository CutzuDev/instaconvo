import { useEffect, useState } from "react";
import TextMe from "./TextMe";
import TextOther from "./TextOther";
type Message = {
  text: string;
  fromwho: boolean;
};
function Convo() {
  const [menu, setmenu] = useState(false);
  const [image, setimage] = useState(
    "https://cdn.discordapp.com/avatars/833033446980714526/99bfc6e1291b1b43d19e19bc7bd9b3b7.png"
  );
  const [messageText, setmessageText] = useState("");
  const [messageList, setmessageList] = useState<Message[]>([]);

  function handleMessageText(event: React.ChangeEvent<HTMLInputElement>) {
    setmessageText(event.target.value);
  }
  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setimage(event.target.value);
  }

  return (
    <div className="min-h-screen relative p-5 text-white bg-black w-full max-w-[400px]">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 hover:cursor-pointer"
            onClick={() => setmenu(!menu)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <div className="flex justify-center items-center pl-5 gap-4">
            <img src={image} className="w-8 h-8 rounded-full aspect-square " />
            <div className="flex flex-col justify-center items-start w-[82px]">
              <input
                maxLength={10}
                className="bg-transparent outline-none text-sm w-full"
                placeholder="Input name"
              />
              <span className="text-xs opacity-70">Active now</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
            />
          </svg>
        </div>
      </div>
      <div className="flex mt-5 gap-2 flex-col justify-center items-center">
        {messageList.map((item, index) => {
          const nextItem =
            index < messageList.length - 1 ? messageList[index + 1] : null;
          if (item.fromwho) {
            if (!nextItem?.fromwho) {
              return (
                <TextOther imageShow={true} imageSrc={image} text={item.text} />
              );
            }
            return <TextOther text={item.text} imageShow={false} />;
          }
          return <TextMe text={item.text} />;
        })}
      </div>
      {/* MENU BELLOW */}
      <div
        className={`absolute ${
          menu ? "flex" : "hidden"
        }  flex-col justify-start items-center gap-10 top-0 w-full left-0 h-screen backdrop-blur-sm p-5 bg-black bg-opacity-50`}
      >
        <div className="w-full flex justify-start items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 hover:cursor-pointer"
            onClick={() => setmenu(!menu)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <span className="opacity-70">{`Image url (discord cdn)`}</span>
          <input
            type="text"
            onChange={handleImageChange}
            className="outline-none bg-neutral-950 p-3 w-full rounded-lg border border-opacity-10 transition-all border-white focus:border-opacity-75"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <span className="opacity-70">Message text</span>
          <input
            type="text"
            onChange={handleMessageText}
            value={messageText}
            maxLength={30}
            className="outline-none bg-neutral-950 p-3 w-full rounded-lg border border-opacity-10 transition-all border-white focus:border-opacity-75"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-5">
          <span className="opacity-70">Send as:</span>
          <button
            onClick={() => {
              setmessageList([
                ...messageList,
                { fromwho: false, text: messageText },
              ]);
              setmessageText("");
            }}
            className="bg-neutral-950 rounded-lg border border-white border-opacity-10 w-full p-3"
          >
            You
          </button>
          <button
            onClick={() => {
              setmessageList([
                ...messageList,
                { fromwho: true, text: messageText },
              ]);
              setmessageText("");
            }}
            className="bg-neutral-950 rounded-lg border border-white border-opacity-10 w-full p-3"
          >
            Other person
          </button>
        </div>
      </div>
    </div>
  );
}

export default Convo;

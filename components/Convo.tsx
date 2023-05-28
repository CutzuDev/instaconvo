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
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [imageLink, setimageLink] = useState("");
  const [messageText, setmessageText] = useState("");
  const [messageList, setmessageList] = useState<Message[]>([]);

  function handleMessageText(event: React.ChangeEvent<HTMLInputElement>) {
    setmessageText(event.target.value);
  }

  useEffect(() => {
    setmessageList([{ text: "asdasdasdas", fromwho: false }]);
  }, []);

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
      <div className="absolute bottom-0 p-3 left-0 w-full h-[4.5rem] flex items-center justify-center ">
        <div
          onClick={() => setmenu(!menu)}
          className="flex-1 flex justify-between items-center rounded-full h-full p-1 border border-white border-opacity-25"
        >
          <div className="flex items-center justify-center gap-2">
            <div className="bg-gradient-to-tr from-blue-500 to-blue-400 p-2 w-fit rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                <path
                  fillRule="evenodd"
                  d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="tex-xs opacity-70">Message...</span>
          </div>
          <div className="flex justify-center items-center gap-3 pr-3">
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
                d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
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
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
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
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
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
          <span className="opacity-70">Image url</span>
          <input
            type="text"
            onChange={(event) => setimageLink(event.target.value)}
            className="outline-none bg-neutral-950 p-3 w-full rounded-lg border border-opacity-10 transition-all border-white focus:border-opacity-75"
          />
          <button
            onClick={() => {
              if (imageLink !== "") {
                setimage(imageLink);
              }
            }}
            className="bg-neutral-950 rounded-lg border border-white border-opacity-10 w-full p-3"
          >
            Set Image
          </button>
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
              if (messageText) {
                setmessageList([
                  ...messageList,
                  { fromwho: false, text: messageText },
                ]);
                setmessageText("");
              }
            }}
            className="bg-neutral-950 rounded-lg border border-white border-opacity-10 w-full p-3"
          >
            You
          </button>
          <button
            onClick={() => {
              if (messageText) {
                setmessageList([
                  ...messageList,
                  { fromwho: true, text: messageText },
                ]);
                setmessageText("");
              }
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

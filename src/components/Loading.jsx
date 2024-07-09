const Loading = () => {
  return (
    <div className="absolute top-96 left-1/2 -translate-x-1/2 translate-y-1/2 ">
      <div className="flex space-x-4 justify-center items-center h-96">
        <div className="h-8 w-8 bg-orange-500 bg-opacity-90 border-2 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-orange-500 bg-opacity-90 border-2 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-orange-500 bg-opacity-90 border-2 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};
export default Loading;

const PageLoading = () => {
  return (
    <div className="h-screen grid place-items-center fixed w-screen z-50 top-0 bg-gray-50 opacity-75 overflow-hidden">
      <div 
        className="w-20 h-20 border-4 border-t-transparent border-main border-solid rounded-full animate-spin"></div>
    </div>
  );
};
export default PageLoading;
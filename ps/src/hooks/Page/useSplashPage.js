// useSplashPage.js
const useSplashPage = (setTopic, goToInputPage) => {
    const handleSubmit = (inputTopic) => {
      if (!inputTopic.trim()) {
        alert('Please enter a valid topic.');
        return;
      }
      setTopic(inputTopic);
      goToInputPage(inputTopic);
    };
  
    return { handleSubmit };
};

export default useSplashPage;

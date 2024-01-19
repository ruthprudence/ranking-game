// useSplashPage.js
import { useCallback } from 'react';
import useHandleTopicSubmit from './functions/input/useHandleTopicSubmit';
const useSplashPage = (setTopic, goToInputPage) => {

  const handleTopicSubmitFunc = useHandleTopicSubmit(setTopic, goToInputPage);
  
    return { handleTopicSubmitFunc };
};

export default useSplashPage;

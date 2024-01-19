// useSplashPage.js
import { useCallback } from 'react';
import useHandleTopicSubmit from '../../hooks/Page/functions/input/useHandleTopicSubmit';
import useGoToInputPage from '../../hooks/Page/functions/nav/useGoToInputPage';

const useSplashPage = (setTopic, goToInputPage) => {
  const handleTopicSubmitFunc = useHandleTopicSubmit(setTopic, goToInputPage);
  // console.log("Submitting topic:", topic);
  return { handleTopicSubmitFunc };
};

export default useSplashPage;


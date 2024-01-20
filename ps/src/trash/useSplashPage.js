// useSplashPage.js
import { useCallback } from 'react';
import useHandleTopicSubmit from './functions/input/useHandleTopicSubmit';
import useGoToInputPage from './hooks/Page/functions/nav/useGoToInputPage';

const useSplashPage = (setTopic, goToInputPage) => {
  const handleTopicSubmitFunc = useHandleTopicSubmit(setTopic, goToInputPage);

  return { handleTopicSubmitFunc };
};

export default useSplashPage;


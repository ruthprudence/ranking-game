// TopicModel.js
class TopicModel {
    constructor() {
      this.topic = '';
    }
  
    setTopic(newTopic) {
      this.topic = newTopic;
    }
  
    getTopic() {
      return this.topic;
    }
  
    isTopicValid() {
      return this.topic.trim().length > 0;
    }
  }
  
  export default TopicModel;
  
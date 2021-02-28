import { ChatEngine, ChatFeed } from 'react-chat-engine';

import './App.css';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='6be35fa6-d7fe-4b29-9072-2287106f30be'
      userName='userOne'
      userSecret='123456'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
        ).play()
      }
    />
  );
};

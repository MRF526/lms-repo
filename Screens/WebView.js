import React from 'react';
import { WebView } from 'react-native-webview';

const MyWebView = () => {
    return (
        <WebView
            source={{ uri: 'https://en.wiktionary.org/' }}
            style={{ flex: 1 }}
        />
    );
};

export default MyWebView;

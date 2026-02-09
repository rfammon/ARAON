import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

// NOTE: We could use expo-file-system to read this from a file, 
// but for the most reliable delivery in this session, we're embedding the content.
const HTML_CONTENT = `
<!DOCTYPE html>
<html lang="pt-BR">
<!-- [INDEX_HTML_CONTENT_HERE] -->
</html>
`;

export const RiskFormView = ({ html }: { html: string }) => {
    return (
        <View style={styles.container}>
            <WebView
                originWhitelist={['*']}
                source={{ html }}
                style={styles.webview}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFBF7',
    },
    webview: {
        flex: 1,
    },
});

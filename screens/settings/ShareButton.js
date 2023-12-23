import React from 'react';
import { Share, Button,Text,View } from 'react-native';

const ShareButton = () => {
    const share = async () => {
        try {
            const result = await Share.share({
              url: 'https://expo.io',
                message: 'Check out this awesome app!',
                title: 'Invite a friend'
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
      <View>
      <Text style={{fontSize:20, fontWeight:'700', alignSelf:'center',margin:30,padding:10}}> PLEASE SHARE THE APP TO YOUR FELLOW GAMBIANS AND ACROSS THE WORLD </Text>
        <Button title="Tell a friend please" onPress={() => share()} />
        </View>
    );
};

export default ShareButton;

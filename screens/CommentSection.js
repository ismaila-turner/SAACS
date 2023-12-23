import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';


const CommentSection = (navigation) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
 


  return (
    <View>
      {/* <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.comment}</Text>}
      /> */}
      {/* <TextInput
        value={newComment}
        onChangeText={(text) => setNewComment(text)}placeholder="Add a comment"
        /> */}
        <Button
             title="Submit"
           
           />
        </View>
        );
        };
        
        export default CommentSection;
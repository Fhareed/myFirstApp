import React from "react";
import {View, Text} from "react-native";
import Post from "../../components/post";

const post1 = {
    id: 'p1',
    user: {
      id: 'u1',
      username: 'Fhareed',
    },
    songName: 'NF - The search (remix)',
    songImage: 'https://upload.wikimedia.org/wikipedia/en/1/1b/NF_-_The_Search.png',
    likes: 123,
    comments: 12,
}



const Home = () => {
    return (
       <View>
           <Post post={post1} />
       </View>
    );
};

export default Home;
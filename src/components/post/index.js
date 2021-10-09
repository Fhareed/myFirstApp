import React, { useState } from "react";
import {View, Text, Image,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import Video from 'react-native-video';
import styles from "./styles";

const Post = (props) => {
    const [post,setPost] = useState(props.post);
    const [isLiked, setIsLiked] = useState(false)

    const [paused, setPaused] = useState(false);

    const onPlayPausePress = () => {
        setPaused(!paused);
    };

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1;
        setPost({
            ...post,
            likes: post.likes + likesToAdd,
        });
        setIsLiked(!isLiked);
    };


    return(
        <View style={styles.container}>
            <Image source={{uri: post.songImage}} style={styles.songImage} />

            <View>
                <Text style={styles.Text}>{post.songName}</Text>
            </View>

            <View style={styles.Buttons}>
                <TouchableOpacity style={styles.button1}>
                <AntDesign name={"banckward"} size={40} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2}>
                <AntDesign name={"caretright"} size={40} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button3}>
                <AntDesign name={"forward"} size={40} color="black" />
                </TouchableOpacity>
            
            </View>

           <View style= {styles.Feedback}>
               <TouchableOpacity style={styles.like} onPress={onLikePress}>
                   <AntDesign name={"heart"} size={40} color={isLiked ? 'black' : 'white'} />
                   <Text style={styles.likeStats}>{post.likes}</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.upload}>
                   <FontAwesome name={"commenting"} size={40} color="black" />
                   <Text style={styles.comment}>{post.comments}</Text>
               </TouchableOpacity>
            
            
            
            
            </View> 
            

        </View>

        

        
    );
};


export default Post 

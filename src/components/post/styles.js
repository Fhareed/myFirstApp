import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        height: '100%', 
        backgroundColor:"#fab1a0",
        justifyContent:'center',
        alignItems:'center',
        
    },
    
    Text: {

        color:'black',
        fontSize: 20,
        fontWeight:"bold",
        

    },
    songImage:{
        width:300,
        height:300,
        marginBottom:40,
    },

    Buttons:{
        flexDirection: 'row',
        marginTop:70,
    },

    button1:{
       marginRight:100,
    },

    button2:{
        alignSelf:'center'
     },


    button3:{
        marginLeft:100,
     },

    Feedback:{
        flexDirection: 'row',
        marginTop:50,
    },

    like: {
        marginRight:200,
        alignSelf:'flex-end',
    },

    likeStats:{
        marginTop:5,
        fontSize:16,
    },

    comment:{
        marginTop:5,
    }

    

});

export default styles;
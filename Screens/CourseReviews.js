import { TouchableOpacity, Pressable, FlatList,View, Text, StyleSheet } from "react-native";

import { Reviews } from "../components/ChaptersData";
import { Ionicons } from 'react-native-vector-icons';

const CourseReviews = () => {
   

    const ReviewCard = ({ item }) => (
        
            <View style={styles.card}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between' }}>
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <View style={styles.dp}>


                        </View>
                        <View style={{marginLeft:5,}}>
                            <Text style={{ fontSize: 13, fontWeight: '600' }}>{item.Name}</Text>
                            <Text style={{ fontSize: 10, }}>{item.profession}</Text>



                        </View>

                    </View>

                    <View style={styles.ratingContainer}>
                        {[...Array(5)].map((_, index) => (
                            <Ionicons
                                key={index}
                                name={index < item.stars ? 'star' : 'star-outline'}
                                size={12}
                                color="#FFD700"
                            />
                        ))}
                    </View>


                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                    <View >
                        <Text style={{  fontSize:11, justifyContent:'center',} }>{item.text}</Text>


                    </View>

                </View>



            </View>



        



                    )

    return (
        <View style={{ margin: 15, }}>
            
            <FlatList
                data={Reviews}
                renderItem={ReviewCard}
                keyExtractor={(item) => item.id}





            />



        </View>





    );
}
const styles = StyleSheet.create({

    card: {
        width: 338,
        height: 135,
        
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 48, 150, 0.1)',
        marginBottom:15,
        padding:8,



    },
    ratingContainer:{
        flexDirection:'row',
    },
    dp: {

        width: 47,
        height: 47,
        borderRadius: 47 / 2,
        borderWidth: 1,
        backgroundColor: '#D9D9D9'




    },

});

export default CourseReviews;
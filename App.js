import React from 'react'; 
import { View,Text, Image, StyleSheet, SafeAreaView } from 'react-native'; 
const styles = StyleSheet.create({ 
  container: { 
    paddingTop: 50, 
  }, 
  rs: { 
    width: 150, 
    height: 150,
    marginLeft:10,
    borderRadius:15,
  }, 
  hrt: { 
    width: 20, 
    height: 20,
    marginRight:10 
  }, 
  v1:{ 
    flexDirection:'row',
     justifyContent:'space-between',
  }, 
  v2:{ 
    flexDirection:'row', 
    justifyContent:'space-between',
  },
}); 
const home = () => { 
  return ( 
    <SafeAreaView style={styles.container}>
    <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>
    <View style={{width: 150,marginBottom:80}}> 
      <Image 
        style={styles.rs} 
        source={require('../home/assets/i10.jpg')} 
      /> 
      <View style={styles.v1}> 
      <Text style={{fontWeight:'bold',color:'black',marginLeft:20}}>i10</Text> 
      <Image 
        style={styles.hrt} 
        source={require('../home/assets/heart.png')} 
      /> 
      </View>
      </View>
      <View>
      <View style={{width: 150,marginBottom:80}}> 
      <Image 
        style={styles.rs} 
        source={require('../home/assets/Sc.jpg')} 
      /> 
      <View style={styles.v2}> 
      <Text style={{fontWeight:'bold',color:'black',marginLeft:20}}>Scorpio S11</Text> 
      <Image 
        style={styles.hrt} 
        source={require('../home/assets/heart.png')} 
      />
      </View> 
      </View>
      </View>
      <View style={{width: 150,marginBottom:60}}> 
      <Image 
        style={styles.rs} 
        source={require('../home/assets/sofa1.jpg')} 
      /> 
      <View style={styles.v1}> 
      <Text style={{fontWeight:'bold',color:'black',marginLeft:20}}>Sofa Set</Text> 
      <Image 
        style={styles.hrt} 
        source={require('../home/assets/heart.png')} 
      /> 
      </View>
      </View>
      <View>
      <View style={{width: 150,marginBottom:80}}> 
      <Image 
        style={styles.rs} 
        source={require('../home/assets/sofa2.jpg')} 
      /> 
      <View style={styles.v2}> 
      <Text style={{fontWeight:'bold',color:'black',marginLeft:20}}>Blue Sofa</Text> 
      <Image 
        style={styles.hrt} 
        source={require('../home/assets/heart.png')} 
      />
      </View> 
      </View>
      </View>
      <View>
      <View style={{width: 150,marginBottom:80}}>
      <Image 
        style={styles.rs} 
        source={require('../home/assets/ref.jpg')} 
      /> 
      <View style={styles.v1}> 
      <Text style={{fontWeight:'bold',color:'black',marginLeft:20}}>Refrigirator</Text> 
      <Image 
        style={styles.hrt} 
        source={require('../home/assets/heart.png')} 
      /> 
      </View>
      </View>
      </View>
      <View>
      <Image 
        style={styles.rs} 
        source={require('../home/assets/stove.jpg')} 
      /> 
      <View style={styles.v2}> 
      <Text style={{fontWeight:'bold',color:'black',marginLeft:20}}>Stove</Text> 
      <Image 
        style={styles.hrt} 
        source={require('../home/assets/heart.png')} 
      /> 
      </View>
      </View>
      </View>
    </SafeAreaView> 
  ); 
} 
export default home;
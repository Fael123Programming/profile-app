import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Dimensions,
} from 'react-native';
import { CustomButton } from './components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/face.jpg')}
          style={styles.image}
          resizeMode='contain'
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>Janaina Ferreira</Text>
        <Text style={styles.textBody}>
          Hello guys, my name is Janaina Ferreira!
          I'm from Colombia and am really cheerful to be
          here. Contact me and let's start talking!
        </Text>
      </View>
      <View style={styles.buttonSection}>
        <CustomButton
          text={'Ok'}
          hexBaseColor={'#0000FF'}
        />
        <CustomButton
          text={'Reach out'}
          hexBaseColor={'#000074'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black'
  },
  textContainer: {
    flex: 3,
    backgroundColor: '#00C0CC',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeader: {
    fontFamily: 'serif',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textBody: {
    fontFamily: 'serif',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'justify',
    margin: 20
  },
  buttonSection: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('screen').width
  }
});

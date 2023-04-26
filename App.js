import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Dimensions,
  ScrollView
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
        <ScrollView style={styles.innerContainer}>
          <Text style={styles.textBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur nulla sed dapibus venenatis. Nulla tristique erat justo, quis aliquet erat accumsan eget. Donec ultricies tellus quam, sit amet consectetur tortor dictum sit amet. Quisque blandit, sapien a cursus malesuada, tellus sem feugiat eros, in suscipit tellus est nec dolor. Ut vel odio augue. Nunc malesuada purus nec augue blandit feugiat. Donec in finibus nibh, eget ultricies massa. Fusce molestie ultrices ligula, ut accumsan ex sodales suscipit. Integer mollis neque sed orci feugiat laoreet. Fusce ultrices molestie nisi, non elementum erat tempus quis. Mauris vitae sem ut ante tincidunt luctus. Nam non ullamcorper magna. Aenean molestie urna non molestie tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer auctor fermentum orci. Praesent congue quis odio in tincidunt. 
          </Text>
        </ScrollView>
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
  innerContainer: {
    marginBottom: 20
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
    textAlign: 'center',
    margin: 20
  },
  textBody: {
    fontFamily: 'serif',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'justify',
    marginLeft: 20,
    marginRight: 20
  },
  buttonSection: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('screen').width
  }
});
